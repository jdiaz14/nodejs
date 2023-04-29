import { Router } from "express";
import {
  createusuario,
  deleteusuario,
  renderusuario,
} from "../controllers/customerController.js";
const router = Router();

router.get("/", renderusuario);
router.post("/add", createusuario);
router.get("/delete/:id", deleteusuario);

export default router;