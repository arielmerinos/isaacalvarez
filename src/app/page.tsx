import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <BackgroundGradientAnimation className="z-10">
      <div className="flex flex-col items-center justify-center h-screen bg-transparent z-10">
        <div className="relative">
          <Image
            src="/profile.jpg"
            alt="Logo"
            width={200}
            height={200}
            className="mb-4 rounded-full border-solid border-4 border-white"
          />
          <h1 className="absolute bottom-4 left-6 text-4xl ">🦿</h1>
          <h1 className="absolute top-0 right-6 text-4xl ">🌸</h1>
        </div>
        <h1 className="text-4xl font-bold">Isaac Álvarez Figueroa</h1>
        <Link href="mailto:isaacalvarez51779@gmail.com">
          <div className=" flex cursor-pointer ">
            <EnvelopeIcon className="size-6 text-white" /> send me an email
          </div>
        </Link>
      </div>
        s
      </BackgroundGradientAnimation>
    </>
  );
}
