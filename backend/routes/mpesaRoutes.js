import express from "express";
import { lipaNaMpesaOnline } from "../middleware/mpesaMiddleware";

const router = express.Router();

router.route("/mpesa").post(lipaNaMpesaOnline);

export default router;