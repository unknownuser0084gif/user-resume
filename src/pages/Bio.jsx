import { useState, useEffect } from "react";
import CircularProgressBar from "../components/CircularProgressBar/CircularProgressBar";
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { motion } from "framer-motion";
import { bioData, skilsData, experienceData, educationData } from "../db/db"
import ctp from "../utils/ConvertToPersian";

export default function Bio() {


       useEffect(() => {
              window.scrollTo(0, 0);
       }, []);

       return (
              <>
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
                            className={`text-white text-center w-full md:w-[calc(100vw-7rem)] relative top-0 left-0 transition-all duration-1200 ease-out`}
                     >

                            {/* title */}
                            <div className=" w-screen relative h-52 flex justify-center items-center">
                                   <h1 className="absolute uppercase font-morabba-bold text-7xl md:text-[7rem] opacity-5 text-nowrap light:text-light-tertiary">Abut me</h1>
                                   <h1 className="absolute uppercase font-morabba-bold text-5xl md:text-6xl -mt-6 word-spacing-half light:text-light-tertiary">درباره <span className="text-primary">من</span></h1>
                            </div>

                            {/* personal info */}
                            <div className="w-full flex flex-col xl:flex-row justify-center items-center max-xl:gap-y-16 px-6 md:pl-16 md:pr-12" dir="ltr">
                                   {/* info boxes */}
                                   <div className="w-full xl:w-5/12 grid gap-4 xl:gap-8 grid-cols-2 max-xl:order-1 light:text-light-tertiary">
                                          {/* projects completed */}
                                          <div className="border border-neutral-800 light:border-light-secondary rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                 <h1 className="text-6xl text-primary font-sultanAdanBold">3</h1>
                                                 <div className="font-morabba flex gap-x-3 text-xl">
                                                        <h1 className="text-gray-600">____</h1>
                                                        <h3>پروژه <br /> تکمیل شده</h3>
                                                 </div>
                                          </div>
                                          {/* years of experience */}
                                          <div className="border border-neutral-800 light:border-light-secondary rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                 <h1 className="text-6xl text-primary font-sultanAdanBold">1.5</h1>
                                                 <div className="font-morabba flex gap-x-3 text-xl">
                                                        <h1 className="text-gray-600">____</h1>
                                                        <h3>سال <br /> تجربه</h3>
                                                 </div>
                                          </div>
                                          {/* Happy customers */}
                                          <div className="border border-neutral-800 light:border-light-secondary rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                 <h1 className="text-6xl text-primary font-sultanAdanBold">4</h1>
                                                 <div className="font-morabba flex gap-x-3 text-xl">
                                                        <h1 className="text-gray-600">____</h1>
                                                        <h3>مشتری <br /> خوشحال</h3>
                                                 </div>
                                          </div>
                                          {/* awards won */}
                                          <div className="border border-neutral-800 light:border-light-secondary rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                 <h1 className="text-6xl text-primary font-sultanAdanBold">1 </h1>
                                                 <div className="font-morabba flex gap-x-3 text-xl">
                                                        <h1 className="text-gray-600">____</h1>
                                                        <h3>جوایز <br /> دریافت شده</h3>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* info content*/}
                                   <div className="w-full xl:w-7/12 text-start  light:text-light-tertiary" dir="rtl">
                                          <h1 className="text-3xl word-spacing-half font-morabba-bold mb-10">اطلاعات شخصی</h1>
                                          <div className="w-full flex">
                                                 {/* first column */}
                                                 <div className="w-full space-y-8">
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba">نام : </h2>
                                                               <h2 className="text-lg font-morabba-bold">مرتضی</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">سن : </h2>
                                                               <h2 className="text-lg font-sultanAdanBold"> {bioData.age}</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">فریلنسر : </h2>
                                                               <h2 className={`text-lg font-morabba-bold ${(bioData.freelancer == 0) ? "text-red-400" : "text-green-400"}`}>{(bioData.freelancer == 0) ? "خیر" : "بله"}</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">زبان ها : </h2>
                                                               <h2 className="text-lg font-morabba-bold">فارسی ، انگلیسی</h2>
                                                        </div>
                                                 </div>
                                                 {/* second column */}
                                                 <div className="w-full space-y-8">
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">نام خانوادگی : </h2>
                                                               <h2 className="text-lg font-morabba-bold">بحری</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">ملیت : </h2>
                                                               <h2 className="text-lg font-morabba-bold">ایرانی</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">شهر سکونت : </h2>
                                                               <h2 className="text-lg font-morabba-bold">مشهد</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">ایمیل : </h2>
                                                               <h2 className="text-lg font-gothic-bold">mbahri.cv@gmail.com</h2>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="w-full pt-12">
                                                 <a href="/file/mbahri-cv.pdf" download={true} className='w-52 h-[58px] border border-primary py-0 group rounded-full flex justify-start items-center relative ml-auto mr-0 !no-underline !text-white'>
                                                        <div className='size-14 bg-primary rounded-full group-hover:w-full transition-all flex items-center justify-start absolute z-1'>
                                                               <DownloadRoundedIcon className='mui-icon-arrow-right ms-4' />
                                                        </div>
                                                        <h4 className='pr-18 group-hover:text-secondary transition-all font-morabba-bold  light:text-neutral-400 z-1'>دانلود فایل رزومه</h4>
                                                 </a>
                                          </div>
                                   </div>
                            </div>

                            {/* skills */}
                            <div className="w-screen mt-14 space-y-4 font-gothic">
                                   <div className="w-full py-12 flex items-center justify-center">
                                          <h1 className="text-2xl font-morabba-bold word-spacing-half-half light:text-light-tertiary">مهارت های من</h1>
                                   </div>
                                   <div className="w-full grid place-items-center grid-cols-2 lg:grid-cols-4 px-4 md:px-26">

                                          {
                                                 skilsData.map(item => (
                                                        <div key={item.id} className="w-38 flex flex-col items-center ">
                                                               <CircularProgressBar percentage={item.progress} className={"font-gothic"} />
                                                               <h3 className="pt-5 py-14 uppercase font-gothic-bold light:text-light-tertiary">{item.title}</h3>
                                                        </div>
                                                 ))
                                          }

                                   </div>

                            </div>

                            {/* experience & education */}
                            <div className="w-full mt-12">
                                   {/* title */}
                                   <div className="w-screen text-center mb-14">
                                          <h1 className="font-morabba-bold text-2xl light:text-light-tertiary">تجربیات و تحصیلات</h1>
                                   </div>
                                   <div className="flex flex-col xl:flex-row gap-12 px-8 xl:px-12 word-spacing-3half" dir="rtl">

                                          {/* experiences */}
                                          <div className="w-full xl:w-1/2 space-y-16">

                                                 {
                                                        experienceData.map(item => (
                                                               <div key={item.id} className="w-full border-r border-neutral-700 light:border-light-secondary relative ">
                                                                      {/* left icon */}
                                                                      <div className="absolute top-0 -right-5 bg-primary size-10 rounded-full flex justify-center items-center"><BusinessCenterRoundedIcon className="text-neutral-700" /></div>
                                                                      {/* years */}
                                                                      <div className="absolute top-0 right-8 bg-secondary px-4 py-1 w-fit rounded-full text-xs light:bg-light-secondary light:text-light-tertiary transition-all font-sultanAdanBold">{item.years}</div>
                                                                      {/* content */}
                                                                      <div className="px-8 pt-12  light:text-light-tertiary">
                                                                             <div className="w-full text-start space-y-4">
                                                                                    {/* title */}
                                                                                    <div className="flex gap-x-4 items-center">
                                                                                           <h2 className="font-morabba-bold">{item.stack}</h2>
                                                                                           &ndash;
                                                                                           <h5 className="font-morabba text-sm">{item.company}</h5>
                                                                                    </div>
                                                                                    {/* description */}
                                                                                    <div>
                                                                                           <p className="font-morabba">
                                                                                                  {item.description}
                                                                                           </p>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        ))
                                                 }

                                          </div>

                                          {/* educations */}
                                          <div className="w-full xl:w-1/2 space-y-16">

                                                 {
                                                        educationData.map(item => (
                                                               <div className="w-full border-r border-neutral-700 light:border-light-secondary relative ">
                                                                      {/* left icon */}
                                                                      <div className="absolute top-0 -right-5 bg-primary size-10 rounded-full flex justify-center items-center p-2">
                                                                             <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-neutral-700" viewBox="0 0 14 14" aria-hidden="true" >
                                                                                    <path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z" />
                                                                             </svg>
                                                                      </div>
                                                                      {/* years */}
                                                                      <div className="absolute top-0 right-8 bg-secondary px-4 py-1 w-fit rounded-full text-xs light:bg-light-secondary light:text-light-tertiary transition-all font-sultanAdanBold">{item.year}</div>
                                                                      {/* content */}
                                                                      <div className="px-8 pt-12  light:text-light-tertiary">
                                                                             <div className="w-full text-start space-y-4">
                                                                                    {/* title */}
                                                                                    <div className="flex gap-x-4 items-center">
                                                                                           <h2 className="font-morabba-bold">{item.degree}</h2>
                                                                                           &ndash;
                                                                                           <h5 className="font-morabba text-sm">{item.university}</h5>
                                                                                    </div>
                                                                                    {/* description */}
                                                                                    <div>
                                                                                           <p className="font-morabba">
                                                                                                  {item.description}
                                                                                           </p>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        ))
                                                 }

                                          </div>

                                   </div>


                            </div>

                            {/* empty space in page down */}
                            <div className="py-8 max-xl:py-16"></div>
                     </motion.section>
              </>
       )
}
