import express from "express";
const router = express.Router();

import { addOrderItems, getOrderById } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);

// when using : make sure the route is at the bottom
router.route("/:id").get(protect, getOrderById);

export default router;
