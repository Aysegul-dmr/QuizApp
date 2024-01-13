import { Router } from "express";
import { dropQuestions, dropResult, getQuestions, getResult, insertQuestions, storeResult } from "../controllers/controller.js";
const router=Router();

router.route("/questions")
        .get(getQuestions)
        .post(insertQuestions)
        .delete(dropQuestions)

router.route("/result")
        .get(getResult)
        .post(storeResult)
        .delete(dropResult)
export default router