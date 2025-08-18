import MouseMoveing from "./components/MouseFollwer/MM";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import DesktopSidebar from "./components/sidebars/DesktopSidebar";
import MobileSidebar from "./components/sidebars/MobileSidebar";
import useIsMobile from "./helpers/isMobile";
import { ToastContainer } from 'react-toastify';
import SlideDownOnLoad from "./components/slideDownOnLoad/SlideDownOnLoad";
import { useState } from "react";


function App() {
       let defineRoutes = useRoutes(routes);
       const [slideDown , setSlideDown] = useState(false);

       return (
              <>
                     
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
                            theme="dark"
                     />
                     <MouseMoveing />
                     <SlideDownOnLoad open={slideDown}/>
                     {useIsMobile() ? (<MobileSidebar approveOnTop={setSlideDown} />) : (<DesktopSidebar approveOnTop={setSlideDown} />)}
                     <section className="absolute top-0 w-full">
                            {defineRoutes}
                     </section>
              </>
       );
}

export default App;
