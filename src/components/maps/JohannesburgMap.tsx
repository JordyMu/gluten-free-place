import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Restaurant {
  name: string;
  lat: number;
  lng: number;
  specialty: string;
  rating: number;
  icon: string;
}

interface JohannesburgMapProps {
  restaurants: Restaurant[];
}

const JohannesburgMap = ({ restaurants }: JohannesburgMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map centered on Johannesburg
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHdoNXR4eXYwMGxyMnFxb29semV0NjFpIn0.3EYNnJXSLaVpLSCHwVjAHg';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [28.0473, -26.1076], // Johannesburg center
      zoom: 11
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      markersRef.current.forEach(marker => marker.remove());
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add markers for each restaurant
    restaurants.forEach((restaurant) => {
      const el = document.createElement('div');
      el.className = 'flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white text-lg shadow-lg cursor-pointer hover:scale-110 transition-transform';
      el.innerHTML = restaurant.icon;

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-2">
          <h3 class="font-bold text-sm">${restaurant.name}</h3>
          <p class="text-xs text-gray-600">${restaurant.specialty}</p>
          <p class="text-xs mt-1">⭐ ${restaurant.rating}</p>
        </div>
      `);

      const marker = new mapboxgl.Marker(el)
        .setLngLat([restaurant.lng, restaurant.lat])
        .setPopup(popup)
        .addTo(map.current!);

      markersRef.current.push(marker);
    });

    // Fit bounds to show all markers
    if (restaurants.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      restaurants.forEach(r => bounds.extend([r.lng, r.lat]));
      map.current.fitBounds(bounds, { padding: 50 });
    }
  }, [restaurants]);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg border">
      <div ref={mapContainer} className="h-[400px] w-full" />
    </div>
  );
};

export default JohannesburgMap;
