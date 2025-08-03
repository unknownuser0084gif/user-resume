import { useEffect, useState , memo} from 'react';


const SlideDownOnLoad = memo(() => {
       const [shrink, setShrink] = useState(false);

       useEffect(() => {
              const timer = setTimeout(() => {
                     setShrink(true);
              }, 100);
              return () => clearTimeout(timer);
       }, []);

       return (
              <div className={`fixed bottom-0 left-0 w-screen h-screen bg-tertiary z-2 transition-all duration-700 ease-[cubic-bezier(0.6,0.03,0,0.91)] page-overlay ${shrink ? 'shrink' : ''}`}></div>
       );
})

export default SlideDownOnLoad;
