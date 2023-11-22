import DashboardLayout from "@/components/Layouts/DashbboardLayout";
import Head from "next/head";

const DashboardPage = () => {
    return (
        <>
          <Head>
           <title>Dashboard - AppZen</title>
        </Head>

       <DashboardLayout>
          This is main dashboard
      </DashboardLayout>

     </>
    )
}

export default DashboardPage;