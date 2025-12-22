"use client";

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export function MapSection() {
    const position = { lat: 28.4140, lng: -81.4651 };
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        return (
            <section id="map-section" className="h-[400px] bg-muted flex items-center justify-center text-center p-4">
                <div>
                    <h3 className="font-headline text-xl font-bold">Map Unavailable</h3>
                    <p className="text-muted-foreground">Please provide a Google Maps API key in your .env.local file to display the map.</p>
                </div>
            </section>
        )
    }

    return (
        <section id="map-section" aria-label="map-container" className="h-[400px] md:h-[500px]">
            <APIProvider apiKey={apiKey}>
                <Map
                    center={position}
                    zoom={14}
                    mapId="eventbiz_map"
                    disableDefaultUI={true}
                    gestureHandling={'greedy'}
                    className='h-full w-full'
                >
                    <Marker position={position} />
                </Map>
            </APIProvider>
        </section>
    );
}
