import { React, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';


function FullScreen({ link }) {
       return (
              <a
                     href={link}
                     target="_blank"
                     rel="noreferrer"
                     aria-label="مشاهده تصویر در اندازه کامل"
                     className="size-7 flex justify-center items-center rounded-full bg-white/85 text-neutral-800 hover:bg-white transition-colors duration-200"
              >
                     <OpenInFullRoundedIcon fontSize="small" style={{ fontSize: 15 }} />
              </a>
       );
}


export default function SliderPortfolio({ images }) {

       const totalImages = images
       const hasMultiple = totalImages.length > 1
       const swiperRef = useRef(null);

       return (
              <div className="relative w-full h-full">
                     <Swiper
                            onSwiper={(instance) => { swiperRef.current = instance; }}
                            pagination={hasMultiple ? { clickable: true, el: '.portfolio-pagination' } : false}
                            modules={[Pagination, Navigation]}
                            className="portfolio-swiper w-full h-full"
                     >
                            {
                                   totalImages.map((img, i) => (
                                          <SwiperSlide
                                                 key={img + i}
                                                 className="!flex justify-center items-center bg-neutral-800 relative"
                                          >
                                                 <img className="w-full h-full object-cover" src={img} alt="" />

                                                 <div className="absolute top-3 left-3">
                                                        <FullScreen link={img} />
                                                 </div>
                                          </SwiperSlide>
                                   ))
                            }
                     </Swiper>

                     {
                            hasMultiple && (
                                   <>
                                          <div className="absolute z-10 bottom-3 right-3 flex gap-1.5">
                                                 <button
                                                        type="button"
                                                        aria-label="تصویر قبلی"
                                                        onClick={() => swiperRef.current?.slidePrev()}
                                                        className="size-7 flex justify-center items-center rounded-full bg-white/85 text-neutral-800 hover:bg-white transition-colors duration-200"
                                                 >
                                                        <ChevronRightRoundedIcon fontSize="small" />
                                                 </button>
                                                 <button
                                                        type="button"
                                                        aria-label="تصویر بعدی"
                                                        onClick={() => swiperRef.current?.slideNext()}
                                                        className="size-7 flex justify-center items-center rounded-full bg-white/85 text-neutral-800 hover:bg-white transition-colors duration-200"
                                                 >
                                                        <ChevronLeftRoundedIcon fontSize="small" />
                                                 </button>
                                          </div>
                                          <div className="portfolio-pagination absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5" />
                                   </>
                            )
                     }
              </div>
       );
}
