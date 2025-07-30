import { useState, useEffect } from "react";
import SlideDownOnLoad from "../components/slideDownOnLoad/SlideDownOnLoad";
import CircularProgressBar from "../components/CircularProgressBar/CircularProgressBar";
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import GetDataFromDataBase from "./../helpers/GetDataFromDataBase";


export default function Bio() {

       const [moveUp, setMoveUp] = useState(false);
       const [personalInfo, setPersonalInfo] = useState(null);
       const [skills, setSkills] = useState(null);
       const [educations, setEducations] = useState(null);
       const [experiences, setExperiences] = useState(null);

       useEffect(() => {
              const timer = setTimeout(() => {
                     setMoveUp(true);
              }, 100);
              GetDataFromDataBase(e => setPersonalInfo(e.value), "bio");
              GetDataFromDataBase(e => setSkills(e.value), "skils");
              GetDataFromDataBase(e => setEducations(e.value), "educations");
              GetDataFromDataBase(e => setExperiences(e.value), "experience");
              window.scrollTo(0, 0);
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
                                                 <h1 className="font-gothic-bold text-6xl text-primary">{personalInfo && personalInfo.complete_projects}</h1>
                                                 <div className="font-morabba flex gap-x-3 text-xl">
                                                        <h1 className="text-gray-600">____</h1>
                                                        <h3>پروژه <br /> تکمیل شده</h3>
                                                 </div>
                                          </div>
                                          {/* years of experience */}
                                          <div className="border border-neutral-800 rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                 <h1 className="font-gothic-bold text-6xl text-primary">{personalInfo && personalInfo.experience_years}</h1>
                                                 <div className="font-morabba flex gap-x-3 text-xl">
                                                        <h1 className="text-gray-600">____</h1>
                                                        <h3>سال <br /> تجربه</h3>
                                                 </div>
                                          </div>
                                          {/* Happy customers */}
                                          <div className="border border-neutral-800 rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                 <h1 className="font-gothic-bold text-6xl text-primary">{personalInfo && personalInfo.happy_customers}</h1>
                                                 <div className="font-morabba flex gap-x-3 text-xl">
                                                        <h1 className="text-gray-600">____</h1>
                                                        <h3>مشتری <br /> خوشحال</h3>
                                                 </div>
                                          </div>
                                          {/* awards won */}
                                          <div className="border border-neutral-800 rounded-lg py-6 text-start px-4 md:px-8 space-y-4 w-full">
                                                 <h1 className="font-gothic-bold text-6xl text-primary">{personalInfo && personalInfo.rewards_won}</h1>
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
                                                               <h2 className="text-lg font-morabba-bold">{personalInfo && personalInfo.age} سال</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">فریلنسر : </h2>
                                                               <h2 className={`text-lg font-morabba-bold ${(personalInfo && personalInfo.freelancer == 0) ? "text-red-400" : "text-green-400"}`}>{(personalInfo && personalInfo.freelancer == 0) ? "خیر" : "بله"}</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">زبان ها : </h2>
                                                               <h2 className="text-lg font-morabba-bold">{personalInfo && personalInfo.langs}</h2>
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
                                                               <h2 className="text-lg font-morabba-bold">{personalInfo && personalInfo.city}</h2>
                                                        </div>
                                                        <div className="w-full flex flex-col md:flex-row md:items-center gap-x-2">
                                                               <h2 className="text-lg font-morabba ">ایمیل : </h2>
                                                               <h2 className="text-lg font-morabba-bold">{personalInfo && personalInfo.email}</h2>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="w-full pt-12">
                                                 <a href={personalInfo && personalInfo.resume_link} className='w-52 h-[58px] border border-primary py-0 group rounded-full flex justify-start items-center relative ml-auto mr-0 !no-underline !text-white'>
                                                        <div className='size-14 bg-primary rounded-full group-hover:w-full transition-all flex items-center justify-start absolute -z-1'>
                                                               <DownloadRoundedIcon className='mui-icon-arrow-right ms-4' />
                                                        </div>
                                                        <h4 className='pr-18 group-hover:text-secondary transition-all font-morabba-bold'>دانلود فایل رزومه</h4>
                                                 </a>
                                          </div>
                                   </div>
                            </div>
                            {/* skills */}
                            <div className="w-screen mt-14 space-y-4 font-gothic">
                                   <div className="w-full py-12 flex items-center justify-center">
                                          <h1 className="text-2xl font-morabba-bold word-spacing-half-half">مهارت های من</h1>
                                   </div>
                                   <div className="w-full grid place-items-center grid-cols-2 lg:grid-cols-4 px-4 md:px-26">
                                          {
                                                 skills &&
                                                 skills.map(item => (
                                                        <div key={item.id} className="w-38 flex flex-col items-center">
                                                               <CircularProgressBar percentage={item.progress} />
                                                               <h3 className="pt-5 py-14 uppercase font-gothic-bold">{item.title}</h3>
                                                        </div>
                                                 ))
                                          }

                                   </div>
                            </div>
                            {/* experience & education */}
                            <div className="w-full mt-12">
                                   {/* title */}
                                   <div className="w-screen text-center mb-14">
                                          <h1 className="font-morabba-bold text-2xl">تجربیات و تحصیلات</h1>
                                   </div>
                                   <div className="flex flex-col xl:flex-row gap-12 px-8 xl:px-12 word-spacing-3half" dir="rtl">
                                          {/* experiences */}
                                          <div className="w-full xl:w-1/2 space-y-16">
                                                 {
                                                        experiences &&
                                                        experiences.map(item => (
                                                               <div key={item.id} className="w-full border-r border-neutral-700 relative ">
                                                                      {/* left icon */}
                                                                      <div className="absolute top-0 -right-5 bg-primary size-10 rounded-full flex justify-center items-center"><BusinessCenterRoundedIcon className="text-neutral-700" /></div>
                                                                      {/* years */}
                                                                      <div className="absolute top-0 right-8 bg-secondary px-4 py-1 w-fit rounded-full text-xs">{item.years}</div>
                                                                      {/* content */}
                                                                      <div className="px-8 pt-12">
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
                                                        educations &&
                                                        educations.map(item => (
                                                               <div key={item.id} className="w-full border-r border-neutral-700 relative ">
                                                                      {/* left icon */}
                                                                      <div className="absolute top-0 -right-5 bg-primary size-10 rounded-full flex justify-center items-center"><BusinessCenterRoundedIcon className="text-neutral-700" /></div>
                                                                      {/* years */}
                                                                      <div className="absolute top-0 right-8 bg-secondary px-4 py-1 w-fit rounded-full text-xs font-morabba">{item.year}</div>
                                                                      {/* content */}
                                                                      <div className="px-8 pt-12">
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
                     </section>


              </>
       )
}
