import React from "react";

const Addclient_ = () => {
  return (
    <div className="max-w-[815px]  w-full md:w-[815px] h-[226px] bg-white rounded-[10px] sm:overflow-[auto]">
      <div className="m-6 pt-6 ">
        <form>
          <table className="min-w-full  space-y-4 bg-white border-t border-b border-stone-300 border-opacity-40 ">
            <tbody className="">
              <tr className="bg-gray-200 bg-opacity-30 border-r border-b border-stone-300 border-opacity-40">
                <td className=" text-center text-stone-900 text-base font-medium leading-7">
                  {" "}
                  Client Name*
                </td>
                <td className="bg-white border-r border-stone-300 border-opacity-40">
                  {" "}
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    className="mt-1 p-2 w-full  text-stone-600 text-s font-medium leading-tight focus:outline-none"
                    placeholder="First Name"
                  />
                </td>
                <td className="bg-white">
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    className="mt-1 p-2  w-full text-stone-600 text-s font-medium leading-tight focus:outline-none"
                    placeholder="Last Name"
                  />
                </td>
              </tr>
              <tr className="bg-gray-200 bg-opacity-30 border-r border-b border-stone-300 border-opacity-40">
                <td className=" text-center text-stone-900 text-base font-medium leading-7">
                  {" "}
                  Email*
                </td>
                <td className="bg-white border-stone-300 border-opacity-40">
                  {" "}
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="mt-1 p-2 w-full  text-stone-600 text-s font-medium leading-tight focus:outline-none"
                    placeholder="Email Address"
                  />
                </td>
              </tr>
              <tr className="bg-gray-200 bg-opacity-30 border-r border-b border-stone-300 border-opacity-40">
                <td className=" text-center text-stone-900 text-base font-medium leading-7">
                  {" "}
                  Phone Number*
                </td>
                <td className="bg-white  border-stone-300 border-opacity-40">
                  {" "}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 p-2 w-full  text-stone-600 text-s font-medium leading-tight focus:outline-none"
                    placeholder="Phone number"
                  />
                </td>
              </tr>
              <tr className="bg-gray-200 bg-opacity-30 border-r border-b border-stone-300 border-opacity-40">
                <td className=" text-center text-stone-900 text-base font-medium leading-7">
                  {" "}
                  Address*
                </td>
                <td className="bg-white  border-stone-300 border-opacity-40">
                  {" "}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{10}"
                    className="mt-1 p-2 w-full  text-stone-600 text-s font-medium leading-tight focus:outline-none"
                    placeholder=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {/* Submit Button */}
          <div className="mt-6 space-x-3 space-y-6 flex justify-end">
            <div className="space-x-3 space-y-6">
              <button
                type="submit"
                className=" px-4 py-2 bg-stone-300 bg-opacity-60 rounded-[10px] text-white rounded-md hover:bg-stone-400 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" px-4 py-2 bg-sky-800 bg-opacity-60 rounded-[10px] text-white rounded-md hover:bg-sky-900 focus:outline-none"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addclient_;
