import { Router } from "express";
import { addQuiz, deleteQuiz, getQuizById, getQuizes, updateQuiz } from "./quiz.controller.js";




const quizRouter = Router()




quizRouter.route("/")
.get(getQuizes)
.post(addQuiz)

quizRouter.route("/:id")
.get(getQuizById)
.put(updateQuiz)
.delete(deleteQuiz)




export default quizRouter