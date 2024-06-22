import { CategoryList } from "@/sanity/lib/types"
import Link from "next/link"


type SidebarCategoryProps = Omit<CategoryList, "_id"> & {
  isActive : boolean
}


const SideBarCategory = ({ name, slug, isActive } : SidebarCategoryProps) => {

  return (
    <li>
      <Link href={`/category/${slug.current}`}
        className={`${isActive ? 'text-primary-orange' : 'text-black-two' } font-semibold hover:text-primary-orange`}
      >
        {name}
      </Link>
    </li>
  )
}

export default SideBarCategory