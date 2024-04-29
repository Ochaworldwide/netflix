import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group" >
        <MdChevronLeft onClick={slideLeft} size={40} className=" bg-white rounded-full cursor-pointer absolute opacity-50 hover:opacity-100  z-10 hidden group-hover:block" />
        <div id={"slider" + rowID} className="relative w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth">
          {movies.map((items, id) => (
            <Movie items={items} key={id} />
          ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className=" bg-white rounded-full cursor-pointer right-0 absolute opacity-50 hover:opacity-100 z-10 hidden group-hover:block" />
      </div>
    </>
  );
};

export default Row;
