import { useState, useEffect, useRef } from "react";
// import SlideDownOnLoad from "../components/slideDownOnLoad/SlideDownOnLoad"; 
import Slider from "./../components/SliderPortfolios/SliderPortfolios";
import { motion } from "framer-motion";
import TransitionsModal from './../components/modal/Modal';
import { portfolios } from "../db/db";


export default function Portfolio() {


       const addPointerEventsAuto = useRef(null);

       const [tabs, setTabs] = useState("all");
       const [data, setData] = useState([]);



       const tab = (name) => {
              setTabs(name)
              if (name === "all") {
                     setData(portfolios);
              } else {
                     setData(portfolios.filter(item => item.filter === name))
              }
       }

       // mounting
       useEffect(() => {
              window.scrollTo(0, 0);
              setData(portfolios);
       }, []);

       useEffect(() => {
              if (data) {
                     addPointerEventsAuto.current.classList.remove("addPointerEventsAuto")
                     setTimeout(() => {
                            addPointerEventsAuto.current.classList.add("addPointerEventsAuto")
                     }, 600)
              }
       }, [data])

       return (
              <>
                     {/* <SlideDownOnLoad /> */}
                     <motion.section
                            initial={
                                   {
                                          translateY: "5.5rem"
                                   }
                            }
                            animate={
                                   {
                                          translateY: 0,
                                          transition: {
                                                 duration: 0.5
                                          }
                                   }
                            }
                            className={`text-white text-center w-full md:w-[calc(100vw-7rem)] relative top-0 left-0 transition-all duration-1200 ease-out `}
                     >

                            {/* title */}
                            <div className=" w-screen relative h-52 flex justify-center items-center">
                                   <h1 className="absolute uppercase font-morabba-bold text-7xl md:text-[7rem] opacity-5 text-nowrap light:text-light-tertiary">Portfolio</h1>
                                   <h1 className="absolute uppercase font-morabba-bold text-4xl md:text-6xl -mt-6 word-spacing-half light:text-light-tertiary">نمونه کارهای <span className="text-primary">من</span></h1>
                            </div>

                            {/* menu */}
                            <div className="w-screen font-morabba flex justify-center gap-x-4">
                                   <h4 className={`${tabs === "all" ? "!text-primary" : ""} transition-all duration-300 py-2 light:text-light-tertiary`} onClick={() => tab("all")}>همه</h4>
                                   <h4 className={`${tabs === "full" ? "!text-primary" : ""} transition-all duration-300 py-2 light:text-light-tertiary`} onClick={() => tab("full")}>کامل</h4>
                                   <h4 className={`${tabs === "frontend" ? "!text-primary" : ""} transition-all duration-300 py-2 light:text-light-tertiary`} onClick={() => tab("frontend")}>طراحی فرانت</h4>
                            </div>

                            {/* content */}
                            <div className="w-screen py-12">
                                   {
                                          <div ref={addPointerEventsAuto} className="max-w-[72rem] mx-auto grid gap-8 place-content-center grid-cols-1 md:grid-cols-2 px-8 xl:px-0 xl:grid-cols-3">
                                                 {
                                                        data.map((values, index) => (
                                                               <motion.div
                                                                      key={Math.random() * 99999}
                                                                      initial={
                                                                             {
                                                                                    x: "100px",
                                                                                    opacity: 0
                                                                             }
                                                                      }
                                                                      animate={
                                                                             {
                                                                                    x: 0,
                                                                                    opacity: 1
                                                                             }
                                                                      }
                                                                      transition={
                                                                             {
                                                                                    delay: index * 0.1,
                                                                                    duration: 1,
                                                                                    ease: [0.098, 0.697, 0.459, 1.021]
                                                                             }
                                                                      }
                                                                      className="w-full h-56 rounded-2xl overflow-hidden relative group select-none pointer-events-none"
                                                               >

                                                                      {/* <img className="w-full h-full object-cover" src={JSON.parse(values.image)[0]} alt="" /> */}
                                                                      <img className="w-full h-full object-cover" src={values.image} alt="" />
                                                                      <TransitionsModal  >
                                                                             {/* button */}
                                                                             <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                                                                                    <h1 className="-mt-12 group-hover:mt-0 transition-all duration-500 font-morabba text-xl">{values.project_title}</h1>
                                                                             </div>
                                                                             {/* modal content */}
                                                                             <div className="w-full">
                                                                                    {/* title */}
                                                                                    <h1 className="uppercase text-center pb-8 w-full font-gothic-bold text-primary text-3xl">{values.project_title}</h1>
                                                                                    {/* other info */}
                                                                                    <div className="flex justify-between pb-8 pt-0 w-full font-morabba light:text-light-tertiary" dir="rtl">
                                                                                           <div className="w-full space-y-4 text-lg">
                                                                                                  <h3>مشتری : &nbsp;&nbsp;<span>{values.customer}</span></h3>
                                                                                                  <h3>پیش نمایش :  &nbsp;&nbsp;{values.preview_link !== "-" ? (<a href={values.preview_link} target="_blank">{values.project_title}</a>) : "ندارد"}</h3>
                                                                                           </div>
                                                                                           <div className="w-full space-y-4 text-lg">
                                                                                                  <h3>پروژه : &nbsp;&nbsp;<span>{values.name}</span></h3>
                                                                                                  <h3>زبان ها :  &nbsp;&nbsp;<span className="uppercase">{values.language_programming}</span></h3>
                                                                                           </div>
                                                                                    </div>
                                                                                    {/* media */}
                                                                                    <div className="w-full h-[20rem] lg:h-[24rem] xl:h-[26rem] overflow-hidden rounded-2xl">
                                                                                           <Slider images={values.gallery ? [values.image, ...values.gallery] : [values.image]} />
                                                                                    </div>
                                                                             </div>
                                                                      </TransitionsModal>
                                                                      {/* {console.log(i)} */}
                                                               </motion.div>
                                                        ))
                                                 }
                                          </div>
                                   }
                            </div>
                            {/* empty space in page down */}
                            <div className="mt-16"></div>
                            <div className="absolute top-0 left-0 -z-1 light:bg-light-primary h-screen w-screen transition-all"></div>
                     </motion.section>
              </>
       )
}
