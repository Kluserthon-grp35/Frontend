import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { SidebarData } from "../mockData/SidebarData";





const MobileSidebar = () => {
    const router = useRouter();


    return (
        <nav className="sidebar md:hidden h-screen fixed z-[100] top-[70px]  bg-white left-0 w-full px-4">
            <div className="sidebar__items">
                <ul className="">
                    {SidebarData.map((item: any, index: number) => (
                        <li
                        key={index}
                        className={router.pathname === `${item.url} ` || router.pathname.includes(item.url)
                            ? "my-6 cursor-pointer flex items-center gap-2 text-[16px] leading-[20px] text-[#00668C] py-[16px] px-[24px] rounded-[4px]"
                            : "my-6 cursor-pointer flex items-center gap-2 text-[16px] leading-[20px] text-[#8E8E8E] hover:opacity-75 py-[16px] px-[24px] capitalize"}
                    >
                        {router.pathname === `${item.url}` || router.pathname.includes(item.url) ? item.whiteIcon : item.mainIcon}
                        <Link href={item.url}>
                            {item.title}
                        </Link>
                    </li>


                    ))}
                </ul>
            </div>

        </nav>
    )
}

export default MobileSidebar