import express from "express";

import {

  createOrder,

  getUserOrders,

} from "../controllers/orderController.js";


const router =
  express.Router();


// CREATE ORDER
router.post(
  "/",

  createOrder
);


// GET ORDERS
router.get(
  "/:userId",

  getUserOrders
);

export default router;