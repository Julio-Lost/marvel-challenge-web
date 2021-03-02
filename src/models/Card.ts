import { DataResult } from './ResponseApiMarvel';

export type typeCard = 'Comic' | 'Character';

export interface InfoCard {
  id: string;
  description?: string | null;
  imgUrl: string;
  title: string;
  linkDetail: string;
}
export class Card {
  id: string;

  type: typeCard;

  imgUrl: string;

  isFavorite: boolean;

  description: string | null;

  title: string;

  linkDetail: string;

  constructor(type: typeCard, data: DataResult) {
    this.id = data.id.toString();
    this.type = type;
    this.imgUrl = data.thumbnailUrl;
    this.isFavorite = data.isFavorited;
    this.title = data.name;
    this.description = data.description;
    this.linkDetail = data.detailUrl;
  }
}
