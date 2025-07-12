import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const routes = [
       // home
       {path : "/" , element : <Home/>},
       {path : "/about" , element : <Bio/>},
       {path : "/portfolio" , element : <Portfolio/>},
       {path : "/contact" , element : <Contact/>},
       {path : "/blog" , element : <Blog/>},
];
export default routes ;