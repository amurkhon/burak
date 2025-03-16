import {Request, Response} from 'express';
import {T} from '../libs/types/common';
import MemberSerivice from '../models/Member.service';

const restaurantController: T  = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.send('Home Page!');
    } catch (err) {
        console.log("Error, goHome: ", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getlogin');
        res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin: ", err);
    }
};

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log('processLogin');
        res.send("DONE!");
    } catch (err) {
        console.log("Error, processLogin: ", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup');
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, getSignup: ", err);
    }
};

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log('processSignup');
        res.send("processSignup DONE!");
    } catch (err) {
        console.log("Error, processSignup: ", err);
    }
};

export default restaurantController;