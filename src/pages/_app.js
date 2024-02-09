import '@/styles/globals.css'
import '@/Component/Chatbot/chatbot.css'
import "@/Component/Signin/signin.css"
import "@/Component/Signup/signup.css"
import "@/Component/Homepage/homePage.css"
import "@/Component/Navbar/navbar.css"
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
