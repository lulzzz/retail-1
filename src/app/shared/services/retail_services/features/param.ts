export enum OrderType {
  Ascending = 0,
  Descending
}

export interface Param {

}

export interface Page extends Param {
  index: number;
  count: number;
}

export interface Order extends Param {
  key: string;
  type: OrderType;
}

export interface Query extends Param {
  key: string;
  value: string;
}