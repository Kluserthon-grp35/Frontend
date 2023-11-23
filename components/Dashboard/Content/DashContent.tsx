import Image from "next/image";
import React from "react";
import Dollar from "/public/clock.svg";
import Clock from "/public/dollaricon.svg";
import Customer from "/public/Customer.svg";

const totalInvoice = 63;
const pendingInvoice = 14;
const totalClient = 500;

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
              <table className="min-w-full">
                <thead className="h-8 bg-stone-300">
                  <tr className="w-[35px] h-[9px] text-justify text-stone-900 text-opacity-80 text-sm font-medium leading-normal">
                    <th className="py-2">INVOICE NO</th>
                    <th className="py-2">CLIENT</th>
                    <th className="py-2">DATE</th>
                    <th className="py-2">STATUS</th>
                    <th className="py-2">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                  <tr>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                  <tr>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                  <tr>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                  <tr>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/** Side Container */}
        </div>
        <div className="w-full md:w-[442px] h-[547px] bg-white rounded-[10px]"></div>
      </div>
    </div>
  );
};

export default DashContent;

import Image from "next/image";
import React from "react";
import Dollar from "/public/clock.svg";
import Clock from "/public/dollaricon.svg";
import Customer from "/public/Customer.svg";

const totalInvoice = 63;
const pendingInvoice = 14;
const totalClient = 500;

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
              <table className="min-w-full">
                <thead className="h-8 bg-stone-300">
                  <tr className="w-[35px] h-[9px] text-justify text-stone-900 text-opacity-80 text-sm font-medium leading-normal">
                    <th className="py-2">INVOICE NO</th>
                    <th className="py-2">CLIENT</th>
                    <th className="py-2">DATE</th>
                    <th className="py-2">STATUS</th>
                    <th className="py-2">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                  <tr>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                  <tr>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                  <tr>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                  <tr>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/** Side Container */}
        </div>
        <div className="w-full md:w-[442px] h-[547px] bg-white rounded-[10px]"></div>
      </div>
    </div>
  );
};

export default DashContent;
