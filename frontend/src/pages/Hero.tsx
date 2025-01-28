import HeroDots from "./../assets/hero.png"
import { SlMouse } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/Timeline";
import { LampDemo } from "@/components/Lamp";
import { CardSpotlight } from "@/components/CardSpotlight";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";



export default function Hero() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const biggerCircleRef = useRef<HTMLImageElement>(null)
    const smallerCircleRef = useRef<HTMLImageElement>(null)
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        // WIP: Remove possibly null error 
        if(biggerCircleRef.current && smallerCircleRef.current){
            biggerCircleRef.current.style.transform = `translateX(-50%) rotate(${scrollPosition/10}deg)`
            smallerCircleRef.current.style.transform = `translateX(-50%) rotate(-${scrollPosition/10}deg)`
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

            <section className="w-screen h-screen bg-popover-foreground relative  flex-col gap-10 overflow-hidden">

                <div className="absolute top-[63%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-[150%] aspect-square">
                    <img src={HeroDots} alt="hero-dots" className="w-[90%] pointer-events-none absolute  left-1/2 -translate-x-1/2 blur-3xl opacity-20 animate-flicker" />
                    <img src={HeroDots} alt="hero-dots" className="w-[70%] pointer-events-none absolute  left-1/2 -translate-x-1/2 blur-3xl opacity-80 animate-flicker" />

                    <img
                        src={HeroDots}
                        alt="hero-dots"
                        className={cn("w-[75%] pointer-events-none absolute left-1/2 -translate-x-1/2", `rotate-[${scrollPosition}rad]`)}
                        ref={biggerCircleRef}
                    />

                    <img
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
                            <Button className="text-popover-foreground font-semibold">Login</Button>
                            <Button variant="outline" className=" font-semibold bg-popover-foreground border-2 border-primary text-primary hover:bg-primary hover:text-foreground">Signup</Button>
                        </div>
                    </div>

                </div>
                <div className="absolute w-screen h-[40%] bottom-0 bg-gradient-to-t from-popover-foreground/100 to-popover-foreground/0 z-10 pointer-events-none" />
                <SlMouse className="absolute bottom-10 text-secondary left-1/2 -translate-x-1/2 text-2xl animate-bounce z-10" />
            </section>

            <section className="w-screen min-h-max relative bg-popover-foreground pt-28">
                <Timeline data={[
                    {
                        title: "Still writing python scripts to scrape the web?",
                        content: "Gravida justo curabitur congue massa elementum cras convallis luctus. Cursus nibh adipiscing faucibus porta praesent praesent faucibus laoreet.Himenaeos mollis potenti penatibus dictumst parturient himenaeos congue donec. Ex sollicitudin commodo dui sed aliquam in eget senectus posuere. Id platea facilisi amet natoque vitae scelerisque elementum rhoncus. Rutrum primis nunc eros, fusce facilisis arcu curae etiam. Maecenas cras auctor lacinia sem torquent; massa nisl. Fusce varius nunc, aenean ligula arcu in. Mattis egestas dapibus purus tellus sapien mauris condimentum ipsum ligula. Quis ante lectus malesuada lobortis parturient montes magna. Faucibus ridiculus class aliquet lorem efficitur dis. Tellus malesuada primis et venenatis eros vehicula tortor. Cras posuere dignissim quam fusce torquent mauris. Velit iaculis inceptos arcu varius potenti netus. Senectus quisque porta finibus cras quisque tristique eros? Mus torquent sapien at massa nunc; vel rutrum. Arcu neque semper pretium pulvinar per libero. Magnis finibus ut pharetra parturient id nisi."
                    },
                    {
                        title: 'Tired of Redundant workflows?',
                        content: "Convallis ad condimentum quam aliquam efficitur semper. Rutrum feugiat orci arcu curabitur, porttitor rutrum maximus. Non euismod maximus nec; ut nascetur nisi. Facilisi semper ullamcorper dapibus mus egestas vitae. At nunc nisi lacus aenean praesent erat ac dignissim. Placerat vivamus per magna rhoncus dis dignissim ullamcorper laoreet. Arcu massa erat praesent netus cras integer ex. Enim natoque volutpat tempus volutpat parturient malesuada fames gravida. Vel rhoncus nisi diam sociosqu nisl adipiscing purus. Ridiculus montes nullam arcu penatibus elit inceptos porttitor. Imperdiet mattis mattis eleifend penatibus porta netus. Conubia torquent magnis lobortis eget laoreet lorem at taciti. Aenean eros nullam justo turpis sodales malesuada massa augue massa. Neque facilisi sollicitudin penatibus ipsum praesent metus semper. Gravida fames augue sapien varius etiam vestibulum at fusce a. Lobortis maximus parturient eget orci accumsan. Habitasse congue tempor vivamus quis nec"
                    },
                ]} />
            </section>

            <section className="w-screen bg-foreground min-h-fit">
                <LampDemo />
                <div className="w-[80vw] flex justify-between items-stretch h-fit relative left-1/2 -translate-x-1/2 -mt-[12rem] pb-28 gap-10">

                    <CardSpotlight className="w-1/3 flex flex-col justify-between gap-10">
                        <div>

                            <h2 className="text-[1.2rem] text-primary font-semibold">Basic</h2>
                            <p className="text-muted-foreground mt-4">
                                <span className="text-5xl font-semibold text-muted">$0 </span>/ month
                            </p>
                            <div className="text-muted-foreground text-sm mt-6">The perfect plan if you're just getting started with our product.</div>
                            <ul className="text-secondary text-sm flex flex-col gap-4 mt-6">
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited Workflows  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited runs  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Analytics  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> 3 AI Credits  </li>
                            </ul>
                        </div>

                        <Button variant="default" className="w-full">Get Started</Button>
                    </CardSpotlight>


                    <CardSpotlight className="w-1/3 flex flex-col justify-between gap-10">
                        <div>
                            <h2 className="text-[1.2rem] text-primary font-semibold">Premium</h2>
                            <p className="text-muted-foreground mt-4">
                                <span className="text-5xl font-semibold text-muted">$29 </span>/ month
                            </p>
                            <div className="text-muted-foreground text-sm mt-6">The perfect plan if you're just getting started with our product.</div>
                            <ul className="text-secondary text-sm flex flex-col gap-4 mt-6">
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited Workflows  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited runs  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Analytics  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> 3 AI Credits  </li>
                            </ul>
                        </div>

                        <Button variant="default" className="w-full">Get Started</Button>
                    </CardSpotlight>

                    <CardSpotlight className="w-1/3 flex flex-col justify-between gap-10">
                        <div>

                            <h2 className="text-[1.2rem] text-primary font-semibold">Enterprise</h2>
                            <p className="text-muted-foreground mt-4">
                                <span className="text-5xl font-semibold text-muted">$89 </span>/ month
                            </p>
                            <div className="text-muted-foreground text-sm mt-6">Dedicated support and infrastructure for your company.</div>
                            <ul className="text-secondary text-sm flex flex-col gap-4 mt-6">
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited Workflows  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited runs  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Analytics  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> 3 AI Credits  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Unlimited runs  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> Analytics  </li>
                                <li className="flex items-center gap-3"> <FaCheck className="text-primary" /> 3 AI Credits  </li>
                            </ul>
                        </div>

                        <Button variant="default" className="w-full" onClick={() => console.log("Hare krisna")}>Get Started</Button>
                    </CardSpotlight>


                </div>

            </section>


        </>




    )
}