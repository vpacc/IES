import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { Navigate, useNavigate } from "react-router-dom";
import {humanizeDuration} from 'humanize-duration'
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()
   
export const AppContextProvider = ( props ) => {
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allCourses, setAllCourse] = useState([])
    const [isEducator, setIsEducator] = useState(true)

    // Fetch All Course 
    const fetchAllCourse = async () => {
        setAllCourse(dummyCourses)
    }
    
    // Thêm sau các hàm khác của anh trong AppContext.jsx
const fetchCourseData = (courseId) => {
    return allCourses.find(course => course._id === courseId) || null;
}

    // calculate average rating of course
const calculateRating = (course)=>{
     if(course.courseRatings.length === 0) {
        return 0;
     }
     let totalRating = 0
     course.courseRatings.forEach(rating => totalRating += rating.rating) 
     return totalRating / course.courseRatings.length
}

    // function tp calculate course chapter time
     const calculateChapterTime = (chapter) => {
        let time = 0
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, {units : ['h','m']} ) 
     }
   
    //  function tp calculate course duration
      const calculateCourseDuration = (course)=> {
        let time = 0 

        course.courseContent.map((chapter)=> chapter.chapterContent.map(
            (lecture)=> time += lecture.lectureDuration 
            
        ))
        return humanizeDuration(time * 60 * 1000, {units : ['h','m']} ) 
      }
   
     useEffect(()=>{
        fetchAllCourse() 
    },[])

    const value = {
        currency, allCourses, navigate, calculateRating   , isEducator , setIsEducator, fetchCourseData
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}