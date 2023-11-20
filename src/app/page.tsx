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
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query Pages {
      pages {
        createdAt
        heroParagraph
        heroTag
        heroTitle
        id
        publishedAt
        slug
        updatedAt
      }
      blogs {
        author
        date
        description
        type
        thumbnail {
          url
        }
        authorProfile {
          url
        }
      }
    }
  `;

  return fetchHygraphQuery(query);
};

export default async function Home() {

  const pageData  = await getPageData();

  return (
    <>
      <TopBarMessage />
      <Header />
      <Hero />
      <BigNumbers />
      <About />
      <Customers />
      <Methodology />
      <Blog homeInfo={pageData } />
      <Faq />
      <Newsletter />
      <Footer />
    </>
  )
}
