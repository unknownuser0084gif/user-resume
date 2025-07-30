import { useState, useEffect } from "react";
import SlideDownOnLoad from "../components/slideDownOnLoad/SlideDownOnLoad";
import CircularProgress from '@mui/material/CircularProgress';
import TransitionsModal from '../components/modal/Modal';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RawHtmlRenderer from "./../helpers/AddHTMLDom";
import ConvertDate from "../components/ConvertDate/ConvertDate";
import GetDataFromDataBase from "./../helpers/GetDataFromDataBase";


export default function Blog() {

       const [moveUp, setMoveUp] = useState(false);
       const [articles, setArtcles] = useState(null);

       useEffect(() => {
              const timer = setTimeout(() => {
                     setMoveUp(true);
              }, 100);
              GetDataFromDataBase(e => setArtcles(e.value), "blog");
              window.scrollTo(0, 0);
       }, []);

       return (
              <>
                     <SlideDownOnLoad />
                     <section className={`text-white text-center w-full md:w-[calc(100vw-7rem)] relative top-0 left-0 transition-all duration-1200 ease-out ${moveUp ? "translate-y-0" : "translate-y-22"}`}>
                            {/* title */}
                            <div className=" w-screen relative h-52 flex justify-center items-center">
                                   <h1 className="absolute uppercase font-morabba-bold text-7xl md:text-[7rem] opacity-5 text-nowrap word-spacing-3half">Posts</h1>
                                   <h1 className="absolute uppercase font-morabba-bold text-5xl md:text-6xl -mt-3 word-spacing-half">بلاگ</h1>
                            </div>
                            {/* contact form */}
                            <div className="w-screen mt-4 px-8">
                                   {
                                          articles ? (
                                                 <div className="w-full max-w-[1150px] mx-auto pr-0 md:pr-18 xl:pr-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                                        {
                                                               articles.map(item => (
                                                                      <TransitionsModal key={item.id} timeout={200}>
                                                                             {/* button */}
                                                                             <article className="w-full overflow-hidden rounded-lg group bg-secondary" dir="rtl">
                                                                                    {/* image */}
                                                                                    <div className="w-full h-1/2 border-b-5 border-primary overflow-hidden">
                                                                                           <img src={item.images} className="w-full h-full object-cover group-hover:scale-120 transition-all duration-300 ease-in-out" alt={item.title} />
                                                                                    </div>
                                                                                    {/* content */}
                                                                                    <div className="w-full h-1/2 px-6">
                                                                                           {/* title */}
                                                                                           <div className="py-6 text-start">
                                                                                                  <h1 className="text-xl font-morabba-bold word-spacing-3half transition-all duration-300 leading-8 group-hover:text-primary">{item.title}</h1>
                                                                                           </div>
                                                                                           {/* summary */}
                                                                                           <div className="pb-8 text-start">
                                                                                                  <p className="font-morabba line-clamp-3 word-spacing-3half">{item.summary}</p>
                                                                                           </div>
                                                                                    </div>
                                                                             </article>
                                                                             {/* modal content */}
                                                                             <div className="px-2">
                                                                                    {/* title */}
                                                                                    <div className=" w-full relative h-32 mb-6 flex justify-center items-center">
                                                                                           <h1 className="absolute uppercase font-morabba-bold text-6xl md:text-[5.5rem] opacity-5 text-nowrap word-spacing-3half">Article</h1>
                                                                                           <h1 className="absolute uppercase font-morabba-bold text-4xl md:text-6xl -mt-2 word-spacing-half">متن <span className="text-primary">مقاله</span></h1>
                                                                                    </div>
                                                                                    {/* info article */}
                                                                                    <div className="w-full flex gap-x-6" dir="rtl">
                                                                                           {/* user */}
                                                                                           <div className="flex items-center">
                                                                                                  <PersonIcon className="text-primary -mt-1 scale-70" />
                                                                                                  <h6 className="text-xs text-center word-spacing-half-half">{item.user}</h6>
                                                                                           </div>
                                                                                           {/* calendar */}
                                                                                           <div className="flex items-center">
                                                                                                  <CalendarMonthIcon className="text-primary -mt-1 scale-70" />
                                                                                                  <h6 className="text-xs word-spacing-half-half"><ConvertDate date={item.date} /></h6>
                                                                                           </div>
                                                                                           {/* tags */}
                                                                                           <div className="flex items-center">
                                                                                                  <LocalOfferIcon className="text-primary -mt-1 scale-70" />
                                                                                                  <h6 className="text-xs word-spacing-half-3half">{item.tags}</h6>
                                                                                           </div>
                                                                                    </div>
                                                                                    {/* name */}
                                                                                    <div className="pt-4" dir="rtl">
                                                                                           <h1 className="text-2xl word-spacing-3half font-morabba-bold">{item.title}</h1>
                                                                                    </div>
                                                                                    {/* image */}
                                                                                    <div className="w-full mt-6 h-84 overflow-hidden rounded-lg">
                                                                                           <img src={item.images} className="w-full h-full object-cover" alt={item.title} />
                                                                                    </div>
                                                                                    <div className="w-full mt-8 text-justify">
                                                                                           <RawHtmlRenderer html={item.body} />
                                                                                    </div>
                                                                             </div>
                                                                      </TransitionsModal>

                                                               ))
                                                        }
                                                 </div>
                                          ) : (
                                                 <div className="w-full flex justify-center items-center gap-x-4">
                                                        <h1 className="text-3xl font-gothic-bold uppercase">Loading <CircularProgress size={20} /></h1>
                                                 </div>
                                          )
                                   }

                            </div>
                            <div className="py-8 max-xl:py-16"></div>
                     </section>
              </>
       )
}
