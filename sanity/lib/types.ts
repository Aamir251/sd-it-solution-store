import { ProductBasic } from "@/global";
import { Id, Slug } from "sanity";

export type ProductAndCategorySlug = {
  products: ProductBasic[];
  slug: Slug;
};

export type CategoryList = {
  _id: Id;
  slug: Slug;
  name: string;
};

export type OrderItem = {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
};

export type OrderDoc = {
  _type: "orders";
  orderId: string;
  customerName: string;
  email: string;
  contact: number | string;
  items: OrderItem[];
  isPaid: "PENDING" | "SUCCESS";
};
