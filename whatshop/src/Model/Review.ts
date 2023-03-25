export default interface Review {
    _id?: string;
  brewery_id?: string;
  fullName: string;
  rating: number;
  beerSelection: string;
  atmosphere: string;
  comment: string;
}
