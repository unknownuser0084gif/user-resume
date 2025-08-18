import { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// const SlideDownOnLoad = memo(() => {
//        const [shrink, setShrink] = useState(false);

//        useEffect(() => {
//               const timer = setTimeout(() => {
//                      setShrink(true);
//               }, 100);
//               console.log("init from slideOnLoad")
//               return () => {
//                      clearTimeout(timer);
//                      console.log("exit from slideOnLoad")
//               };
//        }, []);

//        return (
//               <div className={`fixed bottom-0 left-0 w-screen h-screen bg-tertiary z-2 transition-all duration-700 ease-[cubic-bezier(0.6,0.03,0,0.91)] page-overlay ${shrink ? 'shrink' : ''}`}></div>
//        );
// })


const SlideDownOnLoad = memo(({ open }) => {


       return (
              <AnimatePresence>
                     <motion.div className={`fixed bottom-0 left-0 w-screen h-screen ease-out duration-200 bg-tertiary z-2`}
                            animate={
                                   {
                                          height: open ? "100vh" : "0vh"
                                   }
                            }
                     />
              </AnimatePresence>
       );
})

export default SlideDownOnLoad;
