/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2FydGVyZGJveWxlIiwiYSI6ImNtOWxpNjhibjA1NDUyanFlMDE3MnR2OXMifQ.qt3yRLYemxK8UsYfD0H7yw';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/carterdboyle/cm9lk0d0s007a01rzfeva1ai3', // style URL
  scrollZoom: false,
  // center: [-118.113491, 34.111745], // starting position [lng, lat]
  // zoom: 10, // starting zoom
  // interactive: false,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add the marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
