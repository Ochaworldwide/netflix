import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({ items, id }) => {
  const [like, setLike] = useState(false);
  const { user} = UserAuth();
  const [saved , setSaved] = useState(false);

  const movieTag = doc(db, 'users', `${user?.email}`)

  const saveShow = async() => {
    if(user?.email){
      setLike(!like);
      setSaved(true);

      await updateDoc(movieTag,{
        savedShows: arrayUnion({
          id: items.id,
          title: items.title,
          img: items.backdrop_path
        })
      })
    }else{
      alert("Please log in to save movies")
    }
  }

  return (

    <div
      key={id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
    >
      <img
        className="w-full h-auto block"
        src={` https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`}
        alt={items.title}
      />
      <div className="absolute top-0 left-0 w-full h-full text-white hover:bg-black/80 opacity-0  hover:opacity-100">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {items.title}
        </p>
        <p onClick={saveShow}>
          {like ? <FaHeart className="absolute top-4 left-4 text-gray-300" />  : <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          }
        </p>
      </div>
    </div>


  )
}

export default Movie
