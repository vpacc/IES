import { clerkClient } from '@clerk/express'
import Course from '../models/Course.js'
import {v2 as cloudinary } from 'cloudinary'

// Update role of educator
export const updateRoleEducator = async (req, res) => {
     try{
        const userId = req.auth.userId
        await clerkClient.users.updateUserMetadata(userId, {
          publicMetadata:{
            role: 'educator', 
          }
        } )
        res.json({ success: true, message: 'You can publish a course now'})

     } catch(error){
       res.json({ success: false, message: error.message})
 
    }
}

// add new course
export const addCourse = async (req, res) => {
   try { 
      const  {CourseData} = req.body;
      const imageFile = req.file
      const educatorId = req.auth.userId

      if(!imageFile){
         return res.json({ success: false, message: 'Thumbnail Not Attached'})
      } 

      const parsedCourseData = await JSON.parse(CourseData)
      parsedCourseData.educator = educatorId
      const newCourse = await Course.create(parsedCourseData)
      const imageUpload = await cloudinary.uploader.upload(imageFile.path)
      newCourse.courseThumbnail = imageUpload.secure_url
       await newCourse.save()
      res.json({ success: true, message: 'Course Added Successfully'})

   } catch (error) {
      res.json({ success: true, message: error.message })
   }
}
