import React from 'react'

function Pagination({handlePrev , handleNext , pageNo}){
    return(
        <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
            <div onClick={handlePrev} className='mr-5'><i class="fa-solid fa-backward"></i></div>
            <div className='font-bold mr-5'>{pageNo}</div>
            <div onClick={handleNext}><i class="fa-solid fa-forward"></i></div>
        </div>
    )
}

export default Pagination