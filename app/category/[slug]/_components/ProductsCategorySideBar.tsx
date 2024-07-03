import { getCategoriesList } from "@/sanity/lib/queries"
import SideBarCategory from "./SideBarCategory"
import Link from "next/link"
import MobileCategoryDropdown from "./MobileCategoryDropdown"


const fetchCategoriesList = async () => {
  return await getCategoriesList()

}


type ProductsCategorySideBarProps = {
  categoryParam: string
}

const ProductsCategorySideBar = async ({ categoryParam }: ProductsCategorySideBarProps) => {
  const categories = await fetchCategoriesList()

  return (
    <aside className="sticky z-10 lg:static top-0 bg-light-gray lg:py-7 lg:px-5 rounded-md grow-0 lg:min-h-60">

      <ul className="hidden lg:flex gap-x-6 lg:flex-col gap-y-3">
        {
          categories.map(category => <SideBarCategory
            isActive={categoryParam === category.slug.current}
            key={category._id}
            {...category}
          />)
        }
      </ul>

      {/* for Mobile */}
      <MobileCategoryDropdown categories={categories} />

    </aside>
  )
}

export default ProductsCategorySideBar



