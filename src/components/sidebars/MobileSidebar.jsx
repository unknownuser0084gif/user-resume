import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import { NavLink } from 'react-router-dom';


export default function DesktopSidebar() {
       return (
              <section className='fixed bottom-0 w-full py-2 bg-tertiary z-10'>
                     <div className='w-full flex justify-evenly items-center'>
                            {/* home */}
                            <NavLink to="/" className={e => `${e.isActive && 'active-sidebar-desktop'} size-10 rounded-full bg-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <HomeRoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child`} fontSize='smail'/>
                            </NavLink>
                            {/* bio */}
                            <NavLink to="/about" className={e => `${e.isActive && 'active-sidebar-desktop'} size-10 rounded-full bg-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <Person2RoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child`} fontSize='smail' />
                            </NavLink>
                            {/* portfolio */}
                            <NavLink to="/portfolio" className={e => `${e.isActive && 'active-sidebar-desktop'} size-10 rounded-full bg-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <BusinessCenterRoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child`} fontSize='smail' />
                            </NavLink>
                            {/* contact */}
                            <NavLink to="/contact" className={e => `${e.isActive && 'active-sidebar-desktop'} size-10 rounded-full bg-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <ConnectWithoutContactRoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child`} fontSize='smail' />
                            </NavLink>
                            {/* blog */}
                            <NavLink to="/blog" className={e => `${e.isActive && 'active-sidebar-desktop'} size-10 rounded-full bg-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <LibraryBooksRoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child`} fontSize='smail' />
                            </NavLink>
                     </div>
              </section>
       )
}
