import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  product = [{
    "id": "1",
    "product_name": "product 1",
    "category_name": "category 1"
  },
  {
    "id": "2",
    "product_name": "product 2",
    "category_name": "category 1"
  },
  {
    "id": "3",
    "product_name": "product 3",
    "category_name": "category 1"
  },
  {
    "id": "4",
    "product_name": "product 4",
    "category_name": "category 1"
  },
  {
    "id": "5",
    "product_name": "product 5",
    "category_name": "category 1"
  },
  {
    "id": "6",
    "product_name": "product 6",
    "category_name": "category 2"
  },
  {
    "id": "7",
    "product_name": "product 7",
    "category_name": "category 2"
  },
  {
    "id": "8",
    "product_name": "product 8",
    "category_name": "category 2"
  },
  {
    "id": "9",
    "product_name": "product 9",
    "category_name": "category 2"
  },
  {
    "id": "10",
    "product_name": "product 10",
    "category_name": "category 2"
  },
  {
    "id": "11",
    "product_name": "product 11",
    "category_name": "category 3"
  },
  {
    "id": "12",
    "product_name": "product 12",
    "category_name": "category 3"
  },
  {
    "id": "13",
    "product_name": "product 13",
    "category_name": "category 3"
  },
  {
    "id": "14",
    "product_name": "product 14",
    "category_name": "category 3"
  }]

  GetProductDetails() {
      return this.product;
  }



}
