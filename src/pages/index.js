
import HomePage from "@/Component/Homepage/HomePage"
import Navbar from "@/Component/Navbar/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Legal Assistant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LegalAI.png" type="image/png" sizes="128 x 128"  />
      </Head>
    <Navbar/>
     <HomePage/>
    </>
  )
}
