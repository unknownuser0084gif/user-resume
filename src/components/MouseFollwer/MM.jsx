import React, { useEffect, useRef , useState } from 'react';

const MouseFollower = () => {
       const followerRef = useRef(null);
       const followerRefSmail = useRef(null);
       const animationFrame = useRef(null);
       const animationFrameSmail = useRef(null);
       const mouseX = useRef(0);
       const mouseY = useRef(0);
       const currentX = useRef(0);
       const currentY = useRef(0);
       const mouseXSmail = useRef(0);
       const mouseYSmail = useRef(0);
       const currentXSmail = useRef(0);
       const currentYSmail = useRef(0);
       const [isClicked, setIsClicked] = useState(false); 


       useEffect(() => {

              const hideFollwer = () => {
                     followerRef.current.style.opacity = 0
                     followerRefSmail.current.style.opacity = 0
              };
              const showFollwer = () => {
                     followerRef.current.style.opacity = 1
                     followerRefSmail.current.style.opacity = 1
              };

              const handleMouseMove = (e) => {
                     mouseX.current = e.clientX;
                     mouseY.current = e.clientY;
                     mouseXSmail.current = e.clientX;
                     mouseYSmail.current = e.clientY;
              };

              const animate = () => {
                     const speed = 0.1; // عدد کمتر = حرکت کندتر و نرم‌تر

                     currentX.current += (mouseX.current - currentX.current) * speed;
                     currentY.current += (mouseY.current - currentY.current) * speed;

                     if (followerRef.current) {
                            // followerRef.current.style.transform = `translate(${currentX.current - 10}px, ${currentY.current - 10}px)`;
                            followerRef.current.style.top = `${currentY.current - 22}px`;
                            followerRef.current.style.left = `${currentX.current - 22}px`;
                     }

                     animationFrame.current = requestAnimationFrame(animate);
              };
              const animateSmail = () => {
                     const speedSmail = 1; // عدد کمتر = حرکت کندتر و نرم‌تر

                     currentXSmail.current += (mouseXSmail.current - currentXSmail.current) * speedSmail;
                     currentYSmail.current += (mouseYSmail.current - currentYSmail.current) * speedSmail;

                     if (followerRefSmail.current) {
                            // followerRefSmail.current.style.transform = `translate(${currentXSmail.current - 10}px, ${currentYSmail.current - 10}px)`;
                            followerRefSmail.current.style.top = `${currentYSmail.current - 4}px`;
                            followerRefSmail.current.style.left = `${currentXSmail.current - 4}px`;
                     }

                     animationFrameSmail.current = requestAnimationFrame(animateSmail);
              };

              window.addEventListener('mousemove', handleMouseMove);
              animationFrame.current = requestAnimationFrame(animate);
              animationFrameSmail.current = requestAnimationFrame(animateSmail);

              const handleMouseDown = () => {
                     setIsClicked(true);
              };

              const handleMouseUp = () => {
                     setIsClicked(false);
              };

              window.addEventListener('mousedown', handleMouseDown);
              window.addEventListener('mouseup', handleMouseUp);

              document.addEventListener("mouseout" , hideFollwer)
              document.addEventListener("mouseover" , showFollwer)

       }, []);
       

       
       const circleSize = isClicked ? 1.2 : 1;
       const circleSizeSmail = isClicked ? 0.7 : 1;
       const circleStyle = {
              position: 'fixed',
              borderRadius: '50%',
              backgroundColor: '#ff8d004d',
              pointerEvents: 'none',
              zIndex: 9999,
              transition : "transform 150ms ease , opacity 200ms ease",
              transform : `scale(${circleSize})`
       };
       const circleStyleSmail = {
              position: 'fixed',
              borderRadius: '50%',
              backgroundColor: '#ff8d009e',
              pointerEvents: 'none',
              zIndex: 9999,
              transition : "transform 150ms ease , opacity 200ms ease",
              transform : `scale(${circleSizeSmail})`
       };

       return (
              <>
                     {/* {console.log("ss")} */}
                     {/* {isClicked ? hideFollwer() :""} */}
                     <div ref={followerRef} className='top-0 size-11 opacity-0 z-10' style={circleStyle}></div>
                     <div ref={followerRefSmail} className='top-0 size-2 opacity-0 z-10' style={circleStyleSmail}></div>
              </>
       );
};

export default MouseFollower;
