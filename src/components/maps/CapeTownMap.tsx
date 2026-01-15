import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, AlertCircle } from 'lucide-react';

interface Restaurant {
  name: string;
  lat: number;
  lng: number;
  celiacSafe: string;
  menuType: string;
  rating: number;
  address: string;
}

interface CapeTownMapProps {
  restaurants: Restaurant[];
}

const CapeTownMap = ({ restaurants }: CapeTownMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [mapboxToken, setMapboxToken] = useState<string>(() => {
    return localStorage.getItem('mapbox_token') || '';
  });
  const [isTokenSet, setIsTokenSet] = useState<boolean>(() => {
    return !!localStorage.getItem('mapbox_token');
  });
  const [error, setError] = useState<string>('');

  const saveToken = () => {
    if (mapboxToken.trim()) {
      localStorage.setItem('mapbox_token', mapboxToken.trim());
      setIsTokenSet(true);
      setError('');
    }
  };

  const clearToken = () => {
    localStorage.removeItem('mapbox_token');
    setMapboxToken('');
    setIsTokenSet(false);
    if (map.current) {
      map.current.remove();
      map.current = null;
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !isTokenSet || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [18.4241, -33.9249], // Cape Town center
        zoom: 11,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      map.current.on('error', (e) => {
        const errorObj = e.error as { status?: number } | undefined;
        if (errorObj?.status === 401) {
          setError('Invalid Mapbox token. Please check and try again.');
          setIsTokenSet(false);
          localStorage.removeItem('mapbox_token');
        }
      });

    } catch (err) {
      setError('Failed to initialize map. Please check your Mapbox token.');
      setIsTokenSet(false);
    }

    return () => {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [isTokenSet, mapboxToken]);

  // Update markers when restaurants change
  useEffect(() => {
    if (!map.current || !isTokenSet) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers
    restaurants.forEach((restaurant) => {
      const markerColor = restaurant.celiacSafe === 'dedicated-facility' ? '#10b981' : '#3b82f6';
      
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div style="padding: 8px;">
          <strong style="font-size: 14px;">${restaurant.name}</strong>
          <p style="font-size: 12px; margin: 4px 0; color: #666;">${restaurant.address}</p>
          <div style="display: flex; align-items: center; gap: 4px; font-size: 12px;">
            <span style="color: #fbbf24;">★</span>
            <span>${restaurant.rating}</span>
            <span style="color: ${restaurant.celiacSafe === 'dedicated-facility' ? '#10b981' : '#3b82f6'}; font-weight: 500; margin-left: 8px;">
              ${restaurant.celiacSafe === 'dedicated-facility' ? '100% GF' : 'GF Options'}
            </span>
          </div>
        </div>
      `);

      const marker = new mapboxgl.Marker({ color: markerColor })
        .setLngLat([restaurant.lng, restaurant.lat])
        .setPopup(popup)
        .addTo(map.current!);

      markersRef.current.push(marker);
    });
  }, [restaurants, isTokenSet]);

  if (!isTokenSet) {
    return (
      <Card className="border-dashed border-2">
        <CardContent className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Enable Interactive Map</h3>
              <p className="text-sm text-gray-600 mb-4">
                To display restaurant locations on the map, please enter your Mapbox public token. 
                You can get a free token from{' '}
                <a 
                  href="https://mapbox.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline"
                >
                  mapbox.com
                </a>{' '}
                (find it in the Tokens section after creating an account).
              </p>
              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm mb-4">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="pk.eyJ1Ij..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={saveToken} className="bg-orange-600 hover:bg-orange-700">
                  Enable Map
                </Button>
              </div>
            </div>
          </div>
          
          {/* Static fallback showing restaurant count */}
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">
              {restaurants.length} restaurants in Cape Town
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-0 overflow-hidden">
        <div className="relative">
          <div ref={mapContainer} className="h-[400px] w-full rounded-lg" />
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearToken}
            className="absolute top-2 left-2 bg-white text-xs"
          >
            Reset Token
          </Button>
        </div>
        <div className="p-4 border-t bg-gray-50">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span>100% Gluten-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>GF Options</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CapeTownMap;
