import Image from "next/image";

export default function About() {
  return (
    
    <main className="flex flex-col items-start justify-start p-20 max-w-screen-xl mx-auto ">
      <h2 className="text-6xl p-2 py-10 text-foreground"> About Us </h2>
      <p className="mb-6 text-lg font-normal text-foreground p-2">
        Here at Arnie Labs, we are dedicated to creating products crafted specifically for music enthusiasts and audiophiles who demand the best in sound and aethetics.
      </p>
      <p className="mb-6 text-lg font-normal text-foreground p-2">
      Our journey began with a simple vision: to enhance the way people listen to music. Combining our passion for music with cutting-edge technology, we design products that let you feel every beat, hear every note, and immerse yourself in the music you love.
      </p>

    </main>
  );
}
