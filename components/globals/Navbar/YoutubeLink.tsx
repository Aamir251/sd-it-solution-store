import Image from "next/image"
import Link from "next/link"
import YoutubeIcon from "@/assets/icons/youtube.svg"

const YoutubeLink = () => {
  return (
    <Link target="_blank" href={"https://www.youtube.com/@s.ditsolution"} className="flex gap-x-1 items-center hover:opacity-70 py-1.5">
      <Image src={YoutubeIcon} alt="sd it solution youtube channel" width={22} height={22} />
      <span className="md:text-sm text-red-600">
        S.D It Solution
      </span>
    </Link>
  )
}

export default YoutubeLink