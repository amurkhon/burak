import {Request, Response} from 'express';
import { T } from "../libs/types/common";
import Errors, { HttpCode, Message } from '../libs/Errors';
import ProductService from '../models/Product.service';
import { AdminRequest } from '../libs/types/member';
import { ProductInput } from '../libs/types/product';

const productService = new ProductService();

const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log('getAllProducts');
        res.render('products');
    }
    catch(err) {
        console.log("Error, getAllProducts: ", err);
        if (err instanceof Errors) return res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

productController.createNewProduct = async (req: AdminRequest, res: Response) => {
    try {
        console.log('createNewProduct');

        if(!req.files?.length) throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

        const data: ProductInput = req.body;
        data.productImages = req.files?.map((ele) => {
            return ele.path.replace(/\\/g,"/");
        });

        console.log("data: ", data);

        await productService.createNewProduct(data);

        res.send(`<script> alert("Successful creation!"); window.location.replace('admin/product/all) </script>`);
    }
    catch(err) {
        console.log("Error, createNewProduct: ", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('admin/product/all) </script>`);
    }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log('updateChosenProduct');

        const id = req.params.id;

        const result = await productService.updateChosenProduct(id, req.body);
        
        res.send(`<script> alert("${result}"); window.location.replace('admin/product/all) </script>`);
    }
    catch(err) {
        console.log("Error, updateChosenProduct: ", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('admin/product/all) </script>`);
    }
};

export default productController;