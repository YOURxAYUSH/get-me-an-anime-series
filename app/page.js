import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  
  return (
    <>
      <div className="relative flex flex-col h-[62vh] gap-5 text-white items-center justify-center">
        
        <div className="absolute top-0 left-0 w-full h-full"   style={{ background: 'url(/img2.webp)',backgroundRepeat: 'no-repeat',     backgroundPosition: 'center', backgroundSize: 'cover',}}> </div>

     
        <div className="relative z-10 text-3xl md:text-6xl font-extrabold">Buy Me An Anime Series</div>
        <div className="relative text-center font-semibold text-sm z-10">Got a soft spot for anime? So do I! Help me fund my anime addiction, and let's enjoy some epic shows together. Your contribution can buy me the next series I've been dying to watch. Thanks in advance!</div>
        
        <div className="flex gap-2 relative z-10">
        <Link href='/login'>  <Button buttonName="Start Here" /></Link>
         <Link href='/about'> <Button buttonName="Read More" /></Link> 
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white pt-10 pb-40">
        <div className="text-center text-xl font-bold">Anime Lovers Can Buy Me An Anime Series!</div>
        <div className="flex justify-around flex-col gap-20 md:gap-0 md:flex-row pt-5 ">
          <div className="flex flex-col gap-2 items-center justify-center" >
            <img className="rounded-full " width={88} height={88} src={'/anime-money.gif'} alt={"image"}/>
            <p className="font-semibold">Fuel My Anime Obsession!</p>
            <p>Help me fund my next anime binge-watch marathon!</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center" >
            <img className="rounded-full" width={88} height={88} src={'/steal-money.gif'} alt={"image"}/>
            <p className="font-semibold">Support My Anime Journey!</p>
            <p>Contribute to my quest for the ultimate anime experience!</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center" >
            <img className="rounded-full" width={88} height={88} src={'/watashi-money.gif'} alt={"image"}/>
            <p className="font-semibold">Join My Anime Adventure!</p>
            <p>Be part of my epic quest to discover hidden anime gems!</p>
          </div>
        </div>
      </div>
       < div className="bg-white h-1 opacity-10"></div>
      <div className="text-white pt-10 pb-40">
        <div className="text-2xl font-bold text-center">Learn More About Us &hearts; </div>
          <div className=" md:block hidden border-2 border-black rounded-lg w-fit mx-auto my-5">
           <iframe className="rounded-lg" width="660" height="415" src="https://www.youtube.com/embed/2OihkmY2BPk?autoplay=0&loop=1&rel=0&playlist=2OihkmY2BPk&si=VWoCg3r0CeJY0KZv" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className=" block md:hidden border-2 border-black rounded-lg w-fit mx-auto my-5">
           <iframe className="rounded-lg" width="380" height="400" src="https://www.youtube.com/embed/2OihkmY2BPk?autoplay=0&loop=1&rel=0&playlist=2OihkmY2BPk&si=VWoCg3r0CeJY0KZv" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
      </div>

    </>
  );
}
