import React from "react";
import DashNavbar from "../Dashboard/Navbar/DashNavbar";
import DashSidebar from "../Dashboard/Sidebar/DashSidebar";


const DashboardLayout = ({ children }: any) => {

    
    return (
        <div className="layout h-full min-h-screen w-full">
            {/* // sidebar goes here */}
            <div className="sidebar hidden md:block shadow-lg md:w-[20vw] first:py-5 px-[2rem] md:h-[100vh] fixed z-20 overflow-auto">
                <DashSidebar />
            </div>


            {/* // nav bar and main content here */}

            <div className="md:ml-[20vw]">
                <div className="fixed w-full md:max-w-[80vw] bg-white z-[150]">
                  <DashNavbar />
                </div>

                <main className="main-content min-h-screen    bg-[#F5F4F1] pt-[100px] px-4 md:px-[2rem] py-[2rem]">
                    {children}
                </main>

            </div>
        </div>
    )
}

export default DashboardLayout