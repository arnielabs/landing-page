"use client";
import { Image } from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, useGLTF, OrbitControls } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/ipx-comp.glb", true);
  return (
    <>
      <primitive object={scene} scale={1} />
    </>
  );
};

export default function Home() {
  return (
    <main>
      <div className="w-full relative h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] flex items-center justify-center text-center">
        <a className="absolute h-full w-full bg-gradient-to-t from-black/60 to-black/00 md:bg-gradient-to-t">
          <img
            className="lazyload absolute w-full h-full object-cover pointer-events-none entered loaded"
            src="/bg3.jpeg"
            alt="Soundframe Image"
            width="100%"
          ></img>
        </a>
        {/* <div className="flex flex-row justify-between md:flex-row md:justify-between p-5 md:items-center items-center relative w-full h-full pl-4 md:px-8">
          <div className="max-width-xl text-left p-10">
          <h2 className="text-white text-[32px] md:text-[72px] leading-none mt-4">Soundframe</h2>
          <h2 className="text-white text-[16x] md:text-[28px] mb-4">Where Music meets Aesthetics</h2>
          </div>
        </div> */}
      </div>
      <div className="w-full relative lg:h-[calc(100vh-6rem)] flex items-center justify-center text-center">
        
        <div className="max-w-screen-2xl mx-auto gap-6 grid grid-cols-2 w-full h-full p-2 my-10">
          
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center">
            <h5 className="text-5xl md:text-7xl font-normal text-foreground">
              <p className="text-base md:text-3xl text-foreground font-extralight">Introducing.</p>Soundframe
            </h5>
            <p className="m-3 md:m-6 text-base md:text-2xl font-extralight text-foreground p-2">
              Where Music meets Aesthetics
            </p>
          </div>
          
          <div className="sf-model col-span-2 lg:col-span-1 lg:h-full h-[calc(100vh-10rem)] w-full">
            <Canvas shadows camera={{ position: [-3, 0, 0], fov: 32 }}>
              <ambientLight intensity={1} />

              <Suspense fallback={null}>
                <Model />
                <Environment preset="city" />
              </Suspense>
              <OrbitControls autoRotate enableZoom={false}/>
            </Canvas>
          </div>
        </div>
      
      </div>
    </main>
  );
}
