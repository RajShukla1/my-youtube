import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
  }
  useEffect(()=>{
    const timer = setTimeout(()=>getSearchSuggestions(),2000);
    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
        />
        <img
          className="h-12 w-20"
          alt="logo"
          src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/youtube-512.png"
        />
      </div>
      <div className="col-span-10 text-center px-10">
        <div>
        <input
        value = {searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
          className="w-1/2 border border-gray-500 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-500 p-2 rounded-r-full">
          <img className = "w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="search"/>
        </button>
        </div>
        <div className="fixed bg-white w-[37rem]">
          <ul>
            <li>  Iphone</li>
            <li>Iphone pro</li>
            <li>Iphone 14</li>
            <li>Iphone pro max</li>
            <li>Iphone 14 pro max</li>
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  );
};

export default Head;
