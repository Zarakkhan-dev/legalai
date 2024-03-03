
import HomePage from "@/Component/Homepage/HomePage"
import Navbar from "@/Component/Navbar/Navbar";
import Head from "next/head";

import logo from "../../public/Picture/LegalAI.png"
export default function Home() {
  return (
    <>
      <Head>
        <title>AI Legal Assistant</title>
        <link rel="icon" href={logo} />
      </Head>
    <Navbar/>
     <HomePage/>
    </>
  )
}
