import React, { useState, useEffect } from 'react';
// import SlideDownOnLoad from "../components/slideDownOnLoad/SlideDownOnLoad";


export default function Home() {

       const [moveUp, setMoveUp] = useState(false);

       useEffect(() => {
              const timer = setTimeout(() => {
                     setMoveUp(true);
              }, 100);

       }, []);

       return (
              <>
                     
                     <section className={`text-white text-center w-screen md:h-screen relative top-0`}>
                            {/* yellow tringle */}
                            <div className='absolute top-0 left-0 w-98 h-screen overflow-hidden md:block hidden z-1'>
                                   <div className='bg-primary w-full h-full clip-path-triangle'></div>
                            </div>
                            <div className={`fixed top-0 text-white z-1 w-full h-[calc(100vh+3rem)] md:h-full md:pl-12 md:pr-26 md:py-10 flex flex-col md:flex-row items-center md:justify-between md:items-center max-md:-mt-28 max-md:justify-center max-md:items-center transition-all duration-1200 ease-out ${moveUp ? "translate-y-0" : "translate-y-22"}`}>
                                   {/* card image */}
                                   <div className="max-md:min-w-62 max-md:max-w-62 max-md:min-h-62 max-md:max-h-62 md:w-6/10 md:h-full bg-black mt-6 rounded-full md:rounded-4xl shadow-[0px_0px_7px_#000000e6] overflow-hidden border-3 md:border-none border-neutral-800">
                                          <img src="./images/me.png" className=' w-full h-[150%] md:h-full object-cover' alt="Morteza Bari" />
                                   </div>
                                   {/* content */}
                                   <div className="w-full md:h-full max-md:mt-12 flex justify-center items-center">
                                          <div className='xl:text-start max-md:px-12 w-full md:w-3/5 max-md:flex max-md:justify-center max-md:flex-col max-md:items-center' dir='rtl'>
                                                 <h1 className='uppercase xl:text-[42px] text-3xl text-nowrap xl:leading-[40px] leading-[25px] text-primary font-morabba-bold tracking-wide word-spacing-half mb-6 '>من مرتضی بحری هستم</h1>
                                                 <h1 className='uppercase xl:text-[42px] text-3xl text-nowrap xl:leading-[40px] leading-[25px] font-morabba-bold tracking-wide'>توسعه دهنده فرانت</h1>
                                                 <p className='text-start max-md:text-justify mt-12 xl:text-xl text-base font-morabba md:ml-4 leading-[30px] xl:leading-[35px]' style={{ wordSpacing: "0.2rem" }}>
                                                        من یک طراح وب و توسعه‌دهنده فرانت اند مستقر در ایران هستم که بر ایجاد تجربیات تمیز و کاربرپسند تمرکز دارم، من به ساخت نرم‌افزارهای عالی که زندگی اطرافیانم را بهبود می‌بخشد، علاقه زیادی دارم
                                                 </p>
                                          </div>
                                   </div>
                            </div>
                     </section>
              </>

       )
}
