export interface ViewPortType {
  longitude: number;
  latitude: number;
  zoom: number;
  transitionDuration: number;
}

export interface ItemType {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text: string;
  place_name: string;
  bbox: number[];
  center: number[];
  geometry: Geometry;
  context: Context[];
}

interface Context {
  id: string;
  wikidata: string;
  short_code: string;
  text: string;
}

interface Geometry {
  type: string;
  coordinates: number[];
}

interface Properties {
  wikidata: string;
}
