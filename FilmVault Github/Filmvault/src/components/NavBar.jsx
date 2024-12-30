import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='h-[7vh] flex border space-x-20 text-2xl font-bold text-black p-2'> 
      {/* Wrap the icon in a Link to navigate to the Movies route */}
      <Link to='/Movies' className='flex items-center'>
        <FontAwesomeIcon icon={faClapperboard} size='xl' />
      </Link>
      <Link to='/Home'>Home</Link>
      <Link to='/Movies'>Movies</Link>
      <Link to='/Watchlist'>Watchlist</Link>
      <div className='flex place-content-end w-full text-lg text-white'>
        <Link to='/LoginPage' className='flex justify-center text-center border rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 w-[8rem] mx-5 h-[2rem]'>Login</Link>
        <Link to='/RegisterPage' className='flex justify-center text-center border rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 w-[8rem] mx-5 h-[2rem]'>Register</Link>
      </div>
    </div>
  );
}

export default NavBar;

