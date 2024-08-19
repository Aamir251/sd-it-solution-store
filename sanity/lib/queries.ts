import { client } from "./client";
import { groq } from "next-sanity";
import {
  CategoryList,
  OrderDoc,
  OrderItem,
  ProductAndCategorySlug,
} from "./types";
import { ProductSingle } from "@/global";

export const generateGetProductsByCategoryQuery = (
  category: string,
  maxCount?: number
) => {
  const limit = maxCount ? `[0...${maxCount}]` : "";
  return groq`*[_type=='category' && slug.current=='${category.trim()}']{ 'products':*[_type=='product' && references(^._id)]{_id, name, slug,price,Thumbnail,category, quantity},slug}`;
};

export async function getProductsByCategory(
  category: string,
  maxCount?: number
): Promise<ProductAndCategorySlug> {
  const productByCategoryQuery = generateGetProductsByCategoryQuery(
    category,
    maxCount
  );
  return await client.fetch(productByCategoryQuery).then((item) => {
    return item[0];
  });
}

export type HomepageProducts = {
  windowsData: ProductAndCategorySlug[];
  officeData: ProductAndCategorySlug[];
};

export async function getHomepageProducts(): Promise<HomepageProducts> {
  const query = groq`{
            'windowsData' : *[_type == 'category' && slug.current == 'windows'] { 'products' : *[_type == "product" && references(^._id)] {_id, name, slug, price, Thumbnail, category, quantity }, slug}[0...4],
            'officeData' : *[_type == 'category' && slug.current == 'office-for-windows'] { 'products' : *[_type == "product" && references(^._id) ] {_id, name, slug, price, Thumbnail, category, quantity }, slug}[0...4]
          }`;

  return await client.fetch(query);
}

export const getCategoriesList = async (): Promise<CategoryList[]> => {
  const allCategoriesQuery = groq`*[_type == "category"]{_id, slug, name}`;
  return await client.fetch(allCategoriesQuery);
};

export const getSingleProduct = async (
  productSlug: string
): Promise<ProductSingle> => {
  const query = groq`*[_type=="product" && slug.current=="${productSlug}"] {name, slug, _id, Image, price, description,quantity}`;

  return await client.fetch(query).then((data) => data[0]);
};

export const createOrderItem = async (item: OrderDoc) => {
  return await client.create(item, {
    token: process.env.NEXT_PUBLIC_CREATE_ORDER_TOKEN,
  });
};

export const getDiscountValueForCustomer = async (
  email: string
): Promise<{
  discountEligibility: number;
}> => {
  const query = groq`*[_type=="customers" && email=="${email}"]{discountEligibility}`;
  return await client.fetch(query).then((data) => data[0]);
};

export const changeProductQuantity = async (
  productId: string,
  newQuantity: number
) => {
  return client.patch(productId).dec({ quantity: newQuantity }).commit({
    token: process.env.NEXT_PUBLIC_CREATE_ORDER_TOKEN,
  });
};

export const changePaymentStatusOfOrder = async (
  orderId: string,
  paymentStatus: "SUCCESS" | "PENDING"
) => {
  const query = groq`*[_type == "orders" && orderId=="${orderId}"]`;

  const document = await client.fetch(query).then((data) => data[0]);

  if (!document) return;

  return client.patch(document._id).set({ isPaid: paymentStatus }).commit({
    token: process.env.NEXT_PUBLIC_CREATE_ORDER_TOKEN,
  });
};
