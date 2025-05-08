import { ExtendedRequest } from "../libs/types/member";
import { T } from "../libs/types/common";
import Errors, { HttpCode } from "../libs/Errors";
import { Response } from "express";
import OrderService from "../models/Order.service";
import { OrderItemInput } from "../libs/types/order";

const orderController: T = {};

const orderService = new OrderService();

orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
    try{
        console.log("createOrder");
        const result = await orderService.createOrder(req.member, req.body);

        res.status(HttpCode.OK).json(result);
    } catch (err) {
        console.log("Error, createOrder: ", err);
        if (err instanceof Errors) return res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};


export default orderController;