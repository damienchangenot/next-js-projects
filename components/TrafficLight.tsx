"use client";

import { useEffect, useState } from "react"
import { Button } from "./ui/button";

type Light = "red" | "yellow" | "green" | "";

export default function TrafficLight() {
    const [light, setLight] = useState<Light>("red");
    const [isPanne, setIsPanne] = useState<boolean>(false);
    
    useEffect( () => {

        let timer : NodeJS.Timeout;

        if(isPanne){
            timer = setInterval(() => {
                setLight(prevLight => (prevLight === "yellow" ? "" : "yellow"));
            },500)
        }else { 
            timer = setTimeout(() => {
                if( light === "red"){
                    setLight("green");
                }else if (light === "yellow"){
                    setLight("red");
                }else if( light === "green" || light === ""){
                    setLight("yellow");
                }

            }, getLightDuration(light) * 1000);
        }
        return () => {
            clearTimeout(timer);
            clearInterval(timer);
        };
    
    }, [light, isPanne]);

    const getLightDuration = (currentLight: Light) => {
        if(currentLight === "red"){
            return 7;
        }else if(currentLight === "yellow" || currentLight === "green"){
            return 5;
        }
        return 0;
    }

    const handlePanne = () => {
        setIsPanne(prev => !prev);
        if (isPanne) {
            setLight("red");
        }
    };
  return (
    <main> 
        <div className="flex flex-col md:flex-row items-center justify-around p-16">
            <div className="w-full text-center m-10">
                <p>Projet réalise avec NextJS et Tailwind CSS</p>
                <p>Le feu reste 7 seconde au feu rouge puis passe 5 seconde au feu vert et orange ou clignote orange si on clique sur le bouton en panne</p>
            </div>
            <div className="flex flex-col gap-2 border-2 border-yellow-500  bg-gradient-to-b from-yellow-600 to-yellow-700 p-10 rounded-xl">
                <div className="border border-yellow-500 rounded-lg p-4">
                    <div className={`w-28 h-28 ${light === "red" ? "bg-red-500 shadow-2xl shadow-red-500 border-2" : "bg-gray-300"} rounded-full`}></div>
                </div>
                <div className="border border-yellow-500 rounded-lg p-4">
                    <div className={`w-28 h-28 ${light === "yellow" ? "bg-yellow-500 shadow-2xl shadow-yellow-500 border-2" : "bg-gray-300" } rounded-full`}></div>
                </div>
                <div className="border border-yellow-500 rounded-lg p-4">
                    <div className={`w-28 h-28 ${light === "green" ? "bg-green-500 shadow-2xl shadow-green-500 border-2" : "bg-gray-300" } rounded-full`}></div>  
                </div>
            </div>
            <div className="w-full flex justify-center">
                <Button onClick={handlePanne} className={` ${isPanne ?  "bg-blue-500 hover:bg-blue-700 ": "bg-red-500 hover:bg-red-700"} text-neutral-50`}>{isPanne ? 'Fonctionnement normal' : 'Mettre en Panne'}</Button>
            </div>
        </div>
    </main>

  )
}
