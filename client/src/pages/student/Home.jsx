import React from 'react'
import Hero from '../../components/student/Hero'
import CoursesSection from '../../components/student/CoursesSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
         {/* <img src="/mnt/data/bg_IES.png" alt="Ảnh IES" className="w-full max-w-6xl aspect-video mt-4 rounded-xl shadow-md" /> */}
     <Hero />
     <CoursesSection />
     <CallToAction />
     <Footer />
    </div>
  )
}

export default Home
