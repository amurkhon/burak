import { ProductChosenInput, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { Product } from "../libs/types/product";
import Errors, { Message } from "../libs/Errors";
import { HttpCode } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";


class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }

    public async createNewProduct(input: ProductInput): Promise<Product> {
        try{
            return await this.productModel.create(input);
        } catch(err) {
            console.error("Error, model: createNewProduct:", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    };

    public async updateChosenProduct(id: string, input: ProductChosenInput): Promise<Product> {
        id = shapeIntoMongooseObjectId(id);

        const result = this.productModel.findOneAndUpdate({_id: id}, input, {new: true}).exec();

        if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

        return result;
    };

};

export default ProductService;