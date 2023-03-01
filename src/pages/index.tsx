import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navigation from 'components/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-300 h-screen">
        <main className={inter.className}>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32'>
            <Navigation/>
          </div>
        </main>
      </div>
    </>
  )
}
