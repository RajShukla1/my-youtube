import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { USER_IMAGE, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions,setShowSuggestions] = useState(false);
  const [Suggestions,setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async ()=>{
    const data = (await fetch(YOUTUBE_SEARCH_API + searchQuery));
    const json = await data.json()
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1], 
    }))
  }
  useEffect(()=>{
     const timer = setTimeout(()=>{
        getSearchSuggestions()
      },600)
    
    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])
  return (
    <div className="flex justify-between p-5 m-2 shadow-lg">
      <div className="flex col-span-2">
        <img
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
        />
        <img
          className="h-12 m-2 h-6 w-20"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="flex w-full sm:w-1/2 flex-col col-span-6 text-center px-10">
        <form onSubmit={(e)=>{
          e.preventDefault();
          if(searchQuery === '') return false;
          }}>
        <input  name="search"
        placeholder="Search"
        onBlur={()=>setShowSuggestions(false)}
        onFocus={()=>setShowSuggestions(true)}
        value = {searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
          className="z-11 w-2/3 border border-gray-500 p-2 px-4 rounded-l-full"
          type="text"
        />
        <Link to={"/search/"+searchQuery} onClick={(e)=> searchQuery === '' ? e.preventDefault() : setSearchQuery('')}>
        <button className="border w-1/3 sm:w-fit border-gray-500 p-2 rounded-r-full">
          🔍
        </button></Link>
        </form>
        { showSuggestions && Suggestions.length > 0 &&
        <div className="z-10 inset-y-24 inset-x-96 absolute min-h-min py-2 px-2 text-start shadow-lg rounded-lg border border-gray-100 bg-white w-[30rem]">
          <ul>
            {Suggestions.map((s,i)=><li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {s}</li>)}
          </ul>
        </div> 
}
      </div>
      <div className="col-span-4">
        <img
          className="h-12 rounded-full cursor-pointer"
          alt="user-icon"
          src={USER_IMAGE}
        />
      </div>
    </div>
  );
};

export default Head;
