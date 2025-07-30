import MouseMoveing from "./components/MouseFollwer/MM";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import DesktopSidebar from "./components/sidebars/DesktopSidebar";
import MobileSidebar from "./components/sidebars/MobileSidebar";
import useIsMobile from "./helpers/isMobile";
import { ToastContainer } from 'react-toastify';


function App() {
       let defineRoutes = useRoutes(routes);

       return (
              <>
                     <ToastContainer
                            position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss = {false}
                            draggable
                            pauseOnHover
                            theme="dark"
                     />
                     <MouseMoveing />
                     {useIsMobile() ? (<MobileSidebar />) : (<DesktopSidebar />)}
                     <section className="absolute top-0 w-full">
                            {defineRoutes}
                     </section>
              </>
       );
}

export default App;
