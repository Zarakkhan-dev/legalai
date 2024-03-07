
import HomePage from "@/Component/Homepage/HomePage"
import Navbar from "@/Component/Navbar/Navbar";
import Screen_Loading from "@/Component/Screen_Loading/Screen_Loading";
import Head from "next/head";
import { useEffect ,useState} from "react";

export default function Home() {

  const [Loading_Page,setPage] =useState("");
  const delayedFunction =()=>{
    setPage("True")
  }
  useEffect(()=>{
    const timeoutId = setTimeout(delayedFunction, 2000);

  
    return () => clearTimeout(timeoutId);
  })
  return (
    <>
      <Head>
        <title>AI Legal Assistant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LegalAI.png" type="image/png" sizes="128 x 128"  />
      </Head>
      {Loading_Page ===""?<Screen_Loading/> :(
      <>
      <Navbar/>
      <HomePage/>
      </>
      )}
    </>
  )
}
