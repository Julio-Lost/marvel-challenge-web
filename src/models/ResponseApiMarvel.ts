export interface DataResult {
  id: number;
  name: string;
  description: string | null;
  detailUrl: string;
  thumbnailUrl: string;
  isFavorited: boolean;
}

export interface ResponseApiMarvel {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: DataResult[];
}
