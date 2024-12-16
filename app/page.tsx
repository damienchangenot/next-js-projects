"use client";

import { Particle } from "@/components/particles";
import TrafficLight from "@/components/TrafficLight";
export default function Home() {
  return (
    <main >
      <section className="items-center flex flex-wrap gap-4 "  style={{
            width: "100%",
            height:"100%",
            minHeight: "100vh",
            position: "relative",
          
            }} >
            <Particle></Particle>  
            <div className="flex-1 z-10 relative bg-red-400">
                <h1>Bonjour,</h1>

            </div>
            <div className="flex-1  z-10 relative bg-orange-50">
                <h2>toofil</h2>
            </div>
      </section>
      <style jsx global>{`
        #tsparticles {
          width: 100% !important;
          height: 100% !important;
          position: absolute !important;
        }
      `}</style>
  
    </main>
  );
}
