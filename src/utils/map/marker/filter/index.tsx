// Types imports
import { MapRef } from 'utils/types/map';

const getLayerIdsBySourceLayer = (currentMap: MapRef, source: string) => 
  currentMap.getStyle()
  .layers
  .filter((layer: any) => layer['source-layer'] === source)
  .map((layer: any) => layer.id);

export const getRenderedFeaturesBySourceLayer = (currentMap: MapRef, source: string) => {
  const layers = getLayerIdsBySourceLayer(currentMap, source);
  if (layers.length === 0) return [];
  const features = currentMap.queryRenderedFeatures({ layers });
  return features;
};

export const findLayerBySourceLayer = (map: MapRef, sourceLayer: string) => {
  const layer = map
    .getStyle()
    .layers
    .find((l: any) => l['source-layer'] === sourceLayer);
  
  return !layer ? null : layer;
};