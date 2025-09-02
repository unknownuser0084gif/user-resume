import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";

const routes = [
       // home
       {path : "/" , element : <Home/>},
       {path : "/about" , element : <Bio/>}, 
       {path : "/portfolio" , element : <Portfolio/>},
       {path : "/contact" , element : <Contact/>},
       {path : "*" , element : <NotFound/>},
];
export default routes ;