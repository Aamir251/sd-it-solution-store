import { getCategoriesList } from "@/sanity/lib/queries"
import SideBarCategory from "./SideBarCategory"


const fetchCategoriesList = async () => {
  return await getCategoriesList()

}


type ProductsCategorySideBarProps = {
  categoryParam : string
}

const ProductsCategorySideBar = async ({ categoryParam } : ProductsCategorySideBarProps) => {
  const categories = await fetchCategoriesList()

  return (
    <aside className="bg-light-gray py-7 px-5 rounded-md grow-0 min-h-60">

      <ul className="flex flex-col gap-y-3">
        {
          categories.map(category => <SideBarCategory 
            isActive={categoryParam === category.slug.current}
            key={category._id}
            {...category}
          />)
        }
      </ul>

    </aside>
  )
}

export default ProductsCategorySideBar



