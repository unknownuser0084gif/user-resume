// import { useState , useEffect } from "react";
import MouseMoveing from "./components/MouseFollwer/MM";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import DesktopSidebar from "./components/sidebars/DesktopSidebar";
import MobileSidebar from "./components/sidebars/MobileSidebar";
import useIsMobile from "./helpers/isMobile";


function App() {
       let defineRoutes = useRoutes(routes);

       return (
              <>
                     <MouseMoveing />
                     {useIsMobile() ? (<MobileSidebar />) : (<DesktopSidebar />)}
                     <section className="absolute top-0 w-full">
                            {defineRoutes}
                     </section>
              </>
       );
}

export default App;
