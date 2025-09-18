export const getEraserLayer = (id: string, source: string) => {
  return {
    id,
    source,
    type: 'clip',
    layout: {'clip-layer-types': ['model']},
    minzoom: 14
  };
};