import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Plus, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const restaurantSchema = z.object({
  restaurant_name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  address: z.string().trim().min(5, "Address must be at least 5 characters").max(200, "Address must be less than 200 characters"),
  city: z.string().trim().min(2, "City is required"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional().or(z.literal("")),
  website: z.string().trim().max(200, "Website must be less than 200 characters").optional().or(z.literal("")),
  hours: z.string().trim().max(100, "Hours must be less than 100 characters").optional().or(z.literal("")),
  specialty: z.string().trim().max(50, "Specialty must be less than 50 characters").optional().or(z.literal("")),
  overview: z.string().trim().max(500, "Overview must be less than 500 characters").optional().or(z.literal("")),
  cuisine_types: z.string().trim().max(200, "Cuisine types must be less than 200 characters").optional().or(z.literal("")),
  venue_type: z.enum(["restaurant", "cafe", "bakery"]),
  celiac_safe: z.enum(["dedicated-facility", "protocols-in-place"]),
  menu_type: z.enum(["fully-gluten-free", "mixed-menu"]),
  pro_tip: z.string().trim().max(200, "Pro tip must be less than 200 characters").optional().or(z.literal("")),
});

type RestaurantFormValues = z.infer<typeof restaurantSchema>;

interface AddRestaurantDialogProps {
  city: string;
  triggerClassName?: string;
}

export const AddRestaurantDialog = ({ city, triggerClassName }: AddRestaurantDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { user } = useAuth();

  const form = useForm<RestaurantFormValues>({
    resolver: zodResolver(restaurantSchema),
    defaultValues: {
      restaurant_name: "",
      address: "",
      city: city,
      phone: "",
      website: "",
      hours: "",
      specialty: "",
      overview: "",
      cuisine_types: "",
      venue_type: "restaurant",
      celiac_safe: "protocols-in-place",
      menu_type: "mixed-menu",
      pro_tip: "",
    },
  });

  const onSubmit = async (values: RestaurantFormValues) => {
    if (!user) {
      toast.error("Please sign in to submit a restaurant");
      return;
    }

    setIsSubmitting(true);
    try {
      const cuisineArray = values.cuisine_types 
        ? values.cuisine_types.split(",").map(c => c.trim()).filter(c => c.length > 0)
        : [];

      const { error } = await supabase.from("restaurant_submissions").insert({
        user_id: user.id,
        restaurant_name: values.restaurant_name,
        address: values.address,
        city: values.city.toLowerCase(),
        country: "south-africa",
        phone: values.phone || null,
        website: values.website || null,
        hours: values.hours || null,
        specialty: values.specialty || null,
        overview: values.overview || null,
        cuisine_types: cuisineArray.length > 0 ? cuisineArray : null,
        venue_type: values.venue_type,
        celiac_safe: values.celiac_safe,
        menu_type: values.menu_type,
        pro_tip: values.pro_tip || null,
      });

      if (error) throw error;

      setIsSuccess(true);
      toast.success("Restaurant submitted for review!");
      form.reset();
      
      setTimeout(() => {
        setOpen(false);
        setIsSuccess(false);
      }, 2000);
    } catch (error: any) {
      console.error("Error submitting restaurant:", error);
      toast.error(error.message || "Failed to submit restaurant");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setIsSuccess(false);
      form.reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className={triggerClassName}>
          <Plus className="w-5 h-5 mr-2" />
          Add a Restaurant
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add a Gluten-Free Restaurant</DialogTitle>
          <DialogDescription>
            Help the community by sharing a gluten-free friendly restaurant. Your submission will be reviewed before being published.
          </DialogDescription>
        </DialogHeader>

        {!user ? (
          <div className="py-8 text-center">
            <p className="text-gray-600 mb-4">Please sign in to submit a restaurant.</p>
            <Button asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
          </div>
        ) : isSuccess ? (
          <div className="py-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">Your restaurant submission has been received and will be reviewed shortly.</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="restaurant_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Restaurant Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Green Kitchen Café" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Pretoria" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 123 Main St, Brooklyn, Pretoria, 0181" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+27 12 345 6789" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input placeholder="www.example.co.za" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="hours"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Opening Hours</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Mon-Sat: 8AM-9PM" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="specialty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specialty</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Italian Cuisine" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="venue_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Venue Type *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="cafe">Café</SelectItem>
                          <SelectItem value="bakery">Bakery</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="celiac_safe"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Celiac Safety *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select safety level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="dedicated-facility">Dedicated GF Facility</SelectItem>
                          <SelectItem value="protocols-in-place">Careful Handling</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="menu_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Menu Type *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select menu type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem>
                          <SelectItem value="mixed-menu">GF Options Available</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="cuisine_types"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cuisine Types (comma-separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Italian, Mediterranean, Café" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="overview"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Overview</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe the restaurant and its gluten-free offerings..."
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pro_tip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pro Tip for GF Diners</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Ask for the dedicated GF menu!" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Submit Restaurant
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};
