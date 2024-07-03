
export const revalidate = 3600 // revalidate at most every hour

import ProductCard from "@/components/ProductCards/ProductCard"
// fetches the products of the particular category and renders it

import { getCategoriesList, getProductsByCategory } from "@/sanity/lib/queries"

type ProductsByCategoryPageProps = {
  params : { 
    slug : string
  }
}


export async function generateStaticParams() {
  const categories = await getCategoriesList()

  return categories.map(category => ({
    slug : category.slug.current
  }))

}

const ProductsByCategoryPage = async ({ params } : ProductsByCategoryPageProps) => {

  const productsCategory = params.slug
  
  const { products } = await getProductsByCategory(productsCategory)
  
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-12">
      {
        products.map(product => <ProductCard key={product._id} {...product} /> )
      }
    </div>
	)
}

export default ProductsByCategoryPage