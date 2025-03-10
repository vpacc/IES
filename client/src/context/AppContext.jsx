import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { Navigate, useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()
   
export const AppContextProvider = ( props ) => {
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allCourses, setAllCourse] = useState([])

    // Fetch All Course 
    const fetchAllCourse = async () => {
        setAllCourse(dummyCourses)
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

    useEffect(()=>{
        fetchAllCourse() 
    },[])

    const value = {
        currency, allCourses, navigate, calculateRating    
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}