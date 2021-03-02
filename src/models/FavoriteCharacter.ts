export interface IResponseCharacterFavorite {
  characterId: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  detailUrl: string;
  userId: string;
  id: string;
}

export class CardCharacterFavorite {
  id: string;

  type: 'Comic' | 'Character';

  imgUrl: string;

  isFavorite: boolean;

  description: string | null;

  title: string;

  linkDetail: string;

  constructor(type: 'Comic' | 'Character', data: IResponseCharacterFavorite) {
    this.id = data.characterId;
    this.type = type;
    this.imgUrl = data.thumbnailUrl;
    this.isFavorite = true;
    this.title = data.name;
    this.description = data.description;
    this.linkDetail = data.detailUrl;
  }
}
