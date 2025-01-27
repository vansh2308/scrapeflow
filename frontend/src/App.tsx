import { useEffect } from "react";
import { cn } from "./lib/utils";
import HeroDots from "./assets/hero.png"
import { Button } from "./components/ui/button";

export default function App() {

  return (
    <>
    <section className="w-screen h-screen bg-popover-foreground relative  flex-col gap-10 overflow-hidden">

      <div className="absolute top-[63%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-[150%] aspect-square">
        <img src={HeroDots} alt="hero-dots" className="w-screen absolute left-1/2 -translate-x-1/2 blur-3xl opacity-10" />
        <img src={HeroDots} alt="hero-dots" className="w-[70%] absolute left-1/2 -translate-x-1/2 blur-3xl opacity-80" />
        <img src={HeroDots} alt="hero-dots" className="w-[75%] absolute left-1/2 -translate-x-1/2 spinner" />
        <img src={HeroDots} alt="hero-dots" className="w-[62%] absolute left-1/2 -translate-x-1/2 spinner" />

        <div className="flex flex-col items-center -translate-y-[3rem]">
          <h1 className="bruno-ace-regular text-white text-[3rem]">
            SCRAPEFLOW
          </h1>
          <p className="text-xl text-white w-[60%] text-center mt-7"> Enhancing <span className="grad-text">web scraping</span> experience with every workflow </p>
          <div className="flex gap-5 mt-8">
            <Button className="text-popover-foreground font-semibold">Login</Button>
            <Button variant="outline" className=" font-semibold bg-popover-foreground border-2 border-primary text-primary">Signup</Button>
          </div>
        </div>

      </div>
      <div className="absolute w-screen h-[40%] bottom-0 bg-gradient-to-t from-popover-foreground/100 to-popover-foreground/0" />
    </section>


    <section className="w-screen h-screen bg-popover-foreground">

    </section>
    </>
  )
}
