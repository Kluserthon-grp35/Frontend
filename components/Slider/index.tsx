/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";


export default function Slider(){
    return (
        <div className="bg-white flex flex-col items-center justify-start mb-4 rounded-[30px] w-full">
            <div className="bg-cover bg-no-repeat flex flex-col h-[450px] items-center justify-center p-8 sm:px-5 rounded-[30px] w-full">
                <div className="flex items-start gap-10 justify-start w-full">
                    <div className="flex flex-col gap-[11px] items-center justify-start w-2 mt-10">
                        <div className="bg-blue-900 h-[66px] rounded-[3px] w-full"></div>
                        <div className="bg-blue-100 h-3 rounded-[3px] w-full"></div>
                    </div>
                    <Image
                        className=" object-cover rounded-[20px]"
                        src="/img/hero.jpg"
                        alt="rectangleTwentySix"
                        width={511}
                        height={411}
                    />
                    <div className="flex flex-col items-start justify-start mt-[73px] w-[48%] ">
                        <h2 className=" text-[28px] text-gray-900 text-justify mb-8">
                            “Thany you PayZen”
                        </h2>
                        <p className="leading-[172.27%] text-gray-900 text-justify text-lg w-full mb-8">
                            PayZen transformed the way I manage payments. It's intuitive and saved me valuable time.
                        </p>
                        <div className="flex items-center justify-start  ">
                            <div className="bg-gray-900 h-px w-[12px]" />
                            <p className="ml-1 text-gray-900 text-justify text-lg">Stella Jones </p>
                        </div>
                        <p className="mt-0.5 text-gray-600 text-justify text-sm">Client Testimonial</p>
                    </div>
                </div>
            </div>
        </div>
    )
}