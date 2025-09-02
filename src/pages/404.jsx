import { useState, useEffect } from "react";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {

       useEffect(() => {
              window.scrollTo(0, 0);

       }, []);

       return (
              <>
                     {/* <SlideDownOnLoad /> */}
                     <motion.section
                            initial={
                                   {
                                          translateY: "7rem"
                                   }
                            }
                            animate={
                                   {
                                          translateY: 0,
                                          transition: {
                                                 duration: 0.5,
                                          }
                                   }
                            }
                            className={`text-white text-center w-full md:w-[calc(100vw-7rem)] relative top-0 left-0 transition-all duration-1200 ease-out`}>
                            <div className="w-screen h-screen flex justify-center items-center">
                                   <div className="flex justify-center items-center flex-col">
                                          <h1 className="text-9xl xl:text-[10rem] text-primary font-morabba-bold">404 !</h1>
                                          <h3 className="font-morabba mt-2 text-2xl light:text-light-tertiary" dir="rtl">صفحه مد نظر شما پیدا نشد !</h3>
                                          <NavLink to="/" dir="rtl" type="submit" className='a-none w-46 h-[46px] border border-primary mt-14 py-0 group rounded-full flex justify-start items-center relative'>
                                                 <div className='size-11 bg-primary rounded-full group-hover:w-full transition-all flex items-center justify-start absolute -z-1'>
                                                        <ArrowForwardRoundedIcon className='mui-icon-arrow-right ms-2' />
                                                 </div>
                                                 <h4 className='pr-16 group-hover:text-secondary transition-all font-morabba-bold text-sm light:text-neutral-400'>برگشت به خونه</h4>
                                          </NavLink>
                                   </div>
                            </div>
                     </motion.section>
              </>
       )
}
