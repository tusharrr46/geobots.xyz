export const getLinesLayer = (id: string, source: string) => {
  return {
    id,
    source,
    type: 'line',
    paint: {
      'line-width': 4,
      'line-color': "rgba(166, 204, 245, 1)",
      'line-opacity': 0.8,
      'line-dasharray': [2, 2],
    }
  };
};