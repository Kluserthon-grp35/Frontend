import type { ReactElement } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { LayoutProps } from "@/utils/types";

export default function LandingLayout({children}: LayoutProps):ReactElement{
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

