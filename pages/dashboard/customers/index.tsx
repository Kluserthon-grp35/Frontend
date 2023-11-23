import React from 'react';
import Head from "next/head";
import DashboardLayout from './../../../components/Layouts/DashbboardLayout';
import CustomerContent from "./../../../components/Dashboard/customer/CustomerContent";

const Customerpage = () => {
  return (
    <>
          <Head>
           <title>Customer - AppZen</title>
        </Head>

       <DashboardLayout>
         <CustomerContent />
      </DashboardLayout>

     </>
  )
}

export default Customerpage
