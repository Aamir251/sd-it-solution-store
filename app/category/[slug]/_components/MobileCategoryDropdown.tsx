"use client"

import { CategoryList } from "@/sanity/lib/types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChangeEvent } from "react"

type MobileCategoryDropdownProps = {
  categories: CategoryList[]
}

const MobileCategoryDropdown = ({ categories }: MobileCategoryDropdownProps) => {
  const router = useRouter()

  const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    router.push(`/category/${e.target.value}`)
  }
  return (
    <select onChange={handleChange} className="block w-full bg-light-gray p-3 bg-black-two text-white lg:hidden" name="" id="">
      {
        categories.map(category => <option key={category.slug.current}>
          {category.slug.current}
        </option>)
      }
    </select>
  )
}

export default MobileCategoryDropdown