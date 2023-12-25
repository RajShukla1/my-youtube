import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { USER_IMAGE, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions,setShowSuggestions] = useState(false);
  const [Suggestions,setSuggestions] = useState(['iphone','Animal','World Affairs']);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async ()=>{
    const data = (await fetch(YOUTUBE_SEARCH_API + searchQuery)).catch((e)=>searchQuery);
    const json = await data.json().catch((e)=>searchQuery);
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1], 
    }))
  }
  useEffect(()=>{
     const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){ 
        setSuggestions(searchCache[searchQuery]);
      }else{
          getSearchSuggestions().catch((e)=>console.log(e));
      }
},2000)
    
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
        <div>
        <input
        onBlur={()=>setShowSuggestions(false)}
        onFocus={()=>setShowSuggestions(true)}
        value = {searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
          className="w-2/3 border border-gray-500 p-2 rounded-l-full"
          type="text"
        />
        <button className="border w-1/3 sm:w-fit border-gray-500 p-2 rounded-r-full">
          🔍
        </button>
        </div>
        { showSuggestions &&
        <div className="py-2 px-2 shadow-lg rounded-lg border border-gray-100 bg-white w-[37rem]">
          <ul>
            {Suggestions.map(s=><li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>)}
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">Iphone</li>
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
