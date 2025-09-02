import { useEffect, useState } from 'react';
import Styles from './LL.module.css';

export default function () {

       const [load, setLoad] = useState(true);

       useEffect(() => {
              setTimeout(() => setLoad(false), 700)
       }, [])

       return (
              <section className={`${!load && "opacity-0 pointer-events-none"} transition-all duration-350 w-screen h-screen flex justify-center items-center bg-tertiary light:bg-light-primary fixed z-99`} >
                     <div className={Styles.dotSpinner} >
                            <div className={Styles.dotSpinner__dot} />
                            <div className={Styles.dotSpinner__dot} />
                            <div className={Styles.dotSpinner__dot} />
                            <div className={Styles.dotSpinner__dot} />
                            <div className={Styles.dotSpinner__dot} />
                            <div className={Styles.dotSpinner__dot} />
                            <div className={Styles.dotSpinner__dot} />
                            <div className={Styles.dotSpinner__dot} />
                     </div>
              </section>
       );
}

