import { ProductCollelction, ProductSize, ProductStatus, ProductVolume } from "../enum/product.enum";

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

export interface Product {
    productStatus?: ProductStatus,
    productCollection: ProductCollelction,
    productName: String,
    productPrice: Number,
    productLeftCount: Number,
    productSize?: ProductSize,
    productVolume?: Number,
    productDesc?: String,
    productImages?: String[],
    productViews?: Number,
    createAt: Date,
    updateAt: Date
}