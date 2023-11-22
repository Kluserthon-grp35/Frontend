/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Logo from "../Logo";
import Navbar from "../Navbar";

export default function Footer(){
  return (
    <div className=" bg-[#C8CACC45] w-full h-[381px] py-16 px-20 flex gap-10 ">
      <div className="text-lg w-[432px] h-full flex flex-col justify-between">
        <Logo/>
        <p className=" ">The holistic business the board insight for independent ventures across Africa</p>
        <p className="">2023 PayZen Inc. All Rights Reserved.</p>
      </div>
      <div className="flex justify-between flex-grow gap-10">
          <div className=" text-center">
            <h2 className=" font-semibold text-[24px] mb-5">Company</h2>
            <ul className=" text-lg">
              <li className=" mb-1"><Link href="" className="">About Us</Link></li>
              <li className=" mb-1"><Link href="" className="">Careers</Link></li>
            </ul>
          </div>
          <div className=" text-center">
            <h2 className=" font-semibold text-[24px] mb-5">Legal</h2>
            <ul className=" text-lg">
              <li className=" mb-1"><Link href="" className="">Legal</Link></li>
              <li className=" mb-1"><Link href="" className="">Contact</Link></li>
            </ul>
          </div>
          <div className=" text-center">
            <h2 className=" font-semibold text-[24px] mb-5">Resources</h2>
            <ul className=" text-lg">
              <li className=" mb-1"><Link href="" className="">Blog</Link></li>
              <li className=" mb-1"><Link href="" className="">FAQ'S</Link></li>
              <li className=" mb-1"><Link href="" className="">Supports</Link></li>
            </ul>
          </div>
      </div>
    </div>
  )
}

