export interface ISearchProps {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
}

export interface ICardProps {
  id: number;
  title: string;
  price: number;
  brand: string;
  thumbnail: string;
}

export interface ICardListProps {
  card: ICard[];
  cardCount: number;
}

export interface ICard {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand: string;
  category?: string;
  thumbnail: string;
  images?: string[];
}
