
import { React, useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function PrevButton() {
       const swiper = useSwiper();
       return (
              <div className='size-12 backdrop-blur-xs bg-black/50 border border-neutral-400 text-neutral-300 rounded-full prevSlideButton flex justify-center items-center text-2xl' onClick={() => swiper.slidePrev()}></div>
       );
}
function NextButton() {
       const swiper = useSwiper();
       return (
              <div className='size-12 backdrop-blur-xs bg-black/50 border border-neutral-400 text-neutral-300 rounded-full nextSlideButton flex justify-center items-center text-2xl' onClick={() => swiper.slideNext()}></div>
       );
}
function FullScreen({ link }) {
       return (
              <a href={link} target="_blank" alt="portolio image" className='size-10 p-1.5 backdrop-blur-xs bg-black/50 border border-neutral-400 text-neutral-300 rounded-full  flex justify-center items-center text-2xl' >
               
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M6 9.99739C6.01447 8.29083 6.10921 7.35004 6.72963 6.72963C7.35004 6.10921 8.29083 6.01447 9.99739 6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                   <path d="M6 14.0007C6.01447 15.7072 6.10921 16.648 6.72963 17.2684C7.35004 17.8888 8.29083 17.9836 9.99739 17.998" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                   <path d="M17.9976 9.99739C17.9831 8.29083 17.8883 7.35004 17.2679 6.72963C16.6475 6.10921 15.7067 6.01447 14.0002 6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                   <path d="M17.9976 14.0007C17.9831 15.7072 17.8883 16.648 17.2679 17.2684C16.6475 17.8888 15.7067 17.9836 14.0002 17.998" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                   <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                     
              </a>

       );
}


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App({ images }) {

       const totalImages = JSON.parse(images)

       return (
              <>
                     <Swiper
                            pagination={{
                                   type: 'progressbar',
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            style={{
                                   width: "100%",
                                   height: "100%"
                            }}
                     >
                            {
                                   totalImages.length > 1 && (
                                          <div className='absolute z-1 -translate-y-16 w-full py-2 flex justify-center items-center gap-x-2' >
                                                 <PrevButton />
                                                 <NextButton />
                                          </div>
                                   )
                            }


                            {
                                   totalImages.map(i => (
                                          <SwiperSlide style={{
                                                 textAlign: "center",
                                                 fontSize: "18px",
                                                 background: "#444",
                                                 display: "flex",
                                                 justifyContent: "center",
                                                 alignItems: "center",
                                                 position: "relative"
                                          }}>
                                                 <img src={i} alt="" />

                                                 <div className="size-12 p-2 absolute top-0 left-0">
                                                        <FullScreen link={i} />
                                                 </div>

                                          </SwiperSlide>
                                   ))
                            }

                     </Swiper >

              </>
       );
}
