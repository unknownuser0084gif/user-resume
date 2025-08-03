import { useState , memo } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';


const TransitionsModal = memo(({ timeout, parentButtonClassName = "", children }) => {
       const [open, setOpen] = useState(false);
       const handleOpen = () => setOpen(true);
       const handleClose = () => setOpen(false);

       return (
              <div>
                     <div className={parentButtonClassName} onClick={handleOpen}>
                            {children[0]}
                     </div>
                     <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            slots={{ backdrop: Backdrop }}
                            slotProps={{
                                   backdrop: {
                                          timeout: 200

                                   },
                            }}
                            sx={{ transition: "opacity 1000ms , background-color 1000ms !important", backdropFilter: "blur(4px)" }}
                     // sx={{transitionDuration: "ease-in"}}
                     >
                            <Fade in={open} timeout={200}>
                                   <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !outline-none text-white font-morabba">
                                          <div className='relative'>
                                                 <div className='absolute right-0 p-2' onClick={handleClose}>
                                                        <HighlightOffRoundedIcon />
                                                 </div>
                                          </div>
                                          <div className="w-[calc(95vw)] md:w-[calc(70vw)] xl:w-[calc(50vw)] max-w-[800px] max-h-[80vh] overflow-y-auto scrollable bg-secondary rounded-2xl px-8 py-8">
                                                 {children[1]}
                                          </div>

                                   </div>
                            </Fade>
                     </Modal>
              </div>
       );
})
export default TransitionsModal