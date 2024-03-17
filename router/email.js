import express from "express";
import passport from "../middleware/email.js";
import { authGoogle } from "../controller/email.js";

const router = express.Router();

router.post("/auth/google", passport.authenticate('google-plus-token'), authGoogle);

export default router;