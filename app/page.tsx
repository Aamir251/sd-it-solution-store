import { getHomepageProducts } from "@/sanity/lib/queries";
import HeroHeader from "./_components/HeroHeader";
import ProductsSection from "@/components/ProductsSection";



const fetchHomePageData = async () => {

  const resp = await getHomepageProducts()
  
  const { windowsData, officeData } = resp

  return {
    windowsData,
    officeData
  }
}


export default async function Home() {

  const { officeData, windowsData } = await fetchHomePageData()

  return (
    <main>
      <HeroHeader />
      <ProductsSection heading="Windows" products={windowsData[0].products} categorySlug={windowsData[0].slug} />
      <ProductsSection heading="Office" className="pt-0" products={officeData[0].products} categorySlug={officeData[0].slug} />
    </main>
  );
}

