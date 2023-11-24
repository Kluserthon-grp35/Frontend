import React from "react";
import Image from "next/image";
import Icon2 from "/public/all_invoice.svg";
import Icon4 from "/public/pending_invoice.svg";
import Icon1 from "/public/revenue.svg";
import Icon3 from "/public/total_client.svg";

const totalInvoice = 15;
const pendingInvoice = 14;
const totalClient = 250;
const totalRevenue = "65k";
const invoiceNumber = "PZ - 00001";
const date = "30th Nov, 2023";
const paidStatus = "paid";
const amount = "N 25,000.00";
const customerName = "Kemi Falola";

const Dashinvoice = () => {
  return (
    <div>
      {/** this div contains the three container in the Dashboard */}
      <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 space-x-0 md:space-x-7">
        <div className="w-full md:w-[619px] space-y-7">
          {/** Summary Container */}
          <div className="w-full lg:w-[960px] h-[217px] bg-white rounded-[10px] p-5 overflow-x-auto ">
            <h3 className="text-stone-900 text-xl font-medium">Summary</h3>
            <div className="flex mt-2 space-x-16">
              {/** Sub container 1 */}
              <div className="px-2 w-60 h-[145px] space-x-2 bg-stone-100 rounded-[10px]">
                <Image src={Icon2} alt="" className="space-x-4 pl-2 pt-2" />
                <div className="pt-2 mt-0  flex flex-col justify-center items-center">
                  <p className="text-justify text-stone-900 text-base font-medium leading-5">
                    Total Revenue
                  </p>
                  <h3 className="w-[50px] h-[27px] text-justify text-stone-900 text-[30px] font-semibold leading-[68.91px]">
                    {totalRevenue}
                  </h3>
                </div>
              </div>

              {/** Sub container 2 */}
              <div className="px-2 w-60 h-[145px] space-x-2 bg-stone-100 rounded-[10px] ">
                <Image src={Icon1} alt="" className="space-x-4 pl-2 pt-2" />
                <div className="pt-2 mt-0  flex flex-col justify-center items-center">
                  <p className="text-justify text-stone-900 text-base font-medium leading-5">
                    Total Invoice
                  </p>
                  <h3 className="w-[50px] h-[27px] text-justify text-stone-900 text-[30px] font-semibold leading-[68.91px]">
                    {totalInvoice}
                  </h3>
                </div>
              </div>

              {/** Sub container 3 */}
              <div className="px-2 w-60 h-[145px] space-x-2 bg-stone-100 rounded-[10px] ">
                <Image src={Icon3} alt="" className="space-x-4 pl-2 pt-2" />
                <div className="pt-2 mt-0  flex flex-col justify-center items-center">
                  <p className="text-justify text-stone-900 text-base font-medium leading-5">
                    Total Client
                  </p>
                  <h3 className="w-[50px] h-[27px] text-justify text-stone-900 text-[30px] font-semibold leading-[68.91px]">
                    {totalClient}
                  </h3>
                </div>
              </div>

              {/** Sub container 4 */}
              <div className="px-2 w-60 h-[145px] space-x-2 bg-stone-100 rounded-[10px] ">
                <Image src={Icon4} alt="" className="space-x-4 pl-2 pt-2" />
                <div className="pt-2 mt-0  flex flex-col justify-center items-center">
                  <p className="text-justify text-stone-900 text-base font-medium leading-5">
                    Pending Invoice
                  </p>
                  <h3 className="w-[50px] h-[27px] text-justify text-stone-900 text-[30px] font-semibold leading-[68.91px]">
                    {pendingInvoice}
                  </h3>
                </div>
              </div>
            </div>
          </div>

           {/** Invoice Container */}
           <div className="w-full lg:w-[960px] h-[386px] bg-white rounded-[10px] p-5">
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Dashinvoice;
