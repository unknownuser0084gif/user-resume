import MouseMoveing from "./components/MouseFollwer/MM";
import { useLocation, useRoutes, useBlocker, createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import DesktopSidebar from "./components/sidebars/DesktopSidebar";
import MobileSidebar from "./components/sidebars/MobileSidebar";
import useIsMobile from "./helpers/isMobile";
import { ToastContainer } from 'react-toastify';
import SlideDownOnLoad from "./components/slideDownOnLoad/SlideDownOnLoad";
import { useEffect, useRef, useState } from "react";
import LoaderLanding from "./components/LoaderLanding/LoaderLanding";
import useThem from './hooks/useThem';
import { Theme } from "./context/Them";


function App() {
       let defineRoutes = useRoutes(routes);
       const [slideDown, setSlideDown] = useState(null);
       const firstOpen = useRef(false);
       const [theme, setTheme] = useThem();
       

       return (
              <>
                     <Theme.Provider value={{ theme, setTheme }}>
                            <LoaderLanding />
                            <ToastContainer
                                   position="top-right"
                                   autoClose={2000}
                                   hideProgressBar={false}
                                   newestOnTop={false}
                                   closeOnClick={false}
                                   rtl={false}
                                   pauseOnFocusLoss={false}
                                   draggable
                                   pauseOnHover
                                   theme={theme ? "light" : "dark"}
                            />
                            <MouseMoveing />
                            <SlideDownOnLoad open={slideDown} firstOpen={firstOpen} />
                            {useIsMobile() ? (<MobileSidebar approveOnTop={setSlideDown} />) : (<DesktopSidebar approveOnTop={setSlideDown} />)}
                            <section className="absolute top-0 w-full light:bg-light-primary transition-[background]">
                                   {defineRoutes}
                            </section>
                     </Theme.Provider>
              </>
       );
}
export default App;
