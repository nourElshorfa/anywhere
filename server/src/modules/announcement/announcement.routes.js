import { Router } from "express";
import { addAnnouncement, deleteAnouncemnet, getAnnouncementByid, getAnnouncements, updateAnnouncement } from "./announcemnet.controller.js";





const announcementRouter = Router()




announcementRouter.route("/")
.get(getAnnouncements)
.post(addAnnouncement)

announcementRouter.route("/:id")
.get(getAnnouncementByid)
.put(updateAnnouncement)
.delete(deleteAnouncemnet)




export default announcementRouter