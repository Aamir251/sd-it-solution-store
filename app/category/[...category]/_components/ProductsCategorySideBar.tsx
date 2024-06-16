import { getCategoriesList } from "@/sanity/lib/queries"
import SideBarCategory from "./SideBarCategory"


const fetchCategoriesList = async () => {
  return await getCategoriesList()

}

const ProductsCategorySideBar = async () => {
  const categories = await fetchCategoriesList()

  return (
    <aside>

      <ul>
        {
          categories.map(category => <SideBarCategory {...category} key={category._id} />)
        }
      </ul>

    </aside>
  )
}

export default ProductsCategorySideBar



