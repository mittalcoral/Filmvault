import React from 'react';
import coral from '../assets/coral.jpg'
import divyansh1 from '../assets/divyansh1.jpg'
import himanshu from '../assets/himanshu.jpg'
const Home = () => {
  return (
    <div className="bg-cover bg-center min-h-screen p-8" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/4b/e1/ce/4be1ce78b473349ac71eb4a8db50c8cf.jpg)' }}>
      {/* Navbar */}
      <div className="text-center text-4xl font-bold text-black mb-8">
        TEAM MEMBERS
      </div>
      {/* Team Members Section */}
      <div className="flex justify-between px-12 mb-12">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/5 ml-20">
          <div className="relative">
            <img
              src={divyansh1}
              alt="Team Member 1"
              className="w-full h-80 object-cover"
            />
            <div className="absolute text-xl text-bold font-serif bottom-0 left-0 w-full bg-gray-900/60 bg-opacity-80 text-white text-center py-3.5">
              Divyansh Sharma
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/5">
          <div className="relative">
            <img
              src={coral}
              alt="Team Member 2"
              className="w-full h-80 object-cover"
            />
            <div className="absolute text-xl font-serif text-bold bottom-0 left-0 w-full bg-gray-900/60 bg-opacity-80 text-white text-center py-3.5">
              Coral Mittal
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/5 mr-20">
          <div className="relative">
            <img
              src={himanshu}
              alt="Team Member 3"
              className="w-full h-80 object-cover"
            />
            <div className="absolute font-serif text-xl text-bold bottom-0 left-0 w-full bg-gray-900/60 bg-opacity-80 text-white text-center py-3.5">
              Himanshu Soni
            </div>
          </div>
        </div>
      </div>
      {/* About Our Project Section */}
      <div className="text-center text-3xl font-bold text-black mb-4">
        About Our Project
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto">
        <p className="text-gray-700 text-center font-bold">Welcome to FilmVault</p>
        <p className="text-gray-700 text-center font-bold">
        Your hub for discovering and managing your favorite movies. FilmVault offers real-time movie data, including ratings, trailers, and cast details, all powered by the TMDB API. Users can create accounts to save favorites, rate films, and build personalized watchlists. With a responsive design and intuitive interface, FilmVault is built to enhance your movie exploration experience.
        </p>
        <p className="text-gray-700 text-center font-bold">Sign up and dive into the world of cinema with us!</p>
      </div>
    </div>
  );
};

export default Home;

//bears -https://i.pinimg.com/564x/cc/79/08/cc790818995b5d4e9640e26fdf6485a9.jpg

