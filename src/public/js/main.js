var map = L.map("mapid").setView([19.7352, -101.227], 13);
const tileURL1 = "https://b.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png";
const tileURL2 = "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png";

const socket = io();

L.tileLayer(tileURL2).addTo(map);
map.locate({ enableHighAccuracy: true });
map.on("locationfound", (e) => {
  console.log(e.latlng);
  const coords = [e.latlng.lat, e.latlng.lng];
  const newMarker = L.marker(coords);
  newMarker.bindPopup("You are here! " + e.latlng.lat + " " + e.latlng.lng);
  map.addLayer(newMarker);
  socket.emit("userCoordenates", e.latlng);
});

socket.on("newUserCoordenates", (coords) => {
  const marker = L.marker([coords.lat + 4, coords.lng + 4]);
  marker.bindPopup("hW");
  map.addLayer(marker);
});
