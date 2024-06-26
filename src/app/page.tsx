import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function Home() {
  return (
    <>
      <BackgroundGradientAnimation className="z-0 absolute inset-0" />
      <div className="flex flex-col items-center justify-center h-screen bg-transparent z-10 text-wrap relative">
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
        <h1 className="text-center text-4xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 ">
          Isaac Álvarez Figueroa
        </h1>
        <h3 className="text-center text-sm mb-4">
          Makeup artist & content creator
        </h3>
        <Link
          href="mailto:isaacalvarez51779@gmail.com"
          className="border-solid border-2 rounded-lg mb-4 "
        >
          <div className=" flex cursor-pointer ">
            <p className="m-2">send me an email</p>
          </div>
        </Link>
        <div className="flex">
          <Link
            href="https://www.instagram.com/sarcomitas_/"
            className=" text-white hover:opacity-50 mr-2"
          >
            <div className="flex cursor-pointer">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd 7.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </Link>

          <Link
            href="https://wa.me/525619847656/"
            className=" text-white hover:opacity-50"
          >
            <div className="flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 -1 19 19"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <ParallaxScroll className="bg-white" images={[
          "https://scontent.cdninstagram.com/v/t39.30808-6/438828670_18275142604205195_5793143861578707658_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=lMyZZlBbyI8Q7kNvgGLmBa1&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM1NjE5NzY3OTE4MzY1OTI3NA%3D%3D.2-ccb7-5&oh=00_AfBljxaKctKtRlwrZQW2T_Wx2ms6GX-w0HbAvs2tViB9BA&oe=66343282&_nc_sid=10d13b", 
          "https://scontent.cdninstagram.com/v/t39.30808-6/432228113_18269623468205195_5650633456084393496_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44Mjh4ODI4LnNkci5mMzA4MDgifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=gPbALSlc18cQ7kNvgGLhyPn&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMyMTAzNDA2NTk3MTYxNzMwMQ%3D%3D.2-ccb7-5&oh=00_AfBipZFD6dQRODXO08YkyzsC2EMKAhsu-z4SbBTKbozk8w&oe=66322E03&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/432226419_18269623105205195_702283881497263027_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44Mjh4ODI4LnNkci5mMzA4MDgifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=_ltr1UjqP18Q7kNvgFi7GKF&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMyMTAzMDM5MDU0NTA5ODIwMg%3D%3D.2-ccb7-5&oh=00_AfCINjseUm2LpzQNrDLVwj3-moZkN2bD03lyV6MfA4IFpg&oe=663223A8&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/428507626_18267221728205195_311344268946994936_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=WiVVqTKbgbQQ7kNvgGZgDMY&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwNTY2NTU4MzIyMzAwOTk1MQ%3D%3D.2-ccb7-5&oh=00_AfD0Phzx3VtkL8PZTl-pDlVJe0xnO-o0r3ZjgxqZraHyVQ&oe=66341464&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/426613044_18266077804205195_5382036850146939296_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44Mjh4ODI4LnNkci5mMzA4MDgifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=l86LLAaCtSkQ7kNvgGVezD9&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI5ODU4ODQ3NzE2NjU2NjY2Mg%3D%3D.2-ccb7-5&oh=00_AfB4ZRt9YyP4BdFYVpKK2B71QF0XbjS3HnOBiupGo8NfBQ&oe=663217E4&_nc_sid=10d13b"]}>
          
        </ParallaxScroll>
      </div>
    </>
  );
}
