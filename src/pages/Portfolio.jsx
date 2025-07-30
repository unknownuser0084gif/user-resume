import { useState, useEffect } from "react";
import SlideDownOnLoad from "../components/slideDownOnLoad/SlideDownOnLoad";
import TransitionsModal from '../components/modal/Modal';
import GetDataFromDataBase from "./../helpers/GetDataFromDataBase";

export default function Portfolio() {

       const [moveUp, setMoveUp] = useState(false);
       const [tabs, setTabs] = useState("all");
       const [data, setData] = useState(null);

       const tab = (name) => {
              setTabs(name);
              if (name === "all"){
                     GetDataFromDataBase(e => setData(e.value) , "portfolio");
              }else{
                     GetDataFromDataBase(e => setData(e.value.filter(item => item.filter === name)) , "portfolio");
              }
       }

       useEffect(() => {
              const timer = setTimeout(() => {
                     setMoveUp(true);
              }, 100);
              GetDataFromDataBase(e => setData(e.value) , "portfolio");
              window.scrollTo(0, 0)
       }, []);

       return (
              <>
                     <SlideDownOnLoad />
                     <section className={`text-white text-center w-full md:w-[calc(100vw-7rem)] relative top-0 left-0 transition-all duration-1200 ease-out ${moveUp ? "translate-y-0" : "translate-y-22"}`}>
                            {/* title */}
                            <div className=" w-screen relative h-52 flex justify-center items-center">
                                   <h1 className="absolute uppercase font-morabba-bold text-7xl md:text-[7rem] opacity-5 text-nowrap">Portfolio</h1>
                                   <h1 className="absolute uppercase font-morabba-bold text-4xl md:text-6xl -mt-6 word-spacing-half">نمونه کارهای <span className="text-primary">من</span></h1>
                            </div>
                            {/* menu */}
                            <div className="w-screen font-morabba flex justify-center gap-x-4">
                                   <h4 className={`${tabs === "all" ? "text-primary" : ""} transition-all duration-300 py-2`} onClick={() => tab("all")}>همه</h4>
                                   <h4 className={`${tabs === "full" ? "text-primary" : ""} transition-all duration-300 py-2`} onClick={() => tab("full")}>کامل</h4>
                                   <h4 className={`${tabs === "frontend" ? "text-primary" : ""} transition-all duration-300 py-2`} onClick={() => tab("frontend")}>طراحی فرانت</h4>
                            </div>
                            {/* content */}
                            <div className="w-screen py-12">
                                   <div className="max-w-[72rem] mx-auto grid gap-8 place-content-center grid-cols-1 md:grid-cols-2 px-8 xl:px-0 xl:grid-cols-3">
                                          {
                                                 data && (
                                                        data.map(item => (
                                                               <div key={item.id} className="w-full h-56 rounded-2xl overflow-hidden relative group select-none">
                                                                      <img className="w-full h-full object-cover" src={item.image} alt="" />
                                                                      <TransitionsModal timeout={500} >
                                                                             {/* button */}
                                                                             <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center">
                                                                                    <h1 className="-mt-12 group-hover:mt-0 transition-all duration-500 font-morabba text-xl">{item.project_title}</h1>
                                                                             </div>
                                                                             {/* modal content */}
                                                                             <div>
                                                                                    {/* title */}
                                                                                    <h1 className="uppercase text-center pb-8 w-full font-gothic-bold text-primary text-3xl">{item.project_title}</h1>
                                                                                    {/* other info */}
                                                                                    <div className="flex justify-between pb-8 pt-0 w-full" dir="rtl">
                                                                                           <div className="w-full space-y-4 text-lg">
                                                                                                  <h3>مشتری : &nbsp;&nbsp;<span>{item.customer}</span></h3>
                                                                                                  <h3>پیش نمایش :  &nbsp;&nbsp;<a href={item.preview_link}>{item.preview_link}</a></h3>
                                                                                           </div>
                                                                                           <div className="w-full space-y-4 text-lg">
                                                                                                  <h3>پروژه : &nbsp;&nbsp;<span>{item.name}</span></h3>
                                                                                                  <h3>زبان ها :  &nbsp;&nbsp;<span className="uppercase">{item.language_programming}</span></h3>
                                                                                           </div>
                                                                                    </div>
                                                                                    {/* media */}
                                                                                    <div className="w-full h-[20rem] overflow-hidden rounded-2xl">
                                                                                           <img className="w-full h-full object-cover" src={item.image} alt="" />
                                                                                    </div>
                                                                             </div>
                                                                      </TransitionsModal>
                                                               </div>
                                                        ))
                                                 )
                                          }

                                   </div>

                            </div>
                            {/* empty space in page down */}
                            <div className="py-8 max-xl:py-16"></div>
                     </section>
              </>
       )
}
