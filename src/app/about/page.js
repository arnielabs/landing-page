import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-start justify-start md:p-20 p-7 max-w-screen-xl mx-auto ">
      <h2 className="text-6xl p-2 py-10 text-foreground"> About Us </h2>
      <p className="mb-6 text-lg font-normal text-foreground p-2">
        Here at Arnie Labs, we are dedicated to creating products crafted
        specifically for music enthusiasts and audiophiles who demand the best
        in sound and aethetics.
      </p>
      <p className="mb-6 text-lg font-normal text-foreground p-2">
        Our journey began with a simple vision: to enhance the way people listen
        to music. Combining our passion for music with cutting-edge technology,
        we design products that let you feel every beat, hear every note, and
        immerse yourself in the music you love.
      </p>

      <h3 className="text-5xl p-2 py-10 text-foreground">Meet the Team</h3>
      <div className="gap-6 grid grid-cols-2 w-full p-2 my-10">
        <div className="col-span-2 md:col-span-1 flex flex-col items-start justify-center text-left">
          <h5 className="text-xl p-2 font-bold text-foreground">Rick Astley</h5>
          <p className="mb-6 text-lg font-normal text-foreground p-4"> 
            Rick Astley is an English singer, songwriter, and radio personality, best known for his 1987 global hit “Never Gonna Give You Up.” Renowned for his deep, soulful voice and timeless charm, Astley became a pop icon of the 1980s. His enduring popularity has been bolstered by internet culture, making him a beloved figure across generations.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <img
            className="lazyload w-full h-full object-cover pointer-events-none entered loaded"
            src="/rick.jpeg"
            alt="Soundframe Image"
            width="100%"
          ></img>
        </div>
      </div>
      <div className="w-full">
      <hr class="h-px my-8 bg-default-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <div className="gap-6 grid grid-cols-2 w-full p-2 my-10">
      <div className="col-span-2 md:col-span-1 flex-col flex items-start justify-center text-left">
        <h5 className="text-xl p-2 py-10 font-bold text-foreground">Rick Astley</h5>
          <p className="mb-6 text-lg font-normal text-foreground p-2"> 
            Rick Astley is an English singer, songwriter, and radio personality, best known for his 1987 global hit “Never Gonna Give You Up.” Renowned for his deep, soulful voice and timeless charm, Astley became a pop icon of the 1980s. His enduring popularity has been bolstered by internet culture, making him a beloved figure across generations.
          </p>
        </div>

        <div className="col-span-2 md:col-span-1">
          <img
            className="lazyload w-full h-full object-cover pointer-events-none entered loaded"
            src="/rick2.jpeg"
            alt="Soundframe Image"
            width="100%"
          ></img>
        </div>


      </div>
    </main>
  );
}
