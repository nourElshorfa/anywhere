import { Quiz } from "../../../db/models/quiz.model.js"
import { catchError } from "../../middleware/catchError.js"
import { AppError } from "../../utils/appError.js"





export const addQuiz = catchError(async (req, res, next) => {
    if (!req.body.title || !req.body.questions) {
      return next(new AppError("Missing required fields", 400));
    }
  
    const quiz = new Quiz(req.body);
    await quiz.save();
  
    res.status(201).json({
      success: true,
      message: "Quiz added successfully",
      data: quiz,
    })
  })


export const getQuizes = catchError(async(req , res , next)=> {

    let quizes = await Quiz.find()
  
    
        
        res.json({
            success: true,
            results: quizes.length,
            data: quizes
        })

})

export const getQuizById = catchError(async(req , res , next)=> {

    let quiz = await Quiz.findById(req.params.id)
    if(!quiz) return next(new AppError("quiz not found" , 404))
    
        
        res.json({
            success: true,
            data: quiz
        })

})

export const deleteQuiz = catchError(async(req , res , next)=> {

    let deletedQuiz = await Quiz.findByIdAndDelete(req.params.id)
     if(!deletedQuiz) return next(new AppError("quiz not found" , 404))

        res.json({
            success: true,
            message: "Quiz deleted successfully",
            data: deletedQuiz
        })

})


export const updateQuiz = catchError(async(req , res , next)=> {

    let updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id , req.body , { new : true })
     if(!updatedQuiz) return next(new AppError("quiz not found" , 404))

        res.json({
            success: true,
            message: "Quiz updated successfully",
            data: updatedQuiz
        })

})