import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import { NavLink, useNavigate } from 'react-router-dom';
import { memo } from 'react';


const DesktopSidebar = memo(({ approveOnTop }) => {

       const navigate = useNavigate();

       const handleClick = (e) => {
              e.preventDefault();
              const linkRedirect = e.currentTarget.href.split("/").at(-1);
              approveOnTop(true);
              setTimeout(() => {
                     navigate(`/${linkRedirect}`);
                     approveOnTop(false);
              }, 400);
       };

       return (
              <section className="fixed pr-6 flex justify-end items-center right-0 min-w-24 max-w-24 w-24 h-screen z-10">
                     <div className="space-y-4 w-full" dir='rtl'>
                            {/* home */}
                            <NavLink to="/" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-13 rounded-full bg-secondary flex items-center group hover:w-42 duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <HomeRoundedIcon className={`text-gray-200 mr-3.5 group-hover:text-gray-700 active-sidebar-desktop-child`} />
                                   <h1 className='font-morabba-bold text-nowrap w-full text-center opacity-0 group-hover:opacity-100 duration-200 group-hover:delay-100 text-gray-700 transition-all'>صفحه اصلی</h1>
                            </NavLink>
                            {/* bio */}
                            <NavLink to="/about" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-13 rounded-full bg-secondary flex items-center group hover:w-38 duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <Person2RoundedIcon className={`text-gray-200 mr-3.5 group-hover:text-gray-700 active-sidebar-desktop-child`} />
                                   <h1 className='font-morabba-bold text-nowrap w-full text-center opacity-0 group-hover:opacity-100 duration-200 group-hover:delay-100 text-gray-700 transition-all'>درباره من</h1>
                            </NavLink>
                            {/* portfolio */}
                            <NavLink to="/portfolio" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-13 rounded-full bg-secondary flex items-center group hover:w-54 duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <BusinessCenterRoundedIcon className={`text-gray-200 mr-3.5 group-hover:text-gray-700 active-sidebar-desktop-child`} />
                                   <h1 className='font-morabba-bold text-nowrap w-full text-center opacity-0 group-hover:opacity-100 duration-200 group-hover:delay-100 text-gray-700 transition-all'>نمونه کار های من</h1>
                            </NavLink>
                            {/* contact */}
                            <NavLink to="/contact" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-13 rounded-full bg-secondary flex items-center group hover:w-42 duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <ConnectWithoutContactRoundedIcon className={`text-gray-200 mr-3.5 group-hover:text-gray-700 active-sidebar-desktop-child`} />
                                   <h1 className='font-morabba-bold text-nowrap w-full text-center opacity-0 group-hover:opacity-100 duration-200 group-hover:delay-100 text-gray-700 transition-all'>ارتباط با من</h1>
                            </NavLink>
                            {/* blog */}
                            <NavLink to="/blog" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-13 rounded-full bg-secondary flex items-center group hover:w-32 duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <LibraryBooksRoundedIcon className={`text-gray-200 mr-3.5 group-hover:text-gray-700 active-sidebar-desktop-child`} />
                                   <h1 className='font-morabba-bold text-nowrap w-full text-center opacity-0 group-hover:opacity-100 duration-200 group-hover:delay-100 text-gray-700 transition-all'>بلاگ</h1>
                            </NavLink>
                     </div>
              </section>
       )
})
export default DesktopSidebar;