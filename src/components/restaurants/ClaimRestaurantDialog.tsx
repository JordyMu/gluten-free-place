import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Shield, Mail, CheckCircle } from "lucide-react";

interface ClaimRestaurantDialogProps {
  restaurantName: string;
  restaurantSlug: string;
  restaurantCity: string;
  restaurantCountry: string;
  onClaimSuccess: () => void;
}

export const ClaimRestaurantDialog = ({
  restaurantName,
  restaurantSlug,
  restaurantCity,
  restaurantCountry,
  onClaimSuccess,
}: ClaimRestaurantDialogProps) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"email" | "verify">("email");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendVerification = async () => {
    if (!ownerEmail) {
      toast.error("Please enter your restaurant email");
      return;
    }

    setIsLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await supabase.functions.invoke("send-verification-email", {
        body: {
          restaurantName,
          restaurantSlug,
          restaurantCity,
          restaurantCountry,
          ownerEmail,
        },
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      toast.success("Verification email sent! Check your inbox.");
      setStep("verify");
    } catch (error: any) {
      console.error("Error sending verification:", error);
      toast.error(error.message || "Failed to send verification email");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!verificationCode) {
      toast.error("Please enter the verification code");
      return;
    }

    setIsLoading(true);
    try {
      const response = await supabase.functions.invoke("verify-restaurant-claim", {
        body: {
          restaurantSlug,
          restaurantCity,
          restaurantCountry,
          verificationCode,
        },
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      toast.success("Restaurant ownership verified! You can now upload photos.");
      setOpen(false);
      onClaimSuccess();
    } catch (error: any) {
      console.error("Error verifying:", error);
      toast.error(error.message || "Invalid verification code");
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <Button variant="outline" onClick={() => toast.info("Please sign in to claim this restaurant")}>
        <Shield className="w-4 h-4 mr-2" />
        Claim This Restaurant
      </Button>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Shield className="w-4 h-4 mr-2" />
          Claim This Restaurant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Claim {restaurantName}</DialogTitle>
          <DialogDescription>
            Verify your ownership to manage photos and respond to reviews.
          </DialogDescription>
        </DialogHeader>

        {step === "email" ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ownerEmail">Restaurant Email</Label>
              <div className="flex gap-2">
                <Mail className="w-5 h-5 text-muted-foreground mt-2" />
                <Input
                  id="ownerEmail"
                  type="email"
                  placeholder="contact@yourrestaurant.com"
                  value={ownerEmail}
                  onChange={(e) => setOwnerEmail(e.target.value)}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                We'll send a verification code to this email address.
              </p>
            </div>
            <Button onClick={handleSendVerification} disabled={isLoading} className="w-full">
              {isLoading ? "Sending..." : "Send Verification Code"}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="verificationCode">Verification Code</Label>
              <Input
                id="verificationCode"
                type="text"
                placeholder="Enter 6-digit code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
              />
              <p className="text-sm text-muted-foreground">
                Enter the code sent to {ownerEmail}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep("email")} className="flex-1">
                Back
              </Button>
              <Button onClick={handleVerify} disabled={isLoading} className="flex-1">
                <CheckCircle className="w-4 h-4 mr-2" />
                {isLoading ? "Verifying..." : "Verify"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
