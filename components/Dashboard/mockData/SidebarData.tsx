import { CustomerSvg, DashboardSvg, InvoiceSvg } from "@/public/SVGS/Invoice";


export const SidebarData = [
    {
        title: "Dashboard",
        url: "/dashboard",
        mainIcon: <DashboardSvg color="#00668C" />,
        whiteIcon: <DashboardSvg color="#8E8E8E" />
    },

    {
        title: "Customers",
        url: "/dashboard/customers",
        mainIcon: <CustomerSvg color="#00668C" />,
        whiteIcon: <CustomerSvg color="#8E8E8E" />
    },

    {
        title: "Invoice",
        url: "/dashboard/invoice",
        mainIcon: <InvoiceSvg color="#00668C" />,
        whiteIcon: <InvoiceSvg color="#8E8E8E" />
    },



]

