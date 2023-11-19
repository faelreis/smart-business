import { About } from "./components/About/About";
import { BigNumbers } from "./components/BigNumbers/SectionBigNumbers";
import { Blog } from "./components/Blog/Blog";
import { Customers } from "./components/Customers/Customers";
import { Faq } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Methodology } from "./components/Methodology/Methodology";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { TopBarMessage } from "./components/TopBarMessage/TopBarMessage";

export default function Home() {
  return (
    <>
      <TopBarMessage />
      <Header />
      <Hero />
      <BigNumbers />
      <About />
      <Customers />
      <Methodology />
      <Blog />
      <Faq />
      <Newsletter />
      <Footer />
    </>
  )
}
