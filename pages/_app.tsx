import type { AppProps } from "next/app"
import Head from "next/head"
import { DM_Sans } from "@next/font/google"

import "../styles/globals.css"
import NavBar from "../components/NavBar/Navbar"
const DMSans = DM_Sans({ weight: ["400", "500"], preload: true, display: "swap" })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={DMSans.className}>
        <Head>
          <title>PaisaFlix</title>
        </Head>
        <NavBar/>
        <Component {...pageProps} />
      </main>
    </>
  )
}
