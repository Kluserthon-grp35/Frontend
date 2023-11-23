import Image from "next/image";
import React from "react";
import Icon from "/public/User.svg";
import Bgimage from "/public/img_backg.svg";
import Call from "/public/call.svg";

const customerName = "Kemi Falola";
const totalOrder = 23;

const CustomerContent = () => {
  return (
    <div className="w-full lg:w-[960px]  md:w-[442px] h-[547px] bg-white rounded-[10px] pl-4">
      <div className="overflow-x-auto overflow-y-auto">
        <h2 className="text-justify text-stone-900 text-xl font-medium leading-[34.45px]">
          Customers
        </h2>
        <table className="min-w-full  border-t border-b border-stone-300 border-opacity-40">
          <thead>
            <tr className="">
              <th className="py-2"></th>
              <th className="py-2"></th>
              <th className="py-2"></th>
              <th className="py-2"></th>
            </tr>
          </thead>
          
          <tbody>
            <tr className="h-20 mb-16 border-b">
              {/**col 1 */}
              <td className="p-2">
                <div className="flex space-x-2">
                  {/* Icon Image */}
                  <div className="relative">
                    <div className="absolute inset-0 w-7 h-7 bg-blue-100 rounded-full">
                      <Image src={Bgimage} alt="" className="" />
                    </div>
                    <div className="relative z-10">
                      <Image src={Icon} alt="" className="w-7 h-5" />
                    </div>
                  </div>
                  <p className="text-justify text-stone-900 text-sm font-medium">
                    {customerName}
                  </p>
                </div>
              </td>

              {/**col 2 */}
              <td className="p-2">
                <div className="space-y-2">
                  <p className="text-justify text-stone-900 text-sm font-medium">
                    {customerName}
                  </p>
                  <div className="flex space-x-2 text-justify text-neutral-400 text-[10px] font-medium leading-[17.23px]">
                    <Image src={Call} alt="" className="ps-px" />
                    <p className="uppercase">call</p>
                  </div>
                </div>
              </td>

              {/**col 3 */}
              <td className="p-2">
                <div className="space-y-2">
                  <p className="text-right text-stone-900 text-opacity-80 text-sm font-medium  leading-normal">
                    {totalOrder}
                  </p>
                  <p className="uppercase text-right text-neutral-400 text-[10px] font-medium leading-[17.23px]">
                    total order
                  </p>
                </div>
              </td>

              <td className="py-2 pl-4">
                <div className="space-x-6">
                  <button className=" h-10 text-right bg-sky-800 rounded-lg text-white px-4 py-2 rounded-md text-sm">
                    <div className="text-[14px] font-normal  leading-[14.20px]">
                      Create invoice
                    </div>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerContent;
