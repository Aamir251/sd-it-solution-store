import { CategoryList } from "@/sanity/lib/types"
import Link from "next/link"

type SidebarCategoryProps = Omit<CategoryList, "_id">


const SideBarCategory = ({ name, slug } : SidebarCategoryProps) => {

  return (
    <li>
      <Link href={`/category/${slug.current}`}>
        {name}
      </Link>
    </li>
  )
}

export default SideBarCategory