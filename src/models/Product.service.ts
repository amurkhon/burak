import { ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { Product } from "../libs/types/product";


class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }

    public async createNewProduct(input: ProductInput): Promise<Product> {
        const product = this.productModel.findOne(
            {}
        );
    };

};

export default ProductService;