import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import { NavLink , useNavigate } from 'react-router-dom';


export default function MobileSidebar({ approveOnTop }) {

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
              <section className='fixed bottom-0 w-full py-3 bg-tertiary z-10'>
                     <div className='w-full flex justify-evenly items-center'>
                            {/* home */}
                            <NavLink to="/" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-11 rounded-full bg-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <HomeRoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child`} fontSize='medium'/>
                            </NavLink>
                            {/* bio */}
                            <NavLink to="/about" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-11 rounded-full bg-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <Person2RoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child`} fontSize='medium' />
                            </NavLink>
                            {/* portfolio */}
                            <NavLink to="/portfolio" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-11 rounded-full bg-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <BusinessCenterRoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child`} fontSize='smail' />
                            </NavLink>
                            {/* contact */}
                            <NavLink to="/contact" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-11 rounded-full bg-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <ConnectWithoutContactRoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child`} fontSize='medium' />
                            </NavLink>
                            {/* blog */}
                            <NavLink to="/blog" onClick={handleClick} className={e => `${e.isActive && 'active-sidebar-desktop'} size-11 rounded-full bg-secondary flex justify-center items-center group duration-400 transition-all overflow-hidden hover:bg-primary/90 `} dir='rtl' >
                                   <LibraryBooksRoundedIcon className={`text-gray-200 group-hover:text-gray-700 active-sidebar-desktop-child`} fontSize='medium' />
                            </NavLink>
                     </div>
              </section>
       )
}
