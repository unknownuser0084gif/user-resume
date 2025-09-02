import { memo, useEffect } from 'react';
import { motion } from 'framer-motion';

//move to multiple pages (tertiary loading)
const SlideDownOnLoad = memo(({ open, firstOpen }) => {

       useEffect(() => {
              if (!firstOpen) return;
              firstOpen.current = true;
       }, [])

       return (
              <section >
                     {
                            (firstOpen && firstOpen.current) && (
                                   <>
                                          <motion.div key={open} className="w-screen h-[350vh] fixed bg-tertiary light:bg-light-secondary z-9"
                                                 animate={
                                                        {
                                                               translateY: ["-350vh", "100vh"],
                                                               transition: {
                                                                      duration: 0.75,
                                                                      ease: [1, 0.08, 0.46, 0.89]
                                                               }
                                                        }
                                                 }
                                          />
                                          <motion.div key={open + 1} className="w-screen h-[300vh] fixed bg-primary z-9"
                                                 animate={
                                                        {
                                                               translateY: ["-300vh", "100vh"],
                                                               transition: {
                                                                      duration: 0.75,
                                                                      delay: 0.25,
                                                                      ease: [1, 0.08, 0.46, 0.89]
                                                               }
                                                        }
                                                 }
                                          />
                                          <motion.div key={open + 2} className="w-screen h-[300vh] fixed bg-tertiary light:bg-light-secondary z-9"
                                                 animate={
                                                        {
                                                               translateY: ["-300vh", "100vh"],
                                                               transition: {
                                                                      duration: 0.75,
                                                                      delay: 0.45,
                                                                      ease: [1, 0.05, 0.15, 0.87]
                                                               }
                                                        }
                                                 }
                                          />
                                   </>
                            )
                     }
              </section>
       );
})

export default SlideDownOnLoad;
