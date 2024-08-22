import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";

import { MdMenu, MdOutlineDarkMode, MdLightMode, MdLight, MdDarkMode } from "react-icons/md";

import '../styles/global.css'
import '../styles/index.css'



function Header() {

  const [navOpen, setNavOpen] = useState(false)

  const [isDark, setIsDark] = useState(false)

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useOutsideTrigger(menuRef, buttonRef);


  const navList = 
    <>

      <Link to="/pagesindex" className="Link2 hover:underline">Pages Index</Link>    


    </>



  useEffect(() => {

    document.body.classList.add('gradient1')


    if (!localStorage.getItem("theme")) {

      
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

        localStorage.setItem("theme", "dark")
        document.body.classList.add('dark')
  
        setIsDark(true)
          

      } else {

        localStorage.setItem("theme", "dark")
        document.body.classList.add('dark')
  
        setIsDark(true)

      }


    } else if (localStorage.getItem("theme") == "light") {

      
      
      document.body.classList.add('light');

      setIsDark(false)



    } else if (localStorage.getItem("theme") == "dark") {

      
      
      document.body.classList.add('dark');

      setIsDark(true)

    }


  }, [])


  function handleToggleTheme() {


    if (localStorage.getItem("theme") == "light") {


      localStorage.setItem("theme", "dark")

      
      document.body.classList.add('dark');
      document.body.classList.remove('light');

      setIsDark(true)
      

    } else if (localStorage.getItem("theme") == "dark") {

      localStorage.setItem("theme", "light")

      document.body.classList.add('light');
      document.body.classList.remove('dark');

      setIsDark(false)

    } 


  }

  function useOutsideTrigger (ref1: any, ref2: any) {

    useEffect(() => {

      function handleClickOutside(event: any) {

        if (ref1.current && !ref1.current.contains(event.target) && !ref2.current.contains(event.target)) {
          
          setNavOpen(false)

        }}
  
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };

      
    }, [ref1, ref2]);

  }
  






  return (
    
    <header className="NavBar flex justify-between fixed w-full">
      <Link to='/' className='Link1 ml-[5vw] pt-3 pb-4'>Project Title</Link>

      <div className="flex flex-row">



      



        <div className="FullNav">

          <ul className="flex mt-7 mr-3">
            {navList}
          </ul>

        </div>
          {
          
            /*
            ===
            ===
          
            BELOW IS THE DARK MODE / LIGHT MODE TOGGLER, THIS CAN BE REMOVED OR KEPT AS NEEDED
          
            ===
            ===
            */
          
            <div className="w-fit h-fit rounded-lg px-2 py-1 mt-6 flex flex-row">
              <p className="mr-4">Selected Theme:</p>
              <select className="rounded-md" id="theme-select">
                <option value="minimal1">Minimal 1</option>
                <option value="gradient1">Gradient 1</option>
          
              </select>
            </div>
            }
        
        <div className="ToggleNav">

          <button ref={buttonRef} onClick={() => {setNavOpen(navOpen => !navOpen)}}>
            <MdMenu className="ml-4 mr-8 mt-4 text-black dark:text-white" size={30} />
          </button>

          {navOpen ?

<div ref={menuRef} className="border-1 border-slate-300 border-2 pt-4 ml-[-53px] pb-7 pl-2 pr-8  absolute rounded-md bg-white dark:bg-slate-700">
              <ul className="flex flex-col text-start ml-3">
                {navList}
              </ul>
            </div>

          : null }

        </div>
        {

        /*
        ===
        ===

        BELOW IS THE DARK MODE / LIGHT MODE TOGGLER, THIS CAN BE REMOVED OR KEPT AS NEEDED
        
        ===
        ===
        */

        

        <div className="ThemeToggler">

          { isDark ? (<button onClick={handleToggleTheme}><MdOutlineDarkMode size={28} className="text-black dark:text-white"/></button>)
            : (<button onClick={handleToggleTheme}><MdLightMode size={28} className="text-black dark:text-white"/></button>) }

        </div>
        
        }


      </div>

    </header>

  )

}

export default Header
