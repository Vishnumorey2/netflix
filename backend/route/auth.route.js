import express from "express";
import { login ,signin,signup,logout} from "../Controller/auth.controller.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

router.post("/login", login);
router.post("/logout", logout);

export default router;