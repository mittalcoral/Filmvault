import React, {useState, useEffect} from 'react'
function Banner() {
  const slides = [
    {
      url: 'https://bloody-disgusting.com/wp-content/uploads/2013/02/2-the-conjuring-banner.jpg'
    },
    {
      url: 'https://coldfeet-space.nyc3.cdn.digitaloceanspaces.com/wsb/2017/09/it-banner-2.png'
    },
    {
      url: 'https://movizark.files.wordpress.com/2018/09/banner.jpg?w=676&h=171'
    },
    {
      url: 'https://codmwstore.com/wp-content/uploads/2024/10/Tracer-Pack-Smile-2-Bundle-Banner.webp'
    },
    {
      url: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00024545-djdejadylx-landscape.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => {
    const isFirstSlide = currentIndex ===0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex); 
  }
  
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex(newIndex); 
  } 

  useEffect(() => { // <-- Added useEffect for automatic slide change
    const interval = setInterval(() => {
        nextSlide();
    }, 4000); // Change the slide every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
}, [currentIndex]);

  return (

  <div className='h-[75vh] w-[1425px] rounded-3xl m-auto border bg-centre bg-cover bg-no-repeat group'>
    <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
  
  {/* for left arrow */}
  <div className='hidden group-hover:block absolute top-[45%] -translate-x-10 ml-20 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
  <i onClick={prevSlide} class="fa-solid fa-backward"></i>
  </div>

  {/* for right arrow */}
  <div className='hidden group-hover:block absolute top-[45%] -translate-x-10 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
  <i onClick={nextSlide} class="fa-solid fa-forward"></i>
  </div>
  </div>
    )
  }
  
  export default Banner


  // return (

  //   <div>
  //     <div className='h-[75vh] w-[1425px] rounded-3xl m-auto border bg-centre bg-cover bg-no-repeat flex items-end'
  //      style={{backgroundImage: `url(https://bloody-disgusting.com/wp-content/uploads/2013/02/2-the-conjuring-banner.jpg)`}}>
  //          <div className='h-[7vh] w-full rounded-b-3xl border font-bold  font-mono text-white text-xl p-3 text-center bg-slate-800/70'>
  //            Conjuring
  //          </div>
  //     </div>

  //     <div className='h-[75vh] w-[1425px] rounded-3xl m-auto border bg-centre bg-cover bg-no-repeat flex items-end'
  //      style={{backgroundImage: `url(https://coldfeet-space.nyc3.cdn.digitaloceanspaces.com/wsb/2017/09/it-banner-2.png)`}}>
  //          <div className='h-[7vh] w-full rounded-b-3xl border font-bold  font-mono text-white text-xl p-3 text-center bg-slate-800/70'>
  //            IT
  //          </div>
  //     </div>

  //     <div className='h-[75vh] w-[1425px] rounded-3xl m-auto border bg-centre bg-cover bg-no-repeat flex items-end'
  //      style={{backgroundImage: `url(https://movizark.files.wordpress.com/2018/09/banner.jpg?w=676&h=171)`}}>
  //          <div className='h-[7vh] w-full rounded-b-3xl border font-bold  font-mono text-white text-xl p-3 text-center bg-slate-800/70'>
  //            The Nun
  //          </div>
  //     </div>

  //     <div className='h-[75vh] w-[1425px] rounded-3xl m-auto border bg-centre bg-cover bg-no-repeat flex items-end'
  //      style={{backgroundImage: `url(https://assets-in.bmscdn.com/discovery-catalog/events/et00024545-djdejadylx-landscape.jpg)`}}>
  //          <div className='h-[7vh] w-full rounded-b-3xl border font-bold  font-mono text-white text-xl p-3 text-center bg-slate-800/70'>
  //            Annabella
  //          </div>
  //     </div>

  //     <div className='h-[75vh] w-[1425px] rounded-3xl m-auto border bg-centre bg-cover bg-no-repeat flex items-end'
  //      style={{backgroundImage: `url(https://codmwstore.com/wp-content/uploads/2024/10/Tracer-Pack-Smile-2-Bundle-Banner.webp)`}}>
  //          <div className='h-[7vh] w-full rounded-b-3xl border font-bold  font-mono text-white text-xl p-3 text-center bg-slate-800/70'>
  //            Smile 2
  //          </div>
  //     </div>
      
  //   </div>
  // )


//conjuring - https://bloody-disgusting.com/wp-content/uploads/2013/02/2-the-conjuring-banner.jpg
//it - https://coldfeet-space.nyc3.cdn.digitaloceanspaces.com/wsb/2017/09/it-banner-2.png
//the nun - https://movizark.files.wordpress.com/2018/09/banner.jpg?w=676&h=171
//smile 2 - https://codmwstore.com/wp-content/uploads/2024/10/Tracer-Pack-Smile-2-Bundle-Banner.webp
//annabel - https://assets-in.bmscdn.com/discovery-catalog/events/et00024545-djdejadylx-landscape.jpg
//Titanic - https://static1.squarespace.com/static/5ba3d1efa09a7e572c0e3bf0/t/5ba460dd542c0ec8ec286bc8/1465489907147/1000w/TitanicBanner.jpg
//harry potter - https://cdn.europosters.eu/image/hp/80594.jpg