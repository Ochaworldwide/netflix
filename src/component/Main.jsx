import React, { useState, useEffect } from "react";
import requests from "../Rquest";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response)=>{
      setMovies(response.data.results)
    })
  }, []);
  console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num){
      return  `${str.substring(0, num)}...`
    }
    else{
      return str;
    }

  }

 

  return (
    <div className="w-full    h-[280px] sm:h-fit text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-r from-black/10"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className=" absolute w-full top-[10%] sm:top-[25%] p-4 md:p-8   ">
          <h1 className=" text-xl sm:text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="flex text-md sm:text-base gap-4 my-4">
            <button className="border  bg-gray-300 text-black border-gray-300 px-5">
              Play
            </button>
            <button className="border  bg-gray-300 text-black border-gray-300 px-5">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full text-sm sm:text-base md:max-w-[70%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
