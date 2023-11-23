import Image from "next/image";
import React from "react";
import Dollar from "/public/clock.svg";
import Clock from "/public/dollaricon.svg";
import Customer from "/public/Customer.svg";
import Icon from "/public/User.svg";
import Bgimage from "/public/img_backg.svg";
import Call from "/public/call.svg";

const totalInvoice = 63;
const pendingInvoice = 14;
const totalClient = 500;
const customerName = "Kemi Falola";
const totalOrder = 23;
const invoiceNumber = "PZ - 00001";
const date = "30th Nov, 2023";
const paidStatus = "paid";
const amount = "N 25,000.00";

const DashContent = ({ userName }: any) => {
  return (
    <div className="m-1 space-y-5">
      <h2 className="font-semibold text-stone-900 text-[20px] ">
        Hello {userName}{" "}
      </h2>

      {/** this div contains the three container in the Dashboard */}
      <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 space-x-0 md:space-x-7">
        <div className="w-full md:w-[619px] space-y-7">
          {/** Summary Container */}
          <div className="w-full h-[217px] bg-white rounded-[10px] p-5">
            <h3 className="text-stone-900 text-xl font-medium">Summary</h3>
            <div className="flex mt-2 space-x-4">
              <div className="w-[170px] h-[117px] bg-stone-100 rounded-[10px]">
                <div className="p-2 flex space-x-4">
                  <Image src={Dollar} alt="" />
                  <h3 className="w-[50px] h-[27px] text-justify text-stone-900 text-[40px] font-semibold leading-[68.91px]">
                    {totalInvoice}
                  </h3>
                </div>
                <p className="text-center text-neutral-700 text-base font-medium leading-10 p-2">
                  Total Invoice
                </p>
              </div>
              <div className="w-[170px] h-[117px] bg-stone-100 rounded-[10px]">
                <div className="p-2 flex space-x-4">
                  <Image src={Clock} alt="" />
                  <h3 className="w-[50px] h-[27px] text-justify text-stone-900 text-[40px] font-semibold leading-[68.91px]">
                    {pendingInvoice}
                  </h3>
                </div>
                <p className="text-center text-neutral-700 text-base font-medium leading-10 pt-2">
                  Pending Invoice
                </p>
              </div>
              <div className="w-[170px] h-[117px] bg-stone-100 rounded-[10px]">
                <div className="p-2 flex space-x-2">
                  <Image src={Customer} alt="" />
                  <h3 className="w-[50px] h-[27px] text-justify text-stone-900 text-[40px] font-semibold leading-[68.91px]">
                    {totalClient}
                  </h3>
                </div>
                <p className="text-center text-neutral-700 text-base font-medium leading-10 pt-2">
                  Total Clients
                </p>
              </div>
            </div>
          </div>

          {/** Invoice Container */}
          <div className="w-full h-[386px] bg-white rounded-[10px] p-5">
            <h3 className="text-justify text-stone-900 text-xl leading-[34.45px] font-medium">
              Invoices
            </h3>
            <div className="overflow-x-auto overflow-y-auto">
              <table className="min-w-full  space-y-4">
                <thead className="h-8 bg-stone-300">
                  <tr className="  w-[35px] h-[9px] text-justify text-stone-900 text-opacity-80 text-sm font-medium leading-normal">
                    <th className="py-2">INVOICE NO</th>
                    <th className="py-2">CLIENT</th>
                    <th className="py-2">DATE</th>
                    <th className="py-2">STATUS</th>
                    <th className="py-2 pl-4">AMOUNT</th>
                    <th className="py-2"></th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="bg-gray-200 bg-opacity-30">
                    <td className="py-2 text-justify text-stone-900 text-opacity-80 text-xs font-medium  leading-tight">
                      {invoiceNumber}
                    </td>
                    <td className="py-2 text-justify text-stone-900 text-opacity-80 text-xs font-medium  leading-tight">
                      {customerName}
                    </td>
                    <td className="py-2 text-justify text-stone-900 text-opacity-80 text-xs font-medium  leading-tight">
                      {date}
                    </td>
                    <td className="py-2 w-[26px] h-[9px] text-justify text-green-600 text-xs font-medium  leading-tight uppercase ">
                      {paidStatus}
                    </td>

                    <td className="py-2">
                      <div className="text-stone-900 text-opacity-80 text-xs font-medium leading-tight">
                        {amount}
                      </div>
                    </td>
                    <td className="py-2"><button className=" h-10 bg-sky-800 rounded-lg text-white px-4 py-2 rounded-md text-sm">
                      <div className="text-[10px] font-normal  leading-[14.20px]">Create invoice</div>
                      </button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/** Side Container */}
        <div className="w-full md:w-[442px] h-[547px] bg-white rounded-[10px] pl-4">
          <div className="overflow-x-auto overflow-y-auto">
            <h2 className="text-justify text-stone-900 text-xl font-medium leading-[34.45px]">
              Customers
            </h2>
            <table className="min-w-full border-t border-b border-stone-300 border-opacity-40">
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashContent;
