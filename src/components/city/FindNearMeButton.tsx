import { useState } from "react";
import { Navigation, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FindNearMeButtonProps {
  /** City name used to build the nearby search query */
  city: string;
  className?: string;
}

const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const FindNearMeButton = ({ city, className }: FindNearMeButtonProps) => {
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  const handleFindNearMe = () => {
    setLocationError("");

    if (!("geolocation" in navigator)) {
      openExternalLink(
        `https://www.google.com/maps/search/gluten+free+restaurants+in+${encodeURIComponent(city)}`
      );
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLocating(false);
        const { latitude, longitude } = position.coords;
        openExternalLink(
          `https://www.google.com/maps/search/gluten+free+restaurants/@${latitude},${longitude},14z`
        );
      },
      () => {
        setIsLocating(false);
        setLocationError("We couldn't access your location. Showing results for " + city + ".");
        openExternalLink(
          `https://www.google.com/maps/search/gluten+free+restaurants+in+${encodeURIComponent(city)}`
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  return (
    <div className="flex flex-col items-center">
      <Button
        size="lg"
        variant="outline"
        className={className ?? "border-white bg-transparent !text-white hover:bg-white/10"}
        onClick={handleFindNearMe}
        disabled={isLocating}
      >
        {isLocating ? (
          <>
            <Navigation className="w-5 h-5 mr-2 animate-pulse" />
            Locating...
          </>
        ) : (
          <>
            <Search className="w-5 h-5 mr-2" />
            Find Gluten-Free Food Near Me
          </>
        )}
      </Button>
      {locationError && <p className="text-white/80 mt-2 text-sm">{locationError}</p>}
    </div>
  );
};

export default FindNearMeButton;
