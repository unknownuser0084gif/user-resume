import { useState, useEffect, useRef } from "react";
import SlideDownOnLoad from "../components/slideDownOnLoad/SlideDownOnLoad";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { toast } from 'react-toastify';
import LoaderData from './../components/LoadingData/LoadingData';
import useAxiosGet from "../hooks/useAxiosGet";

export default function Contact() {

       const [settings, loading, error] = useAxiosGet("/settings");
       const [moveUp, setMoveUp] = useState(false);
       const [name, setName] = useState(null);
       const [email, setEmail] = useState(null);
       const [subject, setSubject] = useState(null);
       const [message, setMessage] = useState(null);
       const buttonSend = useRef(null);
       const buttonSendLoad = useRef(null);
       const buttonSendData = useRef(null);
       const notify = e => toast.error(e, {
              pauseOnHover: false,
              className: "border border-primary outline-none",
              progressClassName: "!bg-primary",
              autoClose: 2000
       });
       const handleForm = async e => {
              e.preventDefault();
              buttonSend.current.style.opacity = 0.5;
              buttonSend.current.style.pointerEvents = "none";
              buttonSend.current.setAttribute('disabled', 'true');
              buttonSendData.current.style.display = "none"
              buttonSendLoad.current.style.display = "block"

              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), 7000);

              await fetch("https://mbahri.ir/Api-PHP-Resume/set-form-content", {
                     method: "POST",
                     body: JSON.stringify({ name, email, subject, message }),
                     signal: controller.signal
              }).then(e => {
                     clearTimeout(timeoutId);
                     e.json().then(e => {
                            notify(<h1 className={`${e.status ? "text-green-500" : "text-red-500"}  font-morabba-bold`}>{e.message}</h1>);
                            buttonSend.current.style.opacity = 1;
                            buttonSend.current.style.pointerEvents = "auto";
                            buttonSend.current.removeAttribute('disabled');
                            buttonSendData.current.style.display = "block"
                            buttonSendLoad.current.style.display = "none"
                     })
              }).catch(e => {
                     clearTimeout(timeoutId);
                     notify(<h1 className={`text-red-500  font-morabba-bold text-xs`}>مشکلی در ارسال اطلاعات وجود دارد! دوباره امتحان کنید</h1>);
                     buttonSend.current.style.opacity = 1;
                     buttonSend.current.style.pointerEvents = "auto";
                     buttonSend.current.removeAttribute('disabled');
                     buttonSendData.current.style.display = "block"
                     buttonSendLoad.current.style.display = "none"
              })
       }
       error && notify(<h1 className={`text-red-500  font-morabba-bold text-xs`} dir="rtl">مشکلی در ارسال اطلاعات وجود دارد! <br /> (ارور کد : {error.code})</h1>)


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
                            {/* title */}
                            <div className=" w-screen relative h-52 flex justify-center items-center">
                                   <h1 className="absolute uppercase font-morabba-bold text-7xl md:text-[7rem] opacity-5 text-nowrap">Contact</h1>
                                   <h1 className="absolute uppercase font-morabba-bold text-5xl md:text-6xl -mt-6 word-spacing-half">تماس با <span className="text-primary">من</span></h1>
                            </div>
                            {/* contact form */}
                            <div className="w-full flex flex-col xl:flex-row justify-center items-center max-xl:gap-y-16 max-xl:px-6" dir="rtl">
                                   {/* description and more */}
                                   <div className="w-full xl:w-4/12 text-start">
                                          {/* title */}
                                          <div className="py-2">
                                                 <h1 className="text-xl font-morabba-bold">خجالت نکش!</h1>
                                          </div>
                                          {/* desc */}
                                          <div className="py-2">
                                                 <p className="font-morabba word-spacing-3half">
                                                        با من در تماس باشید. من همیشه آماده‌ی بحث در مورد پروژه‌های جدید، ایده‌های خلاقانه یا فرصت‌هایی برای مشارکت در چشم‌اندازهای شما هستم.
                                                 </p>
                                          </div>
                                          {/* social */}
                                          <div className="py-4 space-y-6" dir="rtl">
                                                 {/* email */}
                                                 <div className="flex gap-x-4 items-start word-spacing-3half">
                                                        <div className="size-8">
                                                               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                      <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" className="stroke-primary" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                                               </svg>
                                                        </div>
                                                        <div>
                                                               <h2 className="font-morabba mb-1">ایمیل بده</h2>
                                                               <h4 className="font-morabba">
                                                                      {
                                                                             settings && (
                                                                                    settings.value.email
                                                                             )
                                                                      }
                                                                      {
                                                                             loading && (
                                                                                    <LoaderData className="mt-2" />
                                                                             )
                                                                      }
                                                               </h4>
                                                        </div>
                                                 </div>
                                                 {/* telegram */}
                                                 <div className="flex gap-x-4 items-start word-spacing-3half">
                                                        <div className="size-8">
                                                               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                      <path fillRule="evenodd" className="stroke-primary" strokeWidth="1" clipRule="evenodd" d="M21.997 12C21.997 17.5228 17.5198 22 11.997 22C6.47415 22 1.99699 17.5228 1.99699 12C1.99699 6.47715 6.47415 2 11.997 2C17.5198 2 21.997 6.47715 21.997 12ZM12.3553 9.38244C11.3827 9.787 9.43876 10.6243 6.52356 11.8944C6.05018 12.0827 5.8022 12.2669 5.77962 12.4469C5.74147 12.7513 6.12258 12.8711 6.64155 13.0343C6.71214 13.0565 6.78528 13.0795 6.86026 13.1038C7.37085 13.2698 8.05767 13.464 8.41472 13.4717C8.7386 13.4787 9.10009 13.3452 9.49918 13.0711C12.2229 11.2325 13.629 10.3032 13.7172 10.2831C13.7795 10.269 13.8658 10.2512 13.9243 10.3032C13.9828 10.3552 13.977 10.4536 13.9708 10.48C13.9331 10.641 12.4371 12.0318 11.6629 12.7515C11.4216 12.9759 11.2504 13.135 11.2154 13.1714C11.137 13.2528 11.0571 13.3298 10.9803 13.4038C10.506 13.8611 10.1502 14.204 11 14.764C11.4083 15.0331 11.7351 15.2556 12.0611 15.4776C12.4171 15.7201 12.7722 15.9619 13.2317 16.2631C13.3487 16.3398 13.4605 16.4195 13.5694 16.4971C13.9837 16.7925 14.3559 17.0579 14.8158 17.0155C15.083 16.991 15.359 16.7397 15.4992 15.9903C15.8305 14.2193 16.4817 10.382 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6154 8.40715C16.6021 8.32932 16.5743 8.21842 16.4731 8.13633C16.3533 8.03911 16.1683 8.01861 16.0856 8.02C15.7095 8.0267 15.1324 8.22735 12.3553 9.38244Z" strokeLinejoin="round" />
                                                               </svg>
                                                        </div>
                                                        <div>
                                                               <h2 className="font-morabba mb-1">تو تلگرام پیام بده</h2>
                                                               <h4 className="font-morabba">
                                                                      {
                                                                             settings && (
                                                                                    settings.value.telegram + "@"
                                                                             )
                                                                      }
                                                                      {
                                                                             loading && (
                                                                                    <LoaderData className="mt-2" />
                                                                             )
                                                                      }
                                                               </h4>
                                                        </div>
                                                 </div>
                                                 {/* instagram */}
                                                 <div className="flex gap-x-4 items-start word-spacing-3half">
                                                        <div className="size-8">
                                                               <svg className="w-full h-full fill-primary" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                      viewBox="-143 145 512 512" xmlSpace="preserve">
                                                                      <g>
                                                                             <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7
		c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4
		c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8
		c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4
		c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"/>
                                                                             <path d="M191.6,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7
		v-52.3C241,295.2,218.8,273,191.6,273z M205.8,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L205.8,302.5z M76.5,374.7
		c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1C88,446.1,68,425.8,68,401
		C68,391.2,71.2,382.1,76.5,374.7z M216.1,479.5c0,13.5-11,24.5-24.5,24.5h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2
		c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3h38.2V479.5z"/>
                                                                      </g>
                                                               </svg>
                                                        </div>
                                                        <div>
                                                               <h2 className="font-morabba mb-1">پیجم رو ببین</h2>
                                                               <h4 className="font-morabba">
                                                                      {
                                                                             settings && (
                                                                                    settings.value.instagram + "@"
                                                                             )
                                                                      }
                                                                      {
                                                                             loading && (
                                                                                    <LoaderData className="mt-2" />
                                                                             )
                                                                      }
                                                               </h4>
                                                        </div>
                                                 </div>
                                                 {/* other social */}
                                                 <div className="w-full pt-4 flex gap-x-4 justify-start items-center">
                                                        {/* github */}
                                                        <a href={`https://github.com/${settings && settings.github}`} className="bg-secondary size-10 rounded-full p-2 group hover:bg-primary transition-all">
                                                               <svg className="w-full h-full" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
                                                                      <g>
                                                                             <path d="M0 .011h48v48H0v-48z" fill="none" />
                                                                             <path className="fill-white group-hover:fill-black transition-all" d="M30 44.004v-10c0-.884-.197-1.722-.542-2.479.825-.167 1.65-.358 2.472-.601 2.527-.746 6.154-3.839 7.226-6.863 1.188-3.356 1.188-6.76 0-10.116l-.001-.001c-.213-.603-.537-1.211-.998-1.868.848-3.154.253-5.792.225-5.915l-.365-1.564-1.606.019c-.15.002-3.48.063-6.724 1.955a29.635 29.635 0 0 0-11.371 0c-3.243-1.892-6.573-1.953-6.724-1.955l-1.608-.019-.365 1.564c-.028.123-.623 2.761.225 5.915-.461.657-.785 1.266-.999 1.869-1.187 3.356-1.187 6.76.001 10.117 1.07 3.023 4.697 6.116 7.225 6.862.822.243 1.647.434 2.472.601A5.946 5.946 0 0 0 18 34.004v1.281c-.062.036-.127.065-.187.108-.289.211-2.869 1.967-5.505.09-.93-.946-1.386-1.639-1.826-2.309-.988-1.5-1.841-2.586-4.588-3.96a2 2 0 1 0-1.789 3.579c1.991.995 2.341 1.525 3.035 2.581.515.781 1.155 1.754 2.445 3.044l.215.186c1.692 1.27 3.447 1.723 5.053 1.723A9.286 9.286 0 0 0 18 39.76v4.253l12-.009z" />
                                                                      </g>
                                                               </svg>
                                                        </a>
                                                        {/* linkedin */}
                                                        <a href={`https://www.linkedin.com/in/${settings && settings.linkedin}`} className="bg-secondary size-10 rounded-full p-2 group hover:bg-primary transition-all">
                                                               <svg className="w-full h-full" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                      <rect x="0" fill="transparent" width="20" height="20" />
                                                                      <g>
                                                                             <path className="fill-white group-hover:fill-black transition-all" d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
                                                                      </g>
                                                               </svg>
                                                        </a>
                                                        {/* twitter */}
                                                        <a href={`https://twitter.com/${settings && settings.twitter}`} className="bg-secondary size-10 rounded-full p-2 group hover:bg-primary transition-all">
                                                               <svg className="w-full h-full" viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                             <g transform="translate(-60.000000, -7521.000000)" className="fill-white group-hover:fill-black transition-all">
                                                                                    <g transform="translate(56.000000, 160.000000)">
                                                                                           <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" />
                                                                                    </g>
                                                                             </g>
                                                                      </g>
                                                               </svg>
                                                        </a>
                                                        {/* whatsapp */}
                                                        <a className="bg-secondary size-10 rounded-full group hover:bg-primary transition-all">
                                                               <svg className="w-full h-full fill-white group-hover:fill-black transition-all" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                      <path className="stroke-white group-hover:stroke-black transition-all" fillRule="evenodd" clipRule="evenodd" d="M9.52024 7.76662C9.33885 7.35303 9.13737 7.34298 8.96603 7.34298C8.81477 7.33294 8.65288 7.33294 8.48154 7.33294C8.32083 7.33294 8.04845 7.3932 7.81684 7.64549C7.58464 7.89719 6.95007 8.49217 6.95007 9.71167C6.95007 10.9318 7.83693 12.1111 7.95805 12.2724C8.07858 12.4337 9.67149 15.0139 12.192 16.0124C14.2883 16.839 14.712 16.6777 15.1657 16.6269C15.6189 16.5767 16.6275 16.0325 16.839 15.4476C17.0405 14.8733 17.0405 14.3693 16.9802 14.2682C16.9199 14.1678 16.748 14.1069 16.5064 13.9758C16.2541 13.8552 15.0446 13.2502 14.813 13.1693C14.5808 13.0889 14.4195 13.0487 14.2582 13.2904C14.0969 13.5427 13.623 14.0969 13.4724 14.2582C13.3306 14.4195 13.1799 14.4396 12.9377 14.3185C12.686 14.1979 11.8895 13.9356 10.9418 13.0889C10.2056 12.4331 9.71167 11.6171 9.56041 11.3755C9.41979 11.1232 9.54032 10.992 9.67149 10.8709C9.78257 10.7604 9.92378 10.579 10.0449 10.4378C10.1654 10.296 10.2056 10.1855 10.2966 10.0242C10.377 9.86292 10.3368 9.71167 10.2765 9.59114C10.2157 9.48006 9.74239 8.26056 9.52024 7.76662Z" strokeLinejoin="round" />
                                                               </svg>
                                                        </a>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* form*/}
                                   <div className="w-full xl:w-8/12 text-start max-xl:order-1" dir="rtl">
                                          <form className="xl:pl-12 xl:pr-4 font-morabba space-y-8" action="" onSubmit={e => handleForm(e)}>
                                                 {/* name & email */}
                                                 <div className="flex flex-col md:flex-row gap-8">
                                                        <input type="text" required className="w-full bg-secondary rounded-full py-3 px-6" name="" placeholder="نام" onChange={e => setName(e.target.value)} />
                                                        <input type="email" required className="w-full bg-secondary rounded-full py-3 px-6" name="" placeholder="ایمیل" onChange={e => setEmail(e.target.value)} />
                                                 </div>
                                                 {/* subject */}
                                                 <div>
                                                        <input type="text" required className="w-full bg-secondary rounded-full py-3 px-6" name="" placeholder="موضوع" onChange={e => setSubject(e.target.value)} />
                                                 </div>
                                                 {/* message */}
                                                 <div>
                                                        <textarea rows="7" required className="w-full h-fit bg-secondary rounded-[2rem] p-4 " name="" placeholder="متن پیام" onChange={e => setMessage(e.target.value)}></textarea>
                                                 </div>
                                                 {/* button */}
                                                 <div className="w-full">
                                                        <button ref={buttonSend} type="submit" className='w-42 h-[58px] border border-primary py-0 group rounded-full flex justify-start items-center relative ml-0 mr-auto'>
                                                               <div ref={buttonSendData} className="w-full h-full">
                                                                      <div className='size-14 bg-primary rounded-full group-hover:w-full transition-all flex items-center justify-start absolute -z-1'>
                                                                             <ArrowForwardRoundedIcon className='mui-icon-arrow-right ms-4' />
                                                                      </div>
                                                                      <h4 className='pr-10 pt-3.5 group-hover:text-secondary transition-all font-morabba-bold'>ارسال پیام</h4>
                                                               </div>
                                                               <div ref={buttonSendLoad} className="hidden w-full">
                                                                      <LoaderData />
                                                               </div>
                                                        </button>
                                                 </div>
                                          </form>
                                   </div>
                            </div>
                            <div className="py-8 max-xl:py-16"></div>
                     </section>
              </>
       )
}
