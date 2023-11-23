import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "@/components/Logo";
import { SidebarData } from "../mockData/SidebarData";




const DashSidebar = () => {
    const router = useRouter();

    return (
        <aside className="sidebar w-full">
            <Link href="/dashboard">
                <Logo />
            </Link>


            <div className="sidebar__items mt-12">
                <ul className="">
                    {SidebarData.map((item: any, index: number) => (
                        <li
                            key={index}
                            className={router.pathname === `${item.url} ` || router.pathname.includes(item.url)
                                ? "my-6 cursor-pointer flex items-center gap-2 text-[16px] leading-[20px] text-[#00668C] py-[16px] px-[24px] rounded-[4px] bg-[#F5F4F1]"
                                : "my-6 cursor-pointer flex items-center gap-2 text-[16px] leading-[20px] text-[#8E8E8E] hover:opacity-75 py-[16px] px-[24px]"}
                        >
                           <span className={router.pathname.includes(item.url) ? "p-1 bg-[#FFFFFF] shadow-sm rounded-[5px]" : "p-1 bg-[#F5F4F1] rounded-[5px]"}>
                             {router.pathname === `${item.url}` || router.pathname.includes(item.url) ? item.mainIcon : item.whiteIcon}
                             </span>
                            <Link href={item.url}>
                                {item.title}
                            </Link>
                        </li>


                    ))}
                </ul>
            </div>

        </aside>
    )
}

export default DashSidebar