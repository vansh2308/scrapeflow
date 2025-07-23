"use client";

import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa6";
import { SlMouse } from "react-icons/sl";
import { cn } from "@/lib/utils";
import HeroDots from "@/assets/hero.png"
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import { Timeline } from "./_components/Timeline";
import { LampDemo } from "./_components/Lamp";
import { CardSpotlight } from "./_components/card-spotlight";
import Link from "next/link";




export default function HomeLandingPage() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const biggerCircleRef = useRef<HTMLImageElement>(null)
    const smallerCircleRef = useRef<HTMLImageElement>(null)
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        // WIP: Remove possibly null error 
        if (biggerCircleRef.current && smallerCircleRef.current) {
            biggerCircleRef.current.style.transform = `translateX(-50%) rotate(${scrollPosition / 10}deg)`
            smallerCircleRef.current.style.transform = `translateX(-50%) rotate(-${scrollPosition / 10}deg)`
        }
        console.log(scrollPosition)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [scrollPosition])

    return (
        <>

            <section className="dark w-screen h-screen bg-[color:hsl(240,10%,3.9%)] relative  flex-col gap-10 overflow-hidden">

                <div className="absolute top-[63%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-[150%] aspect-square">
                    <Image src={HeroDots} alt="hero-dots" className="w-[90%] pointer-events-none absolute  left-1/2 -translate-x-1/2 blur-3xl opacity-20 animate-flicker" />
                    <Image src={HeroDots} alt="hero-dots" className="w-[70%] pointer-events-none absolute  left-1/2 -translate-x-1/2 blur-3xl opacity-80 animate-flicker" />

                    <Image
                        src={HeroDots}
                        alt="hero-dots"
                        className={cn("w-[75%] pointer-events-none absolute left-1/2 -translate-x-1/2", `rotate-[${scrollPosition}rad]`)}
                        ref={biggerCircleRef}
                    />

                    <Image
                        src={HeroDots}
                        alt="hero-dots"
                        className={cn("w-[62%] pointer-events-none absolute left-1/2 -translate-x-1/2", `rotate-[${scrollPosition}rad]`)}
                        ref={smallerCircleRef}
                    />

                    {/* <img src={HeroDots} alt="hero-dots" className="w-[62%] pointer-events-none absolute left-1/2 -translate-x-1/2" /> */}

                    <div className="flex flex-col items-center ">
                        <h1 className="bruno-ace-regular text-white text-[3rem]">
                            SCRAPEFLOW
                        </h1>
                        <p className="text-xl text-white w-[60%] text-center mt-7"> Enhancing <span className="grad-text">web scraping</span> experience with every workflow </p>
                        <div className="flex gap-5 mt-8">
                        <Link href={"/sign-in"}>
                            <Button className="text-popover-foreground font-semibold relative z-10">Login</Button>
                        </Link>
                        <Link href={"/sign-up"}>
                            <Button variant="outline" className=" font-semibold bg-popover-foreground border-2 border-primary text-primary hover:bg-primary hover:text-foreground">Signup</Button>
                        </Link>
                        </div>
                    </div>

                </div>
                <div className="absolute w-screen h-[40%] bottom-0 bg-gradient-to-t from-popover-foreground/100 to-popover-foreground/0 z-10 pointer-events-none" />
                <SlMouse className="absolute bottom-10 text-secondary left-1/2 -translate-x-1/2 text-2xl animate-bounce z-10" />
            </section>

            <section className="dark w-screen min-h-max relative bg-[color:hsl(240,10%,3.9%)] pt-28">
                <Timeline data={[
                    {
                        title: "Still writing python scripts to scrape the web?",
                        content: "Create powerful workflows with intuitive tools and actions, simplifying complex scraping tasks."
                    },
                    {
                        title: "Scrape with Precision",
                        content: "Extract data efficiently from any web page using advanced tools, including AI-powered data extraction.",
                    }, 
                    {
                        title: "Automate and Optimize",
                        content: "Schedule workflows, monitor execution stats, and optimize processes for maximum efficiency."
                    }, 
                    {
                        title: "Deliver Anywhere",
                        content: "Send your scraped data directly to APIs, webhooks, or your preferred storage seamlessly."
                    }
                ]} />
            </section>

            <section className="dark w-screen bg-[color:hsl(240,10%,3.9%)] min-h-max">
                <LampDemo />
                <div className="w-[80vw] flex justify-between items-stretch h-fit relative left-1/2 -translate-x-1/2 -mt-[12rem] pb-28 gap-10">

                    <CardSpotlight className="w-1/3 flex flex-col justify-between gap-10">
                        <div className="relative">

                            <h2 className="text-[1.2rem] text-primary font-semibold">Basic</h2>
                            <p className="text-muted-foreground mt-4">
                                <span className="text-5xl font-semibold text-white">$0 </span>
                            </p>
                            <div className="text-white text-sm mt-6">No credit card required. Start with 200 free credits.</div>
                            <ul className="text-white text-sm flex flex-col gap-4 mt-6">
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited Workflows  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited runs  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Analytics  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> 200 Free Beginner Credits  </li>
                            </ul>
                        </div>

                        <Button
                            variant="default"
                            className="w-full relative"
                        >Get Started</Button>
                    </CardSpotlight>


                    <CardSpotlight className="w-1/3 flex flex-col justify-between gap-10">
                        <div className="relative">
                            <h2 className="text-[1.2rem] text-primary font-semibold">Premium</h2>
                            <p className="text-white mt-4">
                                <span className="text-5xl font-semibold text-white">$39.99 </span>
                            </p>
                            <div className="text-white text-sm mt-6">The perfect plan if you are just getting started with our product.</div>
                            <ul className="text-white text-sm flex flex-col gap-4 mt-6">
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited Workflows  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited runs  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Analytics  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> 2000 Credits  </li>
                            </ul>
                        </div>

                        <Button variant="default" className="w-full relative">Get Started</Button>
                    </CardSpotlight>

                    <CardSpotlight className="w-1/3 flex flex-col justify-between gap-10">
                        <div className="relative">

                            <h2 className="text-[1.2rem] text-primary font-semibold">Enterprise</h2>
                            <p className="text-white mt-4">
                                <span className="text-5xl font-semibold text-white">$69.99 </span>
                            </p>
                            <div className="text-white text-sm mt-6">Dedicated support and infrastructure for your company.</div>
                            <ul className="text-white text-sm flex flex-col gap-4 mt-6">
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited Workflows  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited runs  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Analytics  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> 5000 AI Credits  </li>    
                            </ul>
                        </div>

                        <Button variant="default" className=" mt-20 relative w-full" onClick={() => console.log("Hare krisna")}>Get Started</Button>
                    </CardSpotlight>


                </div>

            </section>


        </>




    )
}