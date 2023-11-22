import { CustomerSvg, DashboardSvg, InvoiceSvg } from "@/public/SVGS/Invoice";


export const SidebarData = [
    {
        title: "Dashboard",
        url: "/dashboard",
        mainIcon: <DashboardSvg color="#F5F4F1" />,
        whiteIcon: <DashboardSvg color="#8E8E8E" />
    },

    {
        title: "Customers",
        url: "/dashboard/customers",
        mainIcon: <CustomerSvg color="#F5F4F1" />,
        whiteIcon: <CustomerSvg color="#8E8E8E" />
    },

    {
        title: "Invoice",
        url: "/dashboard/invoice",
        mainIcon: <InvoiceSvg color="#F5F4F1" />,
        whiteIcon: <InvoiceSvg color="#8E8E8E" />
    },



]

