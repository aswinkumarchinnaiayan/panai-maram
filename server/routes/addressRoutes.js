import express from "express";

import {
  saveAddress,
} from "../controllers/addressController.js";


const router =
  express.Router();


// SAVE ADDRESS
router.post(
  "/",

  saveAddress
);

export default router;