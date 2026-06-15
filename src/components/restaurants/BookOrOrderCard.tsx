import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Phone, Info, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookOrOrderCardProps {
  phone: string;
  takeawayNote?: string;
  savedCount?: number;
}

type Tab = "dine-in" | "takeaway" | "delivery";

export const BookOrOrderCard = ({ phone, takeawayNote, savedCount = 847 }: BookOrOrderCardProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("dine-in");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const { toast } = useToast();

  const tabs: { id: Tab; label: string }[] = [
    { id: "dine-in", label: "Dine in" },
    { id: "takeaway", label: "Takeaway" },
    { id: "delivery", label: "Delivery" },
  ];

  const handleCheck = () => {
    toast({
      title: "Checking availability",
      description: `${date || "Select a date"} · ${time || "select a time"} · ${guests} guests`,
    });
  };

  return (
    <Card className="border shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Book or order</h3>

        {/* Tabs */}
        <div className="flex gap-1 bg-muted rounded-lg p-1 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 text-sm font-medium py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-background text-green-700 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Fields */}
        <div className="space-y-3 mb-4">
          <div className="relative">
            <Calendar className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-muted/60 rounded-lg py-3 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30"
              aria-label="Select a date"
            />
          </div>
          <div className="relative">
            <Clock className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-muted/60 rounded-lg py-3 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30"
              aria-label="Select a time"
            />
          </div>
          <div className="relative">
            <Users className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-muted/60 rounded-lg py-3 pl-10 pr-3 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-green-600/30"
              aria-label="Number of guests"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
              ))}
            </select>
          </div>
        </div>

        <Button
          onClick={handleCheck}
          className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-6"
        >
          Check availability
        </Button>

        <div className="my-4 border-t" />

        <Button
          variant="outline"
          onClick={() => window.open(`tel:${phone}`, "_self")}
          className="w-full border-green-700 text-green-700 hover:bg-green-50 font-semibold py-6"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call to order takeaway
        </Button>

        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p className="flex items-start gap-2">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            {takeawayNote || "Takeaway ready in 20–30 min. GF packaging used."}
          </p>
          <p className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-500 flex-shrink-0" />
            {savedCount} people saved this restaurant
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
