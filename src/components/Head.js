import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { USER_IMAGE, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions,setShowSuggestions] = useState(false);
  const [Suggestions,setSuggestions] = useState([]);
  const inputElement = useRef();
  const showMe = useRef(false);
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
        <form className="mx-auto" onSubmit={(e)=>{
          e.preventDefault();
          if(searchQuery === '') return false;
          }}>
        <input  name="search"
        placeholder="Search"
        ref={inputElement}
        onBlur={()=> {!showMe.current && setShowSuggestions(false)}}
        onFocus={()=>setShowSuggestions(true)}
        value = {searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
          className="md:inline-block z-11 w-2/3 border border-gray-500 p-2 px-4 rounded-l-full md:rounded-r-none rounded-r-full"
          type="text"
        />
        <Link to={"/search/"+searchQuery} onClick={(e)=> searchQuery === '' ? e.preventDefault() : setSearchQuery('')}>
        <button className="hidden md:inline-block border w-1/3 sm:w-fit border-gray-500 p-2 rounded-r-full">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
</svg>
        </button></Link>
        </form>
        { showSuggestions && Suggestions.length > 0 &&
        <div className="z-10 mx-auto inset-y-24 inset-x-96 absolute min-h-min py-2 px-2 text-start shadow-lg rounded-lg border border-gray-100 bg-white w-[30rem]">
          <ul>
            {Suggestions.map((s,i)=><Link key={s} onMouseOver={()=>showMe.current = true} to={"/search/"+s} onClick={()=>setSearchQuery('')}><li className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {s}</li></Link>)}
          </ul>
        </div> 
}
      </div>
      <div className="col-span-4">
        <img
          className="h-8 w-12 sm:h-12 rounded-full cursor-pointer"
          alt="user-icon"
          src={USER_IMAGE}
        />
      </div>
    </div>
  );
};

export default Head;
