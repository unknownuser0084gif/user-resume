import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import { NavLink, useNavigate } from 'react-router-dom';
import { Theme } from '../../context/Them';
import { useContext, useState } from 'react';


export default function MobileSidebar({ approveOnTop }) {

       const [openSettings, setOpenSettings] = useState(false);
       const navigate = useNavigate();
       const { setTheme } = useContext(Theme);

       const handleClick = (e) => {
              e.preventDefault();
              const linkRedirect = e.currentTarget.href.split("/").at(-1);
              const thisPath = window.location.pathname;
              if (linkRedirect === thisPath.split("/")[1]) return;
              approveOnTop(Math.random() * 100);
              setTimeout(() => {
                     navigate(`/${linkRedirect}`);
              }, 400);
       };

       return (
              <section className='fixed bottom-0 w-full py-3 bg-tertiary light:bg-light-tertiary z-10'>
                     <div className='w-full flex justify-evenly items-center'>
                            {/* home */}
                            <NavLink to="/" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-11 rounded-full bg-secondary light:bg-light-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <HomeRoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child light:text-light-tertiary`} fontSize='medium' />
                            </NavLink>
                            {/* bio */}
                            <NavLink to="/about" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-11 rounded-full bg-secondary light:bg-light-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <Person2RoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child light:text-light-tertiary`} fontSize='medium' />
                            </NavLink>
                            {/* portfolio */}
                            <NavLink to="/portfolio" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-11 rounded-full bg-secondary light:bg-light-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <BusinessCenterRoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child light:text-light-tertiary`} fontSize='smail' />
                            </NavLink>
                            {/* contact */}
                            <NavLink to="/contact" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-11 rounded-full bg-secondary light:bg-light-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <ConnectWithoutContactRoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child light:text-light-tertiary`} fontSize='medium' />
                            </NavLink>
                            {/* settings */}
                            <div onClick={() => setOpenSettings(prev => !prev)} className=" size-11 rounded-full bg-secondary light:bg-light-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90" dir='rtl' >
                                   <SettingsIcon className={`${openSettings ? "text-gray-700" : "text-gray-200"}  group-hover:text-gray-700 light:text-light-tertiary active-sidebar-desktop-child`} />
                                   {/* Change Them Website */}
                                   <div onClick={() => setTheme(prev => !prev)} className={`absolute ${openSettings && "-translate-y-18 opacity-100 !pointer-events-auto"} light:bg-light-secondary pointer-events-none delay-100 duration-500 opacity-0 size-13 rounded-full bg-secondary transition-all flex justify-center items-center text-white`}>
                                          {
                                                 localStorage.getItem("theme") === "light" ? (<LightModeIcon className='light:text-light-tertiary' />) : (<NightsStayIcon className='light:text-light-tertiary' />)
                                          }
                                   </div>
                            </div>
                     </div>
              </section>
       )
}
