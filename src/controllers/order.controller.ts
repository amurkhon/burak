import { ExtendedRequest } from "../libs/types/member";
import { T } from "../libs/types/common";
import Errors, { HttpCode } from "../libs/Errors";
import { Response } from "express";
import OrderService from "../models/Order.service";
import { OrderInquiry, OrderItemInput, OrderUpdateInput } from "../libs/types/order";
import { OrderStatus } from "../libs/enum/order.enum";
import { shapeIntoMongooseObjectId } from "../libs/config";

const orderController: T = {};

const orderService = new OrderService();

orderController.createOrder = async (
    req: ExtendedRequest,
    res: Response
) => {
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

orderController.getMyOrders = async (
    req: ExtendedRequest,
    res: Response
) => {
    try{
        console.log("createOrder");
        const { page, limit, orderStatus } = req.query;
        const inquiry: OrderInquiry = {
            page: Number(page),
            limit: Number(limit),
            orderStatus: orderStatus as OrderStatus,
        };
        const orders = await orderService.getMyOrders(req.member, inquiry);
        

        res.status(HttpCode.OK).json(orders);
    } catch (err) {
        console.log("Error, createOrder: ", err);
        if (err instanceof Errors) return res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

orderController.updateOrder = async (
    req: ExtendedRequest,
    res: Response
) => {
    try{
        console.log("updateOrder");
        const input: OrderUpdateInput = req.body;
        
        const result = await orderService.updateOrder(req.member, input);
        

        res.status(HttpCode.OK).json(result);
    } catch (err) {
        console.log("Error, updateOrder: ", err);
        if (err instanceof Errors) return res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};


export default orderController;