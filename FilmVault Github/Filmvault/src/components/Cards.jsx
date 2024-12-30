import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Custom Left Arrow
const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
};

// Custom Right Arrow
const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
};

function Cards() {
    const images = [
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/3ovFaFeojLFIl5ClqhtgYMDS8sE.jpg', title: 'The Mouse Trap' },
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/pAgeWPP8aAuiEsKgIRLw75Ug8bP.jpg', title: 'Good One-' },
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/9u6HEtZJdZDjPGGJq6YEuhPnoan.jpg', title: 'Imaginary' },
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/c5Tqxeo1UpBvnAc3csUm7j3hlQl.jpg', title: 'Wicked' },
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/o5zHDxx9aGtg0bK9gVghik8ohYb.jpg', title: 'Classified' },
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/s2igE99PVBEMsry3qEGEH3rM83K.jpg', title: 'White Bird' },
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/ycoXsJomPmPjtCfNweM0UWiTkPY.jpg', title: 'The Devils Bath' },
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg', title: 'John Wick' },
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/786Uu8eHfctp2TkII7ga1AnTBSs.jpg', title: 'The Room Next Door' },
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/uEj9yJKZWvKdSgqiLOBbpe9vSXv.jpg', title: 'Goodrich' },
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/9AtxFlUOmeTtMMXYyz8azvN2few.jpg', title: 'Dogtooth' },
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/38lb62nJcNvVgCDkFt2wiVE0bX4.jpg', title: 'A Real Pain'},
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/2JSsduIaJzlScVunHCc6KYBIOjY.jpg', title: 'Til Death Do Us Part'},
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/79euHUJJtfgeGU63ef38KtNjXEn.jpg', title: 'Here'},
        { url: 'https://media.themoviedb.org/t/p/w220_and_h330_face/dalB6Vq2QdYpwVRJSZfIuWvAHs0.jpg', title: 'Small Things Like These'}
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,             // Enables auto-play
        autoplaySpeed: 3000,        // 4000ms = 4 seconds between slides
        pauseOnHover: true,
        nextArrow: <CustomNextArrow />,  // Use custom black arrow
        prevArrow: <CustomPrevArrow />   // Use custom black arrow
    };

    return (
        <div className='h-100 bg-white p-5'>
            <div className='text-2xl m-3 font-bold text-center'>
                Upcoming Movies
            </div>
            <div className='h-[55vh] w-30 m-auto'>
                <Slider {...settings}>
                    {images.map((item, index) => (
                        <div key={index} className='relative bg-white'>
                            <div className='relative'>
                                <img 
                                    src={item.url} 
                                    className='h-[55vh] w-full text-white text-xl text-center bg-centre bg-cover rounded-xl' 
                                    alt={item.title}
                                />
                                <div 
                                    className='absolute bottom-0 left-0 w-full p-3 bg-gray-900/60 text-xl text-center rounded-b-xl text-white font-semibold'
                                >
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Cards;









//the mouse trap - https://media.themoviedb.org/t/p/w220_and_h330_face/3ovFaFeojLFIl5ClqhtgYMDS8sE.jpg
//good one - https://media.themoviedb.org/t/p/w220_and_h330_face/pAgeWPP8aAuiEsKgIRLw75Ug8bP.jpg
//imaginary - https://media.themoviedb.org/t/p/w220_and_h330_face/9u6HEtZJdZDjPGGJq6YEuhPnoan.jpg
//wicked - https://media.themoviedb.org/t/p/w220_and_h330_face/c5Tqxeo1UpBvnAc3csUm7j3hlQl.jpg
//classified - https://media.themoviedb.org/t/p/w220_and_h330_face/o5zHDxx9aGtg0bK9gVghik8ohYb.jpg
// white bird - https://media.themoviedb.org/t/p/w220_and_h330_face/s2igE99PVBEMsry3qEGEH3rM83K.jpg
//the devil's bath - https://media.themoviedb.org/t/p/w220_and_h330_face/ycoXsJomPmPjtCfNweM0UWiTkPY.jpg
//john wick - https://media.themoviedb.org/t/p/w220_and_h330_face/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg
//the room next door - https://media.themoviedb.org/t/p/w220_and_h330_face/786Uu8eHfctp2TkII7ga1AnTBSs.jpg
//goodrich - https://media.themoviedb.org/t/p/w220_and_h330_face/uEj9yJKZWvKdSgqiLOBbpe9vSXv.jpg
//dogtooth - https://media.themoviedb.org/t/p/w220_and_h330_face/9AtxFlUOmeTtMMXYyz8azvN2few.jpg