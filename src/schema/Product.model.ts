import mongoose, {Schema} from 'mongoose';
import { ProductCollelction, ProductSize, ProductStatus, ProductVolume } from '../libs/enum/product.enum';

const productSchema = new Schema({
    productStatus: {
        type: String,
        enum: ProductStatus,
        default: ProductStatus.PAUSE,
    },

    productCollelction: {
        type: String,
        enum: ProductCollelction,
        required: true,
    },

    productName: {
        type: String,
        required: true,
    },

    productPrice: {
        type: Number,
        required: true,
    },

    productLeftCount: {
        type: Number,
        required: true,
    },

    productSize: {
        type: String,
        enum: ProductSize,
        default: ProductSize.NORMAL,
    },

    productVolume: {
        type: Number,
        enum: ProductVolume,
        default: ProductVolume.ONE,
    },

    productDesc: {
        type: String,
        required: true,
    },

    productImages: {
        type: [String],
        default: [],
    },

    productViews: {
        type: Number,
        default: 0,
    }

}, { timestamps: true } // updatedAt, createdUp
);

productSchema.index({productName: 1, productSize: 1, prosuctVolume: 1},{unique: true});
export default mongoose.model('Product', productSchema);