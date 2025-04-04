import { ProductCollelction, ProductSize, ProductStatus, ProductVolume } from "../enum/product.enum";

export interface Product {
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