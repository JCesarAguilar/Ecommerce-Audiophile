import { IProduct } from "./IProduct";

export interface IOrder {
  id: number;
  products: IProduct[];
  date: string;
  status: string;
}
