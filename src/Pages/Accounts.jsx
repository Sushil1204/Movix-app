import React from 'react'
import movixbg from '../assets/movixbg.jpg'
import SavedMovies from '../components/SavedMovies'


const Accounts = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src={movixbg} alt="background" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
          </div>
        </div>
        <SavedMovies/>
      </div>
    </>
  )
}

export default Accounts