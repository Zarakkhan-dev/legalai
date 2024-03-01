import '@/styles/globals.css'
import '@/Component/Chatbot/chatbot.css'
import "@/Component/Signin/signin.css"
import "@/Component/Signup/signup.css"
import "@/Component/Homepage/homePage.css"
import "@/Component/Navbar/navbar.css"
import "@/Component/SwiperSlider/gallery_1.css"
import "@/Component/SwiperSlider/gallery_2.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
