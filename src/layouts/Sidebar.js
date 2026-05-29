import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ to, icon, label, isOpen, active }) => (
  <Link to={to} className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-colors ${active ? 'bg-surface-hover font-semibold text-primary-600 dark:text-primary-400' : 'hover:bg-surface-hover text-foreground'}`}>
    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
      {icon}
    </div>
    <span className={`whitespace-nowrap transition-all duration-200 ${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden'}`}>
      {label}
    </span>
  </Link>
);

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
    const location = useLocation();

    const icons = {
      home: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      shorts: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      videos: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
      live: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    };

  return (
    <div className={`hidden sm:flex flex-col border-r border-border bg-background transition-all duration-300 h-[calc(100vh-73px)] sticky top-[73px] overflow-y-auto ${isMenuOpen ? 'w-64 p-4' : 'w-20 p-2 items-center'}`}>
        <div className="space-y-1 w-full flex-1">
            <SidebarItem to="/" icon={icons.home} label="Home" isOpen={isMenuOpen} active={location.pathname === '/'} />
            <SidebarItem to="/search/shorts" icon={icons.shorts} label="Shorts" isOpen={isMenuOpen} active={location.pathname === '/search/shorts'} />
            <SidebarItem to="/search/video" icon={icons.videos} label="Videos" isOpen={isMenuOpen} active={location.pathname === '/search/video'} />
            <SidebarItem to="/search/live" icon={icons.live} label="Live" isOpen={isMenuOpen} active={location.pathname === '/search/live'} />
        
            {isMenuOpen && (
              <>
                <div className="w-full h-px bg-border my-4"></div>
                <h1 className='text-xs font-bold uppercase text-gray-500 tracking-wider mb-2 px-3'>Subscriptions</h1>
                <div className="space-y-1 w-full">
                   <SidebarItem to="/search/&videoCategoryId=10" icon={icons.videos} label="Music" isOpen={isMenuOpen} />
                   <SidebarItem to="/search/sports" icon={icons.videos} label="Sports" isOpen={isMenuOpen} />
                   <SidebarItem to="/search/gaming" icon={icons.videos} label="Gaming" isOpen={isMenuOpen} />
                   <SidebarItem to="/search/movies" icon={icons.videos} label="Movies" isOpen={isMenuOpen} />
                </div>
              </>
            )}
        </div>

        {/* Developer Profile Card */}
        {isMenuOpen && (
            <div className="mt-auto pt-4 w-full">
                <div className="w-full h-px bg-border mb-4"></div>
                <div className="flex flex-col items-center bg-surface border border-border p-3 rounded-xl shadow-sm text-center group transition-colors hover:bg-surface-hover">
                    <img src="https://avatars.githubusercontent.com/RajShukla1" alt="Raj Shukla" className="w-12 h-12 rounded-full mb-2 object-cover border-2 border-primary-500 shadow-sm transition-transform duration-300 group-hover:scale-105" />
                    <h3 className="font-semibold text-foreground text-sm">Raj Shukla</h3>
                    <p className="text-xs text-gray-500 mb-2">Frontend Developer</p>
                    <div className="flex gap-3">
                        <a href="https://github.com/RajShukla1" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-foreground transition-colors" title="GitHub">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/rajshukla18/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors" title="LinkedIn">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Sidebar