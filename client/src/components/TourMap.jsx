import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_ACCESS_TOKEN } from '../config';

export default function TourMap({ locations }) {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/carterdboyle/cm9lk0d0s007a01rzfeva1ai3',
      scrollZoom: false,
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach((loc) => {
      const el = document.createElement('div');
      el.className = 'marker';

      new mapboxgl.Marker({
        element: el,
        anchor: 'bottom',
      })
        .setLngLat(loc.coordinates)
        .addTo(mapRef.current);

      new mapboxgl.Popup({
        offset: 30,
      })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Dat ${loc.day}: ${loc.description}</p>`)
        .addTo(mapRef.current);

      bounds.extend(loc.coordinates);
    });

    mapRef.current.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100,
      },
    });

    return () => {
      mapRef.current.remove();
    };
  }, [locations]);

  return (
    <>
      <div id="map" ref={mapContainerRef} />
    </>
  );
}
