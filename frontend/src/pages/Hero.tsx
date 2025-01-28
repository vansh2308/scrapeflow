import HeroDots from "./../assets/hero.png"
import { SlMouse } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/Timeline";

export default function Hero() {
    return (
        <>

            <section className="w-screen h-screen bg-popover-foreground relative  flex-col gap-10 overflow-hidden">

                <div className="absolute top-[63%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-[150%] aspect-square">
                    <img src={HeroDots} alt="hero-dots" className="w-[90%] pointer-events-none absolute  left-1/2 -translate-x-1/2 blur-3xl opacity-20 animate-flicker" />
                    <img src={HeroDots} alt="hero-dots" className="w-[70%] pointer-events-none absolute  left-1/2 -translate-x-1/2 blur-3xl opacity-80 animate-flicker" />
                    <img src={HeroDots} alt="hero-dots" className="w-[75%] pointer-events-none absolute left-1/2 -translate-x-1/2" />
                    <img src={HeroDots} alt="hero-dots" className="w-[62%] pointer-events-none absolute left-1/2 -translate-x-1/2" />

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

            <section className="w-screen h-screen relative bg-popover-foreground py-28">
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

            <section className="w-screen h-screen bg-foreground">

            </section>

        </>




    )
}