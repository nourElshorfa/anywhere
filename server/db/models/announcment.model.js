import { model, Schema } from "mongoose";



const schema = new Schema({
    author : String,
    title: String,
    content: String,
    date: { type: Date, default: Date.now } 
} , { timestamps: true, versionKey: false } )


export const Announcement = model('Announcement', schema);