import React from "react";
import { IoIosArrowUp, IoIosArrowDown, IoMdClose, IoMdNotifications } from "react-icons/io"

import { BiMenuAltLeft } from "react-icons/bi"
import Image from "next/image"
import Avater from "/public/img/testimonial.png"
import { Menu, MenuItem } from "@mui/material";
import Button from "@/components/Button";
// import MobileSidebar from "./MobileSidebar";

interface iNav {
    PageTitle?: string
}


const DashNavbar = ({ PageTitle = "Dashboard" }: iNav) => {
    
    const [openMobileMenu, setMobileMenu] = React.useState(false)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


    // open profile menu
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    // open and close mobile menu

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    // open and close mobile menu
    const handleMobileMenu = () => {
        setMobileMenu(!openMobileMenu)
    }

    return (
        <div className="navbar bg-white shadow-sm h-[70px] px-4 md:px-8 py-5 flex flex-row justify-between items-center">
            <div className="mobile_menu md:hidden" onClick={handleMobileMenu}>
              {!openMobileMenu ? (<BiMenuAltLeft color="[#1D1C1C]" className="text-[30px] cursor-pointer text-[#1D1C1C]" />)  : (<IoMdClose color="[#1D1C1C]" className="text-[30px] cursor-pointer text-[#1D1C1C]" />) }
            </div>
            <div className="hidden md:block w-full">
                <p className="text-[28px] text-pdark">{PageTitle}</p>
            </div>
               
                
            {/* right side */}

            <div className="nav_profile flex flex-row gap-8 items-center justify-end w-full">
            <Button variant={"contained"} size={"sm"}>+ Create Client</Button>

            <IoMdNotifications className="text-[28px] text-[#1D1C1C]" />

                <div className="flex items-center gap-4 cursor-pointer" onClick={handleOpenUserMenu}>
                    <Image alt={'User profile'} src={Avater} width={43} height={43} className="rounded-full h-[38px] w-[38px] bg-[#C4C4C4]" />
                </div>

                

                <Menu
                    sx={{ mt: '40px'}}
                    id="menu-appbar"
                    PaperProps={{  
                        style: {  
                          width: 150,  
                        },  
                     }} 
 
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}>

                    <MenuItem>
                        Profile
                    </MenuItem>

                    <hr />
                    <MenuItem>
                        Logout
                    </MenuItem>

                </Menu>

            </div>
            {/* {openMobileMenu && <MobileSidebar />} */}
        </div>
    )
}

export default DashNavbar