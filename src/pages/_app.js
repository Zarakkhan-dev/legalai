import '@/styles/globals.css'
import '@/Component/Chatbot/chatbot.css'
import "@/Component/Signin/signin.css"
import "@/Component/Signup/signup.css"
import "@/Component/Homepage/homePage.css"
import "@/Component/Navbar/navbar.css"
import "@/Component/Chatbot_Page/chatbot_page.css"
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
