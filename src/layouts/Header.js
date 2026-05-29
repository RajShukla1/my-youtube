import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "store/appSlice";
import { USER_IMAGE } from "utils/constants";
import { cacheResults } from "store/searchSlice";
import { Link } from "react-router-dom";
import useDebounce from "hooks/useDebounce";

const Header = () => {
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

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (!debouncedSearchQuery) {
        setSuggestions([]);
        return;
    }

    const getSearchSuggestions = () => {
      const callbackName = 'jsonp_callback_' + Math.round(1000000 * Math.random());
      
      const script = document.createElement('script');
      script.src = `https://suggestqueries.google.com/complete/search?client=youtube&q=${debouncedSearchQuery}&jsonp=${callbackName}`;
      
      window[callbackName] = (data) => {
        delete window[callbackName];
        document.body.removeChild(script);
        
        const result = data[1]?.map(item => item[0]) || [];
        setSuggestions(result);
        dispatch(cacheResults({
            [debouncedSearchQuery]: result, 
        }));
      };

      script.onerror = () => {
        delete window[callbackName];
        document.body.removeChild(script);
        console.error("Failed to fetch suggestions");
      };

      document.body.appendChild(script);
    };

    if (searchCache[debouncedSearchQuery]) {
        setSuggestions(searchCache[debouncedSearchQuery]);
    } else {
        getSearchSuggestions();
    }
  }, [debouncedSearchQuery, searchCache, dispatch]);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border flex justify-between items-center px-4 sm:px-6 py-3 shadow-sm transition-colors duration-200">
      {/* Left: Menu & Logo */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleMenuHandler} 
          className="p-2 hover:bg-surface-hover rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link to="/" className="flex items-center gap-1 cursor-pointer">
          <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M9.667,14.997V9.003L14.884,12L9.667,14.997z"/>
          </svg>
          <span className="text-xl font-bold tracking-tight text-foreground hidden sm:block">YouTube</span>
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-2xl px-4 relative hidden sm:block">
        <form 
          className="relative flex items-center w-full"
          onSubmit={(e) => {
            e.preventDefault();
            if(searchQuery === '') return false;
          }}
        >
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input  
              name="search"
              placeholder="Search (Ctrl+K)"
              ref={inputElement}
              onBlur={() => {!showMe.current && setShowSuggestions(false)}}
              onFocus={() => setShowSuggestions(true)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-border text-foreground text-sm rounded-full focus:ring-2 focus:ring-primary-500 focus:border-primary-500 block pl-10 p-2.5 transition-all outline-none"
              type="text"
            />
          </div>
          <Link to={"/search/"+searchQuery} onClick={(e) => searchQuery === '' ? e.preventDefault() : setSearchQuery('')}>
            <button className="absolute right-0 top-0 bottom-0 px-5 text-sm font-medium text-foreground bg-surface-hover border border-border rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 transition-colors">
              Search
            </button>
          </Link>
        </form>

        {/* Suggestions Dropdown */}
        {showSuggestions && Suggestions?.length > 0 && (
          <div className="absolute z-50 w-full mt-2 bg-background border border-border rounded-xl shadow-xl overflow-hidden">
            <ul className="py-2 text-sm text-foreground">
              {Suggestions.map((s, i) => (
                <Link key={s} onMouseOver={() => showMe.current = true} to={"/search/"+s} onClick={() => setSearchQuery('')}>
                  <li className="px-4 py-2 hover:bg-surface-hover flex items-center gap-3 cursor-pointer transition-colors">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {s}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right: User Profile & Actions */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-foreground hover:bg-surface-hover rounded-full transition-colors hidden sm:block">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <Link to="/profile" className="h-9 w-9 rounded-full overflow-hidden border border-border shadow-sm cursor-pointer hover:ring-2 hover:ring-primary-500 transition-all block">
          <img
            className="h-full w-full object-cover"
            alt="User Profile"
            src={USER_IMAGE}
            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=You&background=random` }}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
