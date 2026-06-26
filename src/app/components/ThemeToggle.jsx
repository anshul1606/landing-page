"use client";
import { useTheme } from "next-themes";
import { Moon, Sun} from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
    const{ theme, setTheme} = useTheme();
    const [mounted, setMounted]= useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if(!mounted) return null;
    return(
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className= "w-10 h-10 flex justify-center items-center rounded-full bg-white/5  border border-white/10  hover:bg-gray-500 transition-all duration-300">
        {theme === "dark"? <Sun size={25} />:
            <Moon size={25}/>
        }
        </button>
    );

}