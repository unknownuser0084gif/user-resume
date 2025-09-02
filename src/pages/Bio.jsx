import { useState, useEffect } from "react";
import CircularProgressBar from "../components/CircularProgressBar/CircularProgressBar";
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import LoaderPage from './../components/LoadingPage/LoadingPage';
import useAxiosGet from "../hooks/useAxiosGet";
import { toast } from 'react-toastify';
import { motion } from "framer-motion";


export default function Bio() {

       const [personalInfo, loadingPI, errorPI] = useAxiosGet("/bio");
       const [skills, loadingSk, errorSK] = useAxiosGet("/skils");
       const [educations, loadingED, errorED] = useAxiosGet("/educations");
       const [experiences, loadingEX, errorEX] = useAxiosGet("/experience");
       const notify = e => toast.error(e, {
              pauseOnHover: false,
              className: "border border-primary outline-none",
              progressClassName: "!bg-primary",
              autoClose: 2000
       });
       errorPI && notify(<h1 className={`text-red-500  font-morabba-bold text-xs`} dir="rtl">مشکلی در دریافت اطلاعات وجود دارد! <br /> (ارور کد : {errorPI.code})</h1>)
       errorSK && notify(<h1 className={`text-red-500  font-morabba-bold text-xs`} dir="rtl">مشکلی در دریافت اطلاعات وجود دارد! <br /> (ارور کد : {errorSK.code})</h1>)
       errorED && notify(<h1 className={`text-red-500  font-morabba-bold text-xs`} dir="rtl">مشکلی در دریافت اطلاعات وجود دارد! <br /> (ارور کد : {errorED.code})</h1>)
       errorEX && notify(<h1 className={`text-red-500  font-morabba-bold text-xs`} dir="rtl">مشکلی در دریافت اطلاعات وجود دارد! <br /> (ارور کد : {errorEX.code})</h1>)


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
                            className={`text-white text-center w-full md:w-[calc(100vw-7rem)] relative top-0 left-0 transition-all duration-1200 ease-out`}>
                            {/* title */}
                            <div className=" w-screen relative h-52 flex justify-center items-center">
                                   <h1 className="absolute uppercase font-morabba-bold text-7xl md:text-[7rem] opacity-5 text-nowrap light:text-light-tertiary">Abut me</h1>
                                   <h1 className="absolute uppercase font-morabba-bold text-5xl md:text-6xl -mt-6 word-spacing-half light:text-light-tertiary">درباره <span className="text-primary">من</span></h1>
                            </div>
                            {/* personal info */}
                            {
                                   personalInfo && (
                                          <div className="w-full flex flex-col xl:flex-row justify-center items-center max-xl:gap-y-16 px-6 md:pl-16 md:pr-12" dir="ltr">
                                                 {/* info boxes */}
                                                 <div className="w-full xl:w-5/12 grid gap-4 xl:gap-8 grid-cols-2 max-xl:order-1 light:text-light-tertiary">
                                                        {/* projects completed */}
                                                        <div className="border border-neutral-800 light:border-light-secondary rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                               <h1 className="font-gothic-bold text-6xl text-primary">{personalInfo.value.complete_projects}</h1>
                                                               <div className="font-morabba flex gap-x-3 text-xl">
                                                                      <h1 className="text-gray-600">____</h1>
                                                                      <h3>پروژه <br /> تکمیل شده</h3>
                                                               </div>
                                                        </div>
                                                        {/* years of experience */}
                                                        <div className="border border-neutral-800 light:border-light-secondary rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                               <h1 className="font-gothic-bold text-6xl text-primary">{personalInfo.value.experience_years}</h1>
                                                               <div className="font-morabba flex gap-x-3 text-xl">
                                                                      <h1 className="text-gray-600">____</h1>
                                                                      <h3>سال <br /> تجربه</h3>
                                                               </div>
                                                        </div>
                                                        {/* Happy customers */}
                                                        <div className="border border-neutral-800 light:border-light-secondary rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                               <h1 className="font-gothic-bold text-6xl text-primary">{personalInfo.value.happy_customers}</h1>
                                                               <div className="font-morabba flex gap-x-3 text-xl">
                                                                      <h1 className="text-gray-600">____</h1>
                                                                      <h3>مشتری <br /> خوشحال</h3>
                                                               </div>
                                                        </div>
                                                        {/* awards won */}
                                                        <div className="border border-neutral-800 light:border-light-secondary rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                               <h1 className="font-gothic-bold text-6xl text-primary">{personalInfo.value.rewards_won}</h1>
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
                                                                             <h2 className="text-lg font-morabba-bold"> {personalInfo.value.age + " سال "}</h2>
                                                                      </div>
                                                                      <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                                             <h2 className="text-lg font-morabba ">فریلنسر : </h2>
                                                                             <h2 className={`text-lg font-morabba-bold ${(personalInfo.value.freelancer == 0) ? "text-red-400" : "text-green-400"}`}>{(personalInfo.value.freelancer == 0) ? "خیر" : "بله"}</h2>
                                                                      </div>
                                                                      <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                                             <h2 className="text-lg font-morabba ">زبان ها : </h2>
                                                                             <h2 className="text-lg font-morabba-bold">{personalInfo.value.langs}</h2>
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
                                                                             <h2 className="text-lg font-morabba-bold">{personalInfo.value.city}</h2>
                                                                      </div>
                                                                      <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                                             <h2 className="text-lg font-morabba ">ایمیل : </h2>
                                                                             <h2 className="text-lg font-morabba-bold">{personalInfo.value.email}</h2>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div className="w-full pt-12">
                                                               <a href={personalInfo.value.resume_link} className='w-52 h-[58px] border border-primary py-0 group rounded-full flex justify-start items-center relative ml-auto mr-0 !no-underline !text-white'>
                                                                      <div className='size-14 bg-primary rounded-full group-hover:w-full transition-all flex items-center justify-start absolute -z-1'>
                                                                             <DownloadRoundedIcon className='mui-icon-arrow-right ms-4' />
                                                                      </div>
                                                                      <h4 className='pr-18 group-hover:text-secondary transition-all font-morabba-bold  light:text-neutral-400'>دانلود فایل رزومه</h4>
                                                               </a>
                                                        </div>
                                                 </div>
                                          </div>
                                   )
                            }
                            {
                                   loadingPI && (
                                          <LoaderPage className="max-md:mr-32" />
                                   )
                            }
                            {/* skills */}
                            <div className="w-screen mt-14 space-y-4 font-gothic">
                                   <div className="w-full py-12 flex items-center justify-center">
                                          <h1 className="text-2xl font-morabba-bold word-spacing-half-half light:text-light-tertiary">مهارت های من</h1>
                                   </div>
                                   {
                                          skills && (
                                                 <div className="w-full grid place-items-center grid-cols-2 lg:grid-cols-4 px-4 md:px-26">
                                                        {
                                                               skills.value.map(item => (
                                                                      <div key={item.id} className="w-38 flex flex-col items-center">
                                                                             <CircularProgressBar percentage={item.progress} />
                                                                             <h3 className="pt-5 py-14 uppercase font-gothic-bold light:text-light-tertiary">{item.title}</h3>
                                                                      </div>
                                                               ))
                                                        }

                                                 </div>
                                          )
                                   }
                                   {
                                          loadingSk && (
                                                 <section className="w-full md:w-[calc(100vw-7rem)]">
                                                        <LoaderPage className="max-md:mr-32" />
                                                 </section>
                                          )
                                   }
                            </div>
                            {/* experience & education */}
                            <div className="w-full mt-12">
                                   {/* title */}
                                   <div className="w-screen text-center mb-14">
                                          <h1 className="font-morabba-bold text-2xl light:text-light-tertiary">تجربیات و تحصیلات</h1>
                                   </div>
                                   {
                                          (educations && experiences) && (
                                                 <div className="flex flex-col xl:flex-row gap-12 px-8 xl:px-12 word-spacing-3half" dir="rtl">
                                                        {/* experiences */}
                                                        <div className="w-full xl:w-1/2 space-y-16">
                                                               {
                                                                      experiences.value.map(item => (
                                                                             <div key={item.id} className="w-full border-r border-neutral-700 light:border-light-secondary relative ">
                                                                                    {/* left icon */}
                                                                                    <div className="absolute top-0 -right-5 bg-primary size-10 rounded-full flex justify-center items-center"><BusinessCenterRoundedIcon className="text-neutral-700" /></div>
                                                                                    {/* years */}
                                                                                    <div className="absolute top-0 right-8 bg-secondary px-4 py-1 w-fit rounded-full text-xs light:bg-light-secondary light:text-light-tertiary transition-all">{item.years}</div>
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
                                                        <div className="w-full xl:w-1/2">
                                                               {
                                                                      educations.value.map(item => (
                                                                             <div key={item.id} className="w-full border-r border-neutral-700 light:border-light-secondary relative ">
                                                                                    {/* left icon */}
                                                                                    <div className="absolute top-0 -right-5 bg-primary size-10 rounded-full flex justify-center items-center"><BusinessCenterRoundedIcon className="text-neutral-700" /></div>
                                                                                    {/* years */}
                                                                                    <div className="absolute top-0 right-8 bg-secondary px-4 py-1 w-fit rounded-full text-xs font-morabba light:bg-light-secondary light:text-light-tertiary transition-all">{item.year}</div>
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
                                          )
                                   }
                                   {
                                          (loadingEX && loadingED) && (
                                                 <LoaderPage className="max-md:mr-32" />
                                          )
                                   }
                            </div>
                            {/* empty space in page down */}
                            <div className="py-8 max-xl:py-16"></div>
                     </motion.section>
              </>
       )
}
