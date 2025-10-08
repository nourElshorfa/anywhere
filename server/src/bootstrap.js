import announcementRouter from "./modules/announcement/announcement.routes.js"
import quizRouter from "./modules/quiz/quiz.routes.js"







export const bootstrap = (app)=> {

    app.use("/api/quiz" , quizRouter)
    app.use("/api/announcement" , announcementRouter)

}