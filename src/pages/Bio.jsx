import { useState, useEffect } from "react";
import SlideDownOnLoad from "../components/slideDownOnLoad/SlideDownOnLoad";
import CircularProgressBar from "../components/CircularProgressBar/CircularProgressBar";
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';


export default function Bio() {

       const [moveUp, setMoveUp] = useState(false);
       useEffect(() => {
              const timer = setTimeout(() => {
                     setMoveUp(true);
              }, 100);
       }, []);

       return (
              <>
                     <SlideDownOnLoad />
                     <section className={`text-white text-center w-full md:w-[calc(100vw-7rem)] relative top-0 left-0 transition-all duration-1200 ease-out ${moveUp ? "translate-y-0" : "translate-y-22"}`}>
                            {/* title */}
                            <div className=" w-screen relative h-52 flex justify-center items-center">
                                   <h1 className="absolute uppercase font-morabba-bold text-7xl md:text-[7rem] opacity-5 text-nowrap">Abut me</h1>
                                   <h1 className="absolute uppercase font-morabba-bold text-5xl md:text-6xl -mt-6 word-spacing-half">درباره <span className="text-primary">من</span></h1>
                            </div>
                            {/* personal info */}
                            <div className="w-full flex flex-col xl:flex-row justify-center items-center max-xl:gap-y-16 px-6 md:pl-16 md:pr-12" dir="ltr">
                                   {/* info boxes */}
                                   <div className="w-full xl:w-5/12 grid gap-4 xl:gap-8 grid-cols-2 max-xl:order-1">
                                          {/* projects completed */}
                                          <div className="border border-neutral-800 rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                 <h1 className="font-gothic-bold text-6xl text-primary">12</h1>
                                                 <div className="font-morabba flex gap-x-3 text-xl">
                                                        <h1 className="text-gray-600">____</h1>
                                                        <h3>پروژه <br /> تکمیل شده</h3>
                                                 </div>
                                          </div>
                                          {/* years of experience */}
                                          <div className="border border-neutral-800 rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                 <h1 className="font-gothic-bold text-6xl text-primary">8</h1>
                                                 <div className="font-morabba flex gap-x-3 text-xl">
                                                        <h1 className="text-gray-600">____</h1>
                                                        <h3>سال <br /> تجربه</h3>
                                                 </div>
                                          </div>
                                          {/* Happy customers */}
                                          <div className="border border-neutral-800 rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                 <h1 className="font-gothic-bold text-6xl text-primary">54</h1>
                                                 <div className="font-morabba flex gap-x-3 text-xl">
                                                        <h1 className="text-gray-600">____</h1>
                                                        <h3>مشتری <br /> خوشحال</h3>
                                                 </div>
                                          </div>
                                          {/* awards won */}
                                          <div className="border border-neutral-800 rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                 <h1 className="font-gothic-bold text-6xl text-primary">63</h1>
                                                 <div className="font-morabba flex gap-x-3 text-xl">
                                                        <h1 className="text-gray-600">____</h1>
                                                        <h3>جوایز <br /> دریافت شده</h3>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* info content*/}
                                   <div className="w-full xl:w-7/12 text-start " dir="rtl">
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
                                                               <h2 className="text-lg font-morabba-bold">27 سال</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">فریلنسر : </h2>
                                                               <h2 className="text-lg font-morabba-bold text-green-400">بله</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">تلگرام : </h2>
                                                               <h2 className="text-lg font-morabba-bold">mbhdev@</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">تلفن : </h2>
                                                               <h2 className="text-lg font-morabba-bold">09023319893</h2>
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
                                                               <h2 className="text-lg font-morabba-bold">ایران</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">شهر سکونت : </h2>
                                                               <h2 className="text-lg font-morabba-bold">مشهد</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">ایمیل : </h2>
                                                               <h2 className="text-lg font-morabba-bold">mortezabahrii4@gmail.com</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">زبان ها : </h2>
                                                               <h2 className="text-lg font-morabba-bold">فارسی ، انگلیسی</h2>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            {/* skills */}
                            <div className="w-screen mt-14 space-y-4">
                                   <div className="w-full py-12 flex items-center justify-center">
                                          <h1 className="text-2xl font-morabba-bold word-spacing-half-half">مهارت های من</h1>
                                   </div>
                                   <div className="w-full grid place-items-center grid-cols-2 lg:grid-cols-4">
                                          <div className="w-38 flex flex-col items-center">
                                                 <CircularProgressBar percentage={70} />
                                                 <h3 className="pt-5 py-14 uppercase font-gothic-bold">javascript</h3>
                                          </div>
                                          <div className="w-38 flex flex-col items-center">
                                                 <CircularProgressBar percentage={80} />
                                                 <h3 className="pt-5 py-14 uppercase font-gothic-bold">php</h3>
                                          </div>
                                          <div className="w-38 flex flex-col items-center">
                                                 <CircularProgressBar percentage={95} />
                                                 <h3 className="pt-5 py-14 uppercase font-gothic-bold">html</h3>
                                          </div>
                                          <div className="w-38 flex flex-col items-center">
                                                 <CircularProgressBar percentage={95} />
                                                 <h3 className="pt-5 py-14 uppercase font-gothic-bold">css</h3>
                                          </div>
                                          <div className="w-38 flex flex-col items-center">
                                                 <CircularProgressBar percentage={50} />
                                                 <h3 className="pt-5 py-14 uppercase font-gothic-bold">react</h3>
                                          </div>
                                          <div className="w-38 flex flex-col items-center">
                                                 <CircularProgressBar percentage={90} />
                                                 <h3 className="pt-5 py-14 uppercase font-gothic-bold">jquery</h3>
                                          </div>
                                          <div className="w-38 flex flex-col items-center">
                                                 <CircularProgressBar percentage={80} />
                                                 <h3 className="pt-5 py-14 uppercase font-gothic-bold">bootstrap</h3>
                                          </div>
                                          <div className="w-38 flex flex-col items-center">
                                                 <CircularProgressBar percentage={95} />
                                                 <h3 className="pt-5 py-14 uppercase font-gothic-bold">tailwind</h3>
                                          </div>
                                   </div>

                            </div>
                            {/* experience & education */}
                            {/* <div className="w-full border px-8 py-12 rounded-2xl grid grid-cols-1 xl:grid-cols-2 place-items-center relative" dir="rtl"> */}
                            <div className="w-full mt-12">
                                   {/* title */}
                                   <div className="w-screen text-center mb-14">
                                          <h1 className="font-morabba-bold text-2xl">تجربیات و تحصیلات</h1>
                                   </div>
                                   <div className="flex flex-col xl:flex-row gap-12 px-8 xl:px-12" dir="rtl">
                                          {/* education */}
                                          <div className="w-full xl:w-1/2 space-y-16">
                                                 {/* item */}
                                                 <div className="w-full border-r border-neutral-700 relative ">
                                                        {/* left icon */}
                                                        <div className="absolute top-0 -right-5 bg-primary size-10 rounded-full flex justify-center items-center"><BusinessCenterRoundedIcon className="text-neutral-700" /></div>
                                                        {/* years */}
                                                        <div className="absolute top-0 right-8 bg-secondary px-4 py-1 w-fit rounded-full text-xs">1394 - 1399</div>
                                                        {/* content */}
                                                        <div className="px-8 pt-12">
                                                               <div className="w-full text-start space-y-4">
                                                                      {/* title */}
                                                                      <div className="flex gap-x-4 items-center">
                                                                             <h2 className="font-morabba-bold">توسعه دهنده فرانت اند</h2>
                                                                             &ndash;
                                                                             <h5 className="font-morabba text-sm"> کاکتوس پارس شرق</h5>
                                                                      </div>
                                                                      {/* description */}
                                                                      <div>
                                                                             <p className="font-morabba text-justify">
                                                                             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها.
                                                                             </p>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 {/* item */}
                                                 <div className="w-full border-r border-neutral-700 relative ">
                                                        {/* left icon */}
                                                        <div className="absolute top-0 -right-5 bg-primary size-10 rounded-full flex justify-center items-center"><BusinessCenterRoundedIcon className="text-neutral-700" /></div>
                                                        {/* years */}
                                                        <div className="absolute top-0 right-8 bg-secondary px-4 py-1 w-fit rounded-full text-xs">1394 - 1399</div>
                                                        {/* content */}
                                                        <div className="px-8 pt-12">
                                                               <div className="w-full text-start space-y-4">
                                                                      {/* title */}
                                                                      <div className="flex gap-x-4 items-center">
                                                                             <h2 className="font-morabba-bold">توسعه دهنده فرانت اند</h2>
                                                                             &ndash;
                                                                             <h5 className="font-morabba text-sm"> کاکتوس پارس شرق</h5>
                                                                      </div>
                                                                      {/* description */}
                                                                      <div>
                                                                             <p className="font-morabba text-justify">
                                                                             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها.
                                                                             </p>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          {/* experience */}
                                          <div className="w-full xl:w-1/2">
                                                 {/* item */}
                                                 <div className="w-full border-r border-neutral-700 relative ">
                                                        {/* left icon */}
                                                        <div className="absolute top-0 -right-5 bg-primary size-10 rounded-full flex justify-center items-center"><BusinessCenterRoundedIcon className="text-neutral-700" /></div>
                                                        {/* years */}
                                                        <div className="absolute top-0 right-8 bg-secondary px-4 py-1 w-fit rounded-full text-xs">1394 - 1399</div>
                                                        {/* content */}
                                                        <div className="px-8 pt-12">
                                                               <div className="w-full text-start space-y-4">
                                                                      {/* title */}
                                                                      <div className="flex gap-x-4 items-center">
                                                                             <h2 className="font-morabba-bold">توسعه دهنده فرانت اند</h2>
                                                                             &ndash;
                                                                             <h5 className="font-morabba text-sm"> کاکتوس پارس شرق</h5>
                                                                      </div>
                                                                      {/* description */}
                                                                      <div>
                                                                             <p className="font-morabba text-justify">
                                                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها.
                                                                             </p>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>

                            </div>
                            {/* empty space in page down */}
                            <div className="py-8 max-xl:py-16"></div>
                     </section>


              </>
       )
}
