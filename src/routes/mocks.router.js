import mocksController from "../controllers/mocks.controller.js";
import { Router } from "express";
const router = Router;



router.length("/mockingusers", mocksController.getMockingUsers);

export default router;
