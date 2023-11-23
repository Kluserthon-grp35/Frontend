import DashboardLayout from "@/components/Layouts/DashbboardLayout";
import Head from "next/head";
import DashContent from "@/components/Dashboard/Content/DashContent";



const DashboardPage = () => {
    return (
        <>
          <Head>
           <title>Dashboard - AppZen</title>
        </Head>

       <DashboardLayout>
          <DashContent />
      </DashboardLayout>

     </>
    )
}

export default DashboardPage;