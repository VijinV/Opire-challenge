import { useEffect, useState } from "react";
import ProfileCard from "./component/card";
import { sampleProfile } from "./data";




export default function App() {
    const [isDarkMode, setIsDarkMode ] = useState(false);
    useEffect(()=>{
        const html = document.documentElement;
        isDarkMode ? html.classList.add('dark') : html.classList.remove('dark');
    },[isDarkMode])

    return (
      <div className="h-screen w-screen grid place-content-center dark:bg-neutral-950 bg-neutral-50">
        <div className="absolute top-10 right-10">
            <button className="dark:bg-white bg-black" onClick={()=>setIsDarkMode(!isDarkMode)}>
                Change to Dark
            </button>

        </div>
        <ProfileCard {...sampleProfile}/>
        {/* <DevCard /> */}

      </div>
    );
  }
