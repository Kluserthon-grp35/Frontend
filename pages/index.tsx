import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '@/components/Logo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={` w-full h-screen flex justify-center items-center  ${inter.className}`}>
        <Logo/>
    </main>
  )
}
