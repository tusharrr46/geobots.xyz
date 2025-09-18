export const getLinesLayer = (id: any, source: any) => {
  return {
      id,
      type: "line",
      source,
      paint: {
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          8, 1,
          16, 3
        ],
        'line-color': ['get', 'line-color'],
      },
    };
};