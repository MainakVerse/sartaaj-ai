import Output from "@/components/home/Output";
import UserInput from "@/components/home/UserInput";
import Footer from "@/components/home/Footer";
import Slider from "@/components/home/Slider";
import { BioProvider } from "@/context/BioContext";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "SARTAAJ AI",
  description:
    "Generate your perfect business and professional headers and bio with the help of AI. Just add a brief description and let our AI craft a bio that truly represents you.",
};



export default function Home() {

  
  return (
    <>
    <main className="relative grid  grid-cols-1 slg:grid-cols-2 gap-12  px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:p-24">
      <div className="col-span-full group w-full flx flex-col items-center justify-center space-y-2 sm:space-y-4 mb-4 text-center">
        
        <h1 className=" text-orange-300 font-extrabold text-4xl md:text-5xl slg:text-6xl lg:text-7xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4">
          GENERATE YOUR HEADER<br/><em><u className="text-white">With Sartaaj</u></em>
        </h1>
        <p className="text-green-500 sm:text-base md:text-lg">
          Just enter a brief description & we&apos;ll generate a standout bio customized for you.
        </p>
      </div>

      <BioProvider>
        <UserInput />
        <Output />
      </BioProvider>

      <div>
      
      </div>
      
    </main>
    <Slider />
    <Footer />
    </>
  );
}
