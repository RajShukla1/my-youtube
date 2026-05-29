import React from 'react';
import { USER_IMAGE } from 'utils/constants';

const Profile = () => {
  return (
    <div className="w-full min-h-[calc(100vh-73px)] bg-background flex justify-center items-start p-6 sm:p-12">
        <div className="w-full max-w-4xl bg-surface border border-border rounded-3xl shadow-sm overflow-hidden mt-8">
            {/* Cover Photo */}
            <div className="h-48 sm:h-64 bg-gradient-to-r from-primary-600 to-primary-400 w-full relative">
                {/* Profile Picture overlapping */}
                <div className="absolute -bottom-16 left-8 sm:left-12">
                    <img 
                        src={USER_IMAGE} 
                        alt="Raj Shukla" 
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-surface object-cover shadow-lg bg-white"
                        onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=Raj+Shukla&background=random&size=200` }}
                    />
                </div>
            </div>

            <div className="pt-20 pb-8 px-8 sm:px-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Raj Shukla</h1>
                        <p className="text-lg text-gray-500 mt-1">Frontend Developer & Open Source Contributor</p>
                    </div>
                    <div className="flex gap-3">
                        <a href="mailto:rajshukla140@gmail.com" className="px-6 py-2.5 bg-foreground text-background font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-sm">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="md:col-span-2 space-y-6">
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">About Me</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Hi, I'm Raj! I'm a passionate Frontend Developer specializing in building modern, high-performance web applications. This YouTube clone is one of my projects demonstrating my expertise in React, Redux, Tailwind CSS, and API integration. I love creating polished, scalable UI architectures and exploring the latest in web technologies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {['React.js', 'JavaScript (ES6+)', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'RESTful APIs'].map(skill => (
                                    <span key={skill} className="px-4 py-1.5 bg-surface-hover text-foreground text-sm font-medium rounded-lg border border-border">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Social/Links Section */}
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">Connect</h2>
                            <div className="space-y-3">
                                <a href="https://github.com/RajShukla1" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-border hover:bg-surface-hover transition-colors group">
                                    <svg className="w-6 h-6 text-gray-500 group-hover:text-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">GitHub</p>
                                        <p className="text-xs text-gray-500">@RajShukla1</p>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/rajshukla18/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-border hover:bg-surface-hover transition-colors group">
                                    <svg className="w-6 h-6 text-gray-500 group-hover:text-[#0A66C2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">LinkedIn</p>
                                        <p className="text-xs text-gray-500">Raj Shukla</p>
                                    </div>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile;
