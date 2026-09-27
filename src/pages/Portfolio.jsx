import { useState, useEffect, useRef } from "react";
// import SlideDownOnLoad from "../components/slideDownOnLoad/SlideDownOnLoad"; 
import Slider from "./../components/SliderPortfolios/SliderPortfolios";
import { motion } from "framer-motion";
import TransitionsModal from './../components/modal/Modal';
import { portfolios } from "../db/db";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';


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
                                                        data.map((values, index) => {
                                                               const galleryImages = values.gallery ? [values.image, ...values.gallery] : [values.image];
                                                               const tags = (values.language_programming || "")
                                                                      .split(/[\s,،]+/)
                                                                      .filter(Boolean);

                                                               return (
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

                                                                                    {/* modal content — redesigned */}
                                                                                    <div className="w-full text-right light:text-light-tertiary" dir="rtl">

                                                                                           {/* title */}
                                                                                           <h1 className="uppercase  text-end px-6 py-5.5 w-full font-gothic-bold text-primary text-2xl md:text-3xl border-b border-neutral-700 light:border-neutral-300 mb-5.5">
                                                                                                  {values.project_title}
                                                                                           </h1>

                                                                                           <div className="px-5 pt-1 pb-6">
                                                                                                  {/* gallery */}
                                                                                                  <div className="w-full h-[13rem] sm:h-[16rem] lg:h-[19rem] overflow-hidden rounded-2xl bg-neutral-800">
                                                                                                         <Slider images={galleryImages} />
                                                                                                  </div>

                                                                                                  {/* info cards */}
                                                                                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 font-morabba">
                                                                                                         <div className="rounded-xl bg-white/5 px-4 py-3">
                                                                                                                <p className="text-xs text-neutral-400 mb-1">پروژه</p>
                                                                                                                <p className="text-sm font-medium">{values.name}</p>
                                                                                                         </div>
                                                                                                         <div className="rounded-xl bg-white/5 px-4 py-3">
                                                                                                                <p className="text-xs text-neutral-400 mb-1">مشتری</p>
                                                                                                                <p className="text-sm font-medium">{values.customer}</p>
                                                                                                         </div>
                                                                                                  </div>

                                                                                                  {/* languages / tools */}
                                                                                                  {
                                                                                                         tags.length > 0 && (
                                                                                                                <div className="mt-4">
                                                                                                                       <p className="text-xs text-neutral-400 mb-2 font-morabba">زبان‌ها و ابزارها</p>
                                                                                                                       <div className="flex flex-wrap gap-1.5">
                                                                                                                              {
                                                                                                                                     tags.map((tag, i) => (
                                                                                                                                            <span
                                                                                                                                                   key={tag + i}
                                                                                                                                                   className="uppercase text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                                                                                                                                            >
                                                                                                                                                   {tag}
                                                                                                                                            </span>
                                                                                                                                     ))
                                                                                                                              }
                                                                                                                       </div>
                                                                                                                </div>
                                                                                                         )
                                                                                                  }

                                                                                                  {/* preview */}
                                                                                                  <div className="mt-5 pt-4 border-t border-white/10 light:border-neutral-300 flex items-center justify-between font-morabba">
                                                                                                         {
                                                                                                                values.preview_link !== "-" ? (
                                                                                                                       <a
                                                                                                                              href={values.preview_link}
                                                                                                                              target="_blank"
                                                                                                                              rel="noreferrer"
                                                                                                                              className="flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white/5 transition-colors duration-200"
                                                                                                                       >
                                                                                                                              <OpenInNewRoundedIcon fontSize="small" />
                                                                                                                              مشاهده پیش‌نمایش
                                                                                                                              {values.is_developing && (
                                                                                                                                     <span className="text-neutral-400">(درحال توسعه)</span>
                                                                                                                              )}
                                                                                                                       </a>
                                                                                                                ) : (
                                                                                                                       <span className="flex items-center gap-1.5 text-neutral-400 text-[13px]">
                                                                                                                              <VisibilityOffRoundedIcon fontSize="small" />
                                                                                                                              پیش‌نمایش موجود نیست
                                                                                                                       </span>
                                                                                                                )
                                                                                                         }
                                                                                                  </div>
                                                                                           </div>

                                                                                    </div>
                                                                             </TransitionsModal>
                                                                             {/* {console.log(i)} */}
                                                                      </motion.div>
                                                               )
                                                        })
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
