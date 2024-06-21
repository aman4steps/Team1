import React from 'react'

const BlogTable = () => {
  return (
    <div className='m-2 '>
      <div className='flex justify-between gap-3 items-center bg-white rounded p-2'>
        <div className='rounded'>
          <img className=' w-20 overflow-hidden rounded ' src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar__1x.png" alt="" />
        </div>
        <div className='max-w-96'>
          <p className='text-md font-semibold'>Lorem ipsum dolor sit amet.</p>
          <div className='line-clamp-1'>
            <p className='text-light text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quam at nostrum!</p>
          </div>
        </div>
        <div className='flex justify-start  flex-col'>
          <span className='text-xs'>12 jan 2024 </span>
          <span className='text-xs'>1:10 pm</span>
        </div>
      </div>
    </div>
  )
}

export default BlogTable