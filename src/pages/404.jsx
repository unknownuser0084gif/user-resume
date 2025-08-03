import { useState, useEffect, useMemo } from "react";
import SlideDownOnLoad from "../components/slideDownOnLoad/SlideDownOnLoad";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { NavLink } from "react-router-dom"; 

export default function NotFound() {
       const [moveUp, setMoveUp] = useState(false);

       useEffect(() => {
              const timer = setTimeout(() => {
                     setMoveUp(true);
              }, 100);
              window.scrollTo(0, 0);
              
       }, []);

       return (
              <>
                     <SlideDownOnLoad />
                     <section className={`text-white text-center w-full md:w-[calc(100vw-7rem)] relative top-0 left-0 transition-all duration-1200 ease-out ${moveUp ? "translate-y-0" : "translate-y-22"}`}>
                            <div className="w-screen h-screen flex justify-center items-center">
                                   <div className="flex justify-center items-center flex-col">
                                          <h1 className="text-9xl xl:text-[10rem] text-primary font-morabba-bold">404 !</h1>
                                          <h3 className="font-morabba mt-2 text-2xl"dir="rtl">صفحه مد نظر شما پیدا نشد !</h3>
                                          <NavLink to="/" dir="rtl" type="submit" className='a-none w-46 h-[46px] border border-primary mt-14 py-0 group rounded-full flex justify-start items-center relative'>
                                                 <div className='size-11 bg-primary rounded-full group-hover:w-full transition-all flex items-center justify-start absolute -z-1'>
                                                        <ArrowForwardRoundedIcon className='mui-icon-arrow-right ms-2' />
                                                 </div>
                                                 <h4 className='pr-16 group-hover:text-secondary transition-all font-morabba-bold text-sm '>برگشت به خونه</h4>
                                          </NavLink>
                                   </div>
                            </div>
                     </section>
              </>
       )
}
