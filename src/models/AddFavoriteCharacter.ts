import { InfoCard } from './Card';

export interface IRequestAddCharacterFavorite {
  characterId: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  detailUrl: string;
  userId?: string;
}

export class RequestAddCharacterFavorite {
  characterId: string;

  name: string;

  description: string;

  thumbnailUrl: string;

  detailUrl: string;

  userId?: string | undefined;

  constructor(data: InfoCard) {
    this.characterId = data.id;
    this.name = data.title;
    this.description = data.description ? data.description : ' ';
    this.thumbnailUrl = data.imgUrl;
    this.detailUrl = data.linkDetail;
  }
}

export interface IResponseAddCharacterFavorite {
  characterId: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  detailUrl: string;
  userId: string;
  created_at: string;
  updated_at: string;
}
