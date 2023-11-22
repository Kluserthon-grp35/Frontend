import { LayoutProps } from "@/utils/types";
import { HeroImage } from "../Hero";
import Logo from "../Logo";

export default function AuthLayout({children}:LayoutProps){
    return (
        <div className=" w-full relative flex items-center h-screen ">
            <div className=" absolute top-10 left-20 ">
                <Logo/>
            </div>
            <div className=" w-full px-20 relative flex items-center h-[80vh] gap-5">
                <div className=" w-1/2">{children}</div>
                <HeroImage/>
            </div>
        </div>
    )
}