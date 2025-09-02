import { useEffect, useRef, useState } from 'react'

export default function useThem() {
       
       const [theme , setTheme] = useState(false);
       const defaultThem = localStorage.getItem("theme");
       const isFirstUpdate = useRef(false);

       // Mounting
       useEffect(() => {
              if(defaultThem && defaultThem === "light"){
                     document.body.classList.add("light");
                     setTheme(true);
              }
       } , []);
       // Updating
       useEffect(() => {
              if (!isFirstUpdate.current) {
                     isFirstUpdate.current = true;
                     return;
              }
              if(theme){
                     document.body.classList.add("light");
                     localStorage.setItem("theme" , "light")
              }else{
                     localStorage.setItem("theme" , "dark");
                     document.body.classList.remove("light");
              }
       } , [theme])

       return [theme , setTheme];
       
}
