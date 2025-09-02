import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import { NavLink, useNavigate } from 'react-router-dom';
import { memo, useState , useContext} from 'react';
import {Theme} from '../../context/Them';


const DesktopSidebar = memo(({ approveOnTop }) => {

       const [openSettings, setOpenSettings] = useState(false);
       const navigate = useNavigate();
       const { setTheme} = useContext(Theme);

       const handleClick = (e) => {
              e.preventDefault();
              const linkRedirect = e.currentTarget.href.split("/").at(-1);
              const thisPath = window.location.pathname;
              if (linkRedirect === thisPath.split("/")[1]) return ;
              approveOnTop(Math.random() * 100);
              setTimeout(() => {
                     navigate(`/${linkRedirect}`);
              }, 500);
       };

       return (
              <section className="fixed pr-6 flex justify-end items-center right-0 min-w-24 max-w-24 w-24 h-screen z-10">
                     <div className="space-y-4 w-full" dir='rtl'>
                            {/* home */}
                            <NavLink to="/" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-13 rounded-full bg-secondary light:bg-light-secondary flex items-center group hover:w-42 duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <HomeRoundedIcon className={`text-gray-200 mr-3.5 group-hover:text-gray-700 active-sidebar-desktop-child light:text-light-tertiary`} />
                                   <h1 className='font-morabba-bold text-nowrap w-full text-center opacity-0 group-hover:opacity-100 duration-200 group-hover:delay-100 text-gray-700 transition-all'>صفحه اصلی</h1>
                            </NavLink>
                            {/* bio */}
                            <NavLink to="/about" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-13 rounded-full bg-secondary light:bg-neutral-300 flex items-center group hover:w-38 duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <Person2RoundedIcon className={`text-gray-200 mr-3.5 group-hover:text-gray-700 light:text-light-tertiary active-sidebar-desktop-child`} />
                                   <h1 className='font-morabba-bold text-nowrap w-full text-center opacity-0 group-hover:opacity-100 duration-200 group-hover:delay-100 text-gray-700 transition-all'>درباره من</h1>
                            </NavLink>
                            {/* portfolio */}
                            <NavLink to="/portfolio" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-13 rounded-full bg-secondary light:bg-light-secondary flex items-center group hover:w-54 duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <BusinessCenterRoundedIcon className={`text-gray-200 mr-3.5 group-hover:text-gray-700 light:text-light-tertiary active-sidebar-desktop-child`} />
                                   <h1 className='font-morabba-bold text-nowrap w-full text-center opacity-0 group-hover:opacity-100 duration-200 group-hover:delay-100 text-gray-700 transition-all'>نمونه کار های من</h1>
                            </NavLink>
                            {/* contact */}
                            <NavLink to="/contact" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-13 rounded-full bg-secondary light:bg-light-secondary flex items-center group hover:w-42 duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <ConnectWithoutContactRoundedIcon className={`text-gray-200 mr-3.5 group-hover:text-gray-700 light:text-light-tertiary active-sidebar-desktop-child`} />
                                   <h1 className='font-morabba-bold text-nowrap w-full text-center opacity-0 group-hover:opacity-100 duration-200 group-hover:delay-100 text-gray-700 transition-all'>ارتباط با من</h1>
                            </NavLink>
                            {/* settings */}
                            <div onClick={() => setOpenSettings(prev => !prev)} className={`${!openSettings ? "hover:bg-primary/90 hover:w-36 group light:bg-light-secondary bg-secondary" : "-translate-x-4 translate-y-4 bg-primary/90"} size-13 rounded-full flex items-center duration-400 transition-all relative`}>
                                   <SettingsIcon className={`${openSettings ? "text-gray-700" : "text-gray-200"} mr-3.5 group-hover:text-gray-700 light:text-light-tertiary active-sidebar-desktop-child`} />
                                   <h1 className='font-morabba-bold text-nowrap w-full text-center opacity-0 group-hover:opacity-100 duration-200 group-hover:delay-100 text-gray-700 transition-all pointer-events-none' dir='rtl' >تنظیمات</h1>
                                   {/* Change Them Website */}
                                   <div onClick={() => setTheme(prev => !prev)} className={`absolute ${openSettings && "-translate-x-18 opacity-100 !pointer-events-auto"} light:bg-light-secondary pointer-events-none delay-100 duration-500 opacity-0 size-13 rounded-full bg-secondary transition-all flex justify-center items-center text-white`}>
                                          {
                                                 localStorage.getItem("theme") === "light"  ? (<LightModeIcon className='light:text-light-tertiary'/>) : (<NightsStayIcon className='light:text-light-tertiary' />)
                                          }
                                   </div>
                                   {/* Change Languge Website */}
                                   {/* <div className={`absolute ${openSettings && "-translate-x-18 translate-y-8 opacity-100 "} duration-500 opacity-0 size-13 rounded-full bg-secondary transition-all flex justify-center items-center text-white`}>
                                          <h1 className='font-gothic-bold'>
                                                 {
                                                        localStorage.getItem("lang") ? "En" : "Fa"
                                                 }
                                          </h1>
                                   </div> */}
                            </div>
                     </div>
              </section>
       )
})
export default DesktopSidebar;