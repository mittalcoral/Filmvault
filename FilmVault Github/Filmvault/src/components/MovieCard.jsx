import React from 'react';


function MovieCard({ movieObj, poster_path, name, handleAddToWatchList, handleRemoveFromWatchlist, watchList }) {

  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }


  return (
    <>
      <div className='h-[55vh] w-[250px] bg-centre bg-cover rounded-xl hover:scale-105 duration-150 hover:cursor-pointer flex  flex-col justify-between items-end'
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

    
          {doesContain(movieObj) ? (
          <div onClick={() => handleRemoveFromWatchlist(movieObj)}
            className='text-xl flex place-content-center place-self-end h-8 w-8 rounded-xl bg-black m-3'>
            &#10060;
          </div>
        ) : (
          <div onClick={() => handleAddToWatchList(movieObj)}
            className='text-xl flex place-content-center place-self-end h-8 w-8 rounded-xl bg-black m-3'>
            &#11088;
          </div>
        )}
       


        <div className='text-white text-xl w-full p-3 text-center bg-gray-900/60'>
          {name}
        </div>

      </div>
    </>
  )
}



export default MovieCard;