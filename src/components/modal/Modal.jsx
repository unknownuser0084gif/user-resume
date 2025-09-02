import { useState, memo } from 'react';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { motion, AnimatePresence } from 'framer-motion';


const TransitionsModal = memo(({ children }) => {

       //Modal
       const [open, setOpen] = useState(false);

       return (
              <>
                     <div className={`absolute w-full h-full top-0 left-0`} onClick={() => setOpen(prev => !prev)}>
                            {children[0]}
                     </div>

                     <AnimatePresence>
                            {
                                   open && (
                                          <>
                                                 <motion.div onClick={() => setOpen(prev => !prev)} className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-98"
                                                        initial={
                                                               {
                                                                      opacity: 0,
                                                                      backdropFilter: "blur(0)"
                                                               }
                                                        }
                                                        animate={
                                                               {
                                                                      opacity: 1,
                                                                      backdropFilter: "blur(4px)"
                                                               }
                                                        }
                                                        transition={
                                                               {
                                                                      duration: 0.4
                                                               }
                                                        }
                                                        exit={
                                                               {
                                                                      opacity: 0,
                                                                      backdropFilter: "blur(0)",
                                                                      transition: {
                                                                             delay: 0.15
                                                                      }
                                                               }
                                                        }
                                                 />
                                                 <motion.section className="fixed top-1/2 left-1/2 -translate-1/2 w-[95%] md:w-7/8 lg:w-6/8 xl:w-5/8 2xl:w-4/8 border py-4 rounded-lg px-4 bg-tertiary light:bg-light-primary border-black z-98"
                                                        initial={
                                                               {
                                                                      opacity: 0,
                                                                      transform: "matrix3d(1, 0, 0, 0.0002, 0, 1, 0, -0.0001, 0, 0, 1, 0, -0 , 0, 0, 1)",
                                                                      perspective: "1500px",
                                                                      willChange: "opacity , transform",
                                                                      filter: "blur(12px)"
                                                               }
                                                        }
                                                        exit={
                                                               {
                                                                      opacity: [1, 0, 0],
                                                                      transform: "matrix3d(1, 0, 0, 0.0002, 0, 1, 0, -0.0001, 0, 0, 1, 0, -0 , 0, 0, 1)",
                                                                      perspective: "1500px",
                                                                      willChange: "opacity , transform",
                                                                      filter: "blur(12px)",
                                                                      transition: {
                                                                             duration: 0.7
                                                                      }
                                                               }
                                                        }
                                                        animate={
                                                               {
                                                                      opacity: [0, 0, 1],
                                                                      transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                                                      filter: "blur(0px)",
                                                                      transition: {
                                                                             duration: 0.25,
                                                                             delay: 0.05
                                                                      }
                                                               }
                                                        }
                                                 >
                                                        <HighlightOffRoundedIcon className='absolute right-2 top-2 light:text-light-tertiary' onClick={() => setOpen(prev => !prev)}/>
                                                        {children[1]}
                                                 </motion.section>
                                          </>
                                   )
                            }
                     </AnimatePresence>

              </>
       );
})
export default TransitionsModal
