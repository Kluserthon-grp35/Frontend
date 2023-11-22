import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

function LandingCard({title,text}:{title:string,text:string}){
    return (
        <div className=" bg-[#D4EAF740] w-full flex flex-col rounded-[10px] px-6 py-16">
            <h2 className="text-[28px] mb-8 font-semibold">{title}</h2>
            <p className="text-[18px] mb-14 leading-[178%] text-[#888888]">{text}</p>
            <Link href="/" className=" font-semibold flex items-center text-xl text-primary">Learn more <FaChevronRight className={'ml-2'} /></Link>
        </div>
    )
} 

export { LandingCard }; 