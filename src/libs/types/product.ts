import { ObjectId } from 'mongoose';
import { ProductCollelction, ProductSize, ProductStatus, ProductVolume } from "../enum/product.enum";

export interface Product {
    _id: ObjectId,
    productStatus: ProductStatus,
    productCollection: ProductCollelction,
    productName: String,
    productPrice: Number,
    productLeftCount: Number,
    productSize: ProductSize,
    productVolume: Number,
    productDesc?: String,
    productImages: String[],
    productViews: Number,
    createAt: Date,
    updateAt: Date
}

export interface ProductInquiry {
    order: string;
    page: number;
    limit: number;
    productCollection?: ProductCollelction;
    search?: string;
}

export interface ProductInput {
    productStatus?: ProductStatus,
    productCollection: ProductCollelction,
    productName: String,
    productPrice: Number,
    productLeftCount: Number,
    productSize?: ProductSize,
    productVolume?: Number,
    productDesc?: String,
    productImages?: String[],
    productViews?: Number
}

export interface ProductChosenInput {
    productStatus?: ProductStatus,
    productCollection?: ProductCollelction,
    productName?: String,
    productPrice?: Number,
    productLeftCount?: Number,
    productSize?: ProductSize,
    productVolume?: Number,
    productDesc?: String,
    productImages?: String[],
    productViews?: Number
}