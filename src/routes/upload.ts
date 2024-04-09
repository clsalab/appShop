import { Router } from "express";
import { checkJwt } from "../middleware/sesion";
import { getFile } from "../controllers/upload";


const router = Router();

router.post("/", checkJwt, getFile )

export { router };