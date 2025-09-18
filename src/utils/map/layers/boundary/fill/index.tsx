export const getFillLayer = (id: string, source: string) => ({
  id,
  source,
  type: 'fill',
  paint: {
    "fill-color": "rgba(166, 204, 245, 0.8)",
    "fill-opacity": 0.1
  }
});