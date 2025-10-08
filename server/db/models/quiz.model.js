import { model, Schema } from "mongoose";




const schema = new Schema(
    {
        title: String,
        description: String,
        questions: [
          {
            question: String,
            options: [String],
            correctAnswer: String
          }
        ],
        date: { type: Date, default: Date.now } 
      },
    { timestamps: true, versionKey: false } 
  );
  
 export const Quiz = model('Quiz', schema);
  
