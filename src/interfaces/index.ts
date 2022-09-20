export type RootParams = {
  Home: undefined;
  Inventory: undefined;
  Videos: undefined;
};

export interface ICar {
  _id: string;
  title: string;
  brand: string;
  price: string;
  age: number;
  __v: number;
}
