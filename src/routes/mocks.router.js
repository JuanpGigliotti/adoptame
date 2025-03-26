import { getMockingUsers } from "../controllers/mocks.controller.js";

import { Router } from "express";
const router = Router();

router.get("/mockingusers", getMockingUsers);

export default router;
