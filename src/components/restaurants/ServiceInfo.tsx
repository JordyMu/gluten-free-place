import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Utensils,
  ShoppingBag,
  Bike,
  Check,
  X,
  Star,
  Accessibility,
  Copy,
  Mail,
  Share2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ServiceState {
  available: boolean;
  note: string;
}

interface Services {
  dineIn?: ServiceState;
  takeaway?: ServiceState;
  delivery?: ServiceState;
  accessible?: boolean;
  gfPackaging?: boolean;
}

/** Three availability cards: Dine in / Takeaway / Delivery */
export const ServiceAvailability = ({ services }: { services: Services }) => {
  const items = [
    { key: "dine-in", label: "Dine in", icon: Utensils, state: services.dineIn },
    { key: "takeaway", label: "Takeaway", icon: ShoppingBag, state: services.takeaway },
    { key: "delivery", label: "Delivery", icon: Bike, state: services.delivery },
  ].filter((i) => i.state);

  return (
    <div className="grid sm:grid-cols-3 gap-4 mb-8">
      {items.map(({ key, label, icon: Icon, state }) => {
        const available = state!.available;
        return (
          <div
            key={key}
            className={`rounded-2xl border p-5 ${
              available
                ? "bg-green-50 border-green-200"
                : "bg-muted/40 border-border"
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <Icon className={`w-5 h-5 ${available ? "text-green-700" : "text-muted-foreground"}`} />
              <h3 className={`font-bold text-lg ${available ? "text-foreground" : "text-muted-foreground"}`}>
                {label}
              </h3>
            </div>
            <p className={`flex items-center gap-1.5 font-semibold mb-2 ${available ? "text-green-700" : "text-muted-foreground"}`}>
              {available ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
              {available ? "Available" : "Not available"}
            </p>
            <p className={`text-sm leading-relaxed ${available ? "text-green-800/80" : "text-muted-foreground"}`}>
              {state!.note}
            </p>
          </div>
        );
      })}
    </div>
  );
};

/** Services at a glance summary card for the sidebar */
export const ServicesGlance = ({
  services,
  rating,
  reviewCount,
}: {
  services: Services;
  rating: number;
  reviewCount: number;
}) => {
  const rows = [
    { label: "Dine in", icon: Utensils, yes: services.dineIn?.available },
    { label: "Takeaway", icon: ShoppingBag, yes: services.takeaway?.available },
    { label: "Delivery", icon: Bike, yes: services.delivery?.available },
    { label: "Accessible", icon: Accessibility, yes: services.accessible },
    { label: "GF packaging", icon: ShoppingBag, yes: services.gfPackaging },
  ];

  return (
    <Card className="border shadow-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-2 mb-5 text-center">
          <div className="rounded-lg bg-muted/50 py-3">
            <p className="text-xl font-bold">{rating}</p>
            <p className="text-xs text-muted-foreground">Rating</p>
          </div>
          <div className="rounded-lg bg-muted/50 py-3">
            <p className="text-xl font-bold">{reviewCount}</p>
            <p className="text-xs text-muted-foreground">Reviews</p>
          </div>
          <div className="rounded-lg bg-muted/50 py-3">
            <p className="text-xl font-bold flex items-center justify-center gap-0.5">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </p>
            <p className="text-xs text-muted-foreground">Top rated</p>
          </div>
        </div>

        <h3 className="font-bold mb-3">Services at a glance</h3>
        <ul className="space-y-2.5">
          {rows.map((row) => (
            <li key={row.label} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-foreground">
                <row.icon className="w-4 h-4 text-muted-foreground" />
                {row.label}
              </span>
              <span
                className={`flex items-center gap-1 font-semibold ${
                  row.yes ? "text-green-700" : "text-red-500"
                }`}
              >
                {row.yes ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                {row.yes ? "Yes" : "No"}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

/** Share this listing card for the sidebar */
export const ShareListing = ({ name }: { name: string }) => {
  const { toast } = useToast();
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied", description: "The listing link is on your clipboard." });
    } catch {
      toast({ title: "Couldn't copy", description: url });
    }
  };

  const email = () => {
    window.open(
      `mailto:?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(url)}`,
      "_self"
    );
  };

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: name, url });
      } catch {
        /* cancelled */
      }
    } else {
      copy();
    }
  };

  return (
    <Card className="border shadow-sm">
      <CardContent className="p-6">
        <h3 className="font-bold mb-3">Share this listing</h3>
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm" onClick={copy}>
            <Copy className="w-4 h-4 mr-1.5" />
            Copy
          </Button>
          <Button variant="outline" size="sm" onClick={email}>
            <Mail className="w-4 h-4 mr-1.5" />
            Email
          </Button>
          <Button variant="outline" size="sm" onClick={share}>
            <Share2 className="w-4 h-4 mr-1.5" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
