import { Inter } from 'next/font/google'
import Logo from '@/components/Logo'
import LandingLayout from '@/components/Layouts/LandingLayout'
import Hero from '@/components/Hero'
import { LayoutProps } from '@/utils/types'
import { LandingCard } from '@/components/Cards'
import Slider from '@/components/Slider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LandingLayout>
      <Hero/>
      {/* <main className={`  ${inter.className}`}> */}
          
      {/* </main> */}
      <main className=" mb-[117px] px-20">
          <section className=" text-center py-20">
              <h2 className=" text-5xl font-semibold text-text mb-12">Why choose us?</h2>
              <p className=" text-[24px]">Our clients discuss how PayZen takes care of genuine business issues for them</p>
          </section>
          <section className=" grid grid-cols-2 gap-5">
              <LandingCard
                title="Turn into a tech-empowered business"
                text="
                Effortlessly generate invoices and receipts, manage customer information, and seamlessly log daily sales across your shop, website, social media, and online marketplaces—all conveniently accessible through your mobile device.
                "
              />
              <LandingCard
                title="Track your payment in real time"
                text="Enabling you to monitor incoming and pending payments in real time. Gain insights into overdue invoices, payment statuses, and upcoming transactions, empowering informed decision-making and timely follow-ups to maintain a healthy cash flow for your business."
              />
          </section>
      </main>
      <div className=" px-20 py-28 w-full min-h-screen bg-gradient ">
          <section className=" w-full mb-28 text-center">
            <h2 className=" text-white text-[48px] font-semibold">Trusted by over 500 Business Owners </h2>
            <p className=" text-white text-2xl font-normal">Our clients discuss how PayZen takes care of genuine business issues for them</p>
          </section>
          <Slider/>
      </div>
    </LandingLayout>
  )
}

