import { Announcement } from "../../../db/models/announcment.model.js";
import { catchError } from "../../middleware/catchError.js"
import { AppError } from "../../utils/appError.js"

export const addAnnouncement = catchError(async (req, res, next) => {

  
    const announcement = new Announcement(req.body);
    await announcement.save();
  
    res.status(201).json({
      success: true,
      message: "announcement added successfully",
      data: announcement,
    })
  })


export const getAnnouncements = catchError(async(req , res , next)=> {

    let announcements = await Announcement.find()
  
        res.json({
            success: true,
            results: announcements.length,
            data: announcements
        })

})

export const getAnnouncementByid = catchError(async(req , res , next)=> {

    let announcement = await Announcement.findById(req.params.id)
    if(!announcement) return next(new AppError("anouncemnet not found" , 404))
    
        
        res.json({
            success: true,
            data: announcement
        })

})

export const deleteAnouncemnet = catchError(async(req , res , next)=> {

    let deletedAnnouncement = await Announcement.findByIdAndDelete(req.params.id)
     if(!deletedAnnouncement) return next(new AppError("anouncemnet not found" , 404))

        res.json({
            success: true,
            message: "anouncemnet deleted successfully",
            data: deletedAnnouncement
        })

})


export const updateAnnouncement = catchError(async(req , res , next)=> {

    let updatedAnnouncement = await Announcement.findByIdAndUpdate(req.params.id , req.body , { new : true })
     if(!updatedAnnouncement) return next(new AppError("Announcement not found" , 404))

        res.json({
            success: true,
            message: "Announcement updated successfully",
            data: updatedAnnouncement
        })

})