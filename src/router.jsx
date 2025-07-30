import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/404";

const routes = [
       // home
       {path : "/" , element : <Home/>},
       {path : "/about" , element : <Bio/>},
       {path : "/portfolio" , element : <Portfolio/>},
       {path : "/contact" , element : <Contact/>},
       {path : "/blog" , element : <Blog/>},
       {path : "*" , element : <NotFound/>},
];
export default routes ;