import express from "express";
import {
  createHotel,
  deteleHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";

const router = express.Router();

// CREATE
router.post("/", createHotel);
// UPDATE
router.put("/:id", updateHotel);
// DELETE
router.delete("/:id", deteleHotel);
// GET
router.get("/:id", getHotel);
// GET ALL
router.get("/", getHotels);

export default router;
