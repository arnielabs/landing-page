import {Image} from "@nextui-org/react";

export default function Home() {
  return (
    
    <main className="w-full relative h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] flex items-center justify-center text-center">
        <a className="absolute h-full w-full">
        <img className="lazyload absolute w-full h-full object-cover pointer-events-none entered loaded" src="/bg3.jpeg" alt="Soundframe Image" width="100%"></img>
        </a>
        <div className="flex flex-row justify-between md:flex-row md:justify-between p-5 md:items-center items-center relative w-full h-full pl-4 md:px-8 bg-gradient-to-t from-black/60 to-black/00 md:bg-gradient-to-t">
          <div className="text-left p-10">
          <h2 className="text-white text-[32px] md:text-[72px] leading-none mt-4">Soundframe</h2>
          <h2 className="text-white text-[16x] md:text-[28px] mb-4">Where Music meets Aesthetics</h2>
          {/* <a className="text-[#FF4D06]" href="/live-unboxing">watch keynote</a> */}
          </div>
        </div>
    </main>
    
  );
}
