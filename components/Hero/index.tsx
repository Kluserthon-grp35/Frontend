import Button from "@/components/Button";
import Image from "next/image";

export default function Hero(){
    return (
        <div className=" h-[80vh] px-20 flex items-center justify-between">
            <div className="w-1/2">
                <h1 className=" text-5xl sm:text-[38px] md:text-[48px] text-text w-[438px] font-bold">
                    Effortlessly Manage Payments for Your Business
                </h1>
                <p className="leading-[177.54%] mt-[30px] text-light text-lg w-full mb-[50px]">
                    Make a business site, track installment, issue solicitations, record deals, get monetary reports and deal with all business procedure on the PayZen application.
                </p>
                <Button size={'sm'} variant={"contained"}>Get Started</Button>
            </div>
            <HeroImage/>
        </div>
    )
}


export function HeroImage(){
    return(
        <div className="relative w-1/2 h-full">
                <div className="bg-plight h-[160px]  rounded-[10px] w-[165px] absolute -top-0 left-[50px] "></div>
                <div className="bg-pdark h-[160px]   rounded-[10px] w-[165px] absolute -bottom-0 right-[50px] "></div>

                <div className="  w-[415px] h-[461px] overflow-hidden absolute flex inset-[0] justify-center m-auto object-cover rounded-[20px]">
                    <Image
                        src="/img/hero.jpg"
                        alt="rectangleFourteen"
                        className="object-cover"
                        // width={600}
                        // height={1000}
                        fill={true}
                    />
                </div>
        </div>
    )
}