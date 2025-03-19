import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo} alt="logo" className="w-28 h-auto" />
          <p className='mt-6 text-center md:text-left text-lg text-white/80'>Du học Hàn Quốc IES</p>
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>-Chuyên đào tạo và tư vấn du học Hàn Quốc</p>
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>-Chi phí minh bạch</p>
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>-Tỷ lệ Visa 99%</p>
          {/* <ul className='mt-6 text-center md:text-left text-sm text-white/80'>
            <li>Chuyên đào tạo và tư vấn du học Hàn Quốc</li>
            <li>Chi phí minh bạch</li>
            <li>Tỷ lệ Visa 99%</li>
          </ul> */}

        </div>
        <div className='flex flex-col md:items-start items-centnner w-full'>
           <h2 className='font-semibold text-white mb-5'></h2>
           <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-10'>
           <li><a href="#">Trang Chủ</a></li>
           <li><a href="#">Giới Thiệu</a></li>
           <li><a href="#">Liên Hệ</a></li>
           <li><a href="#">Chính Sách Bảo Mật</a></li>
           </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full'> 
          <h2 className='font-semibold text-white mb-5'>
          Đăng ký để nhận các thông tin mới nhất của chúng tôi
          </h2>
          <p className='text-sm text-white/80'>Tin tức, bài viết và tài nguyên mới nhất sẽ được gửi đến hộp thư đến của bạn hàng tuần</p>
          <div className='flex items-center gap-2 pt-4'>
            <input type="email" placeholder='Nhập email của bạn' 
            className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'/>
            <button className='bg-blue-600 w-24 h-9 text-white rounded'>Đăng ký</button>
          </div>
        </div>
      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025 © IES. All Right Reserved.</p>
    </footer>
  )
}

export default Footer
