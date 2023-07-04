import express from "express";
import { lipaNaMpesaOnline } from "../middleware/mpesaMiddleware.js";

const router = express.Router();

router.route("/mpesa").post(lipaNaMpesaOnline);

export default router;