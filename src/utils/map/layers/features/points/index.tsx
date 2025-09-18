export const getPointsLayer = (id: string, source: string) => {
  return ({
    id,
    source,
    type: "circle",
    paint: {
      'circle-radius': 3,
      'circle-color': ['get', 'circle-color']
    }
  })
}