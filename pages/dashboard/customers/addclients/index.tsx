import React from "react";
import Head from "next/head";
import DashboardLayout from "../../../../components/Layouts/DashbboardLayout";
import Addclient_ from "../../../../components/Dashboard/customer/Addclient";

const Addclient = () => {
  return (
    <>
      <Head>
        <title>Addclient - AppZen</title>
      </Head>

      <DashboardLayout>
        <Addclient_ />
      </DashboardLayout>
    </>
  );
};

export default Addclient;
