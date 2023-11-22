import Link from "next/link";
import Logo from "../Logo";
import { RxCaretDown } from "react-icons/rx";
import Button from "@/components/Button";

export default function Navbar(){
    return (
        <div className=" flex justify-between items-center px-20 py-10" role="navigation" >
            <Logo/>
            <ul className=" flex gap-[55px]">
                <li className=""><Link href={''} className="flex items-center font-medium text-[1.2rem] text-text ">Services <RxCaretDown className=" ml-2"/> </Link> </li>
                <li className=""><Link href={''} className="flex items-center font-medium text-[1.2rem] text-text ">Company <RxCaretDown className=" ml-2"/> </Link> </li>
                <li className=""><Link href={''} className="flex items-center font-medium text-[1.2rem] text-text ">Learn <RxCaretDown className=" ml-2"/> </Link> </li>
            </ul>
            <div className=" flex gap-5">
                <Button size={'sm'} variant={"outline"}>Login</Button>
                <Button size={'sm'} variant={"contained"}>Get Started</Button>
            </div>
        </div>
    )
}
