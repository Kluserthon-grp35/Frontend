import React from 'react'
import Head from "next/head";
import DashboardLayout from './../../../components/Layouts/DashbboardLayout';
import Dashinvoice from '../../../components/Dashboard/invoice/Dashinvoice';

const Invoicepage = () => {
  return (
    <>
          <Head>
           <title>Invoice - AppZen</title>
        </Head>

       <DashboardLayout>
        <Dashinvoice /> 
      </DashboardLayout>

     </>
  )
}

export default Invoicepage
