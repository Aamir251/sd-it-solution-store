import { ProductDescription } from "@/global"


type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" |"blockquote"

const Description = ({ description }: { description: ProductDescription }) => {

  const headingsArray = ["h1", "h2", "h3", "h4", "h5", "h6"]

  return (
    <div className="mt-6">
      {
        description.map(desc => {

          if (desc.listItem && desc.listItem === 'bullet') {
            return <List key={desc._key} bullets={desc.children} />
          }

          if (!desc.listItem && desc.style === 'normal') {
            return <Paragraphs key={desc._key} paragraphsChildren={desc.children} />
          }

          if (desc.style && headingsArray.includes(desc.style) && desc.style !== "normal") {
            return <Headings key={desc._key} HeadingTag={desc.style} headingChildren={desc.children} />
          }

          return null
        })
      }
    </div>
  )
}

export default Description


const List = ({ bullets }: { bullets: any }) => {
  return bullets.map((el: any) => <div key={el._key} className="flex gap-x-2 items-start my-2">
    <span>•</span>
    <p className="text-sm font-poppins text-gray-700 leading-7">{el.text}</p>
  </div>)
}


const Paragraphs = ({ paragraphsChildren }: { paragraphsChildren: any }) => {
  return paragraphsChildren.map((el: any) => <p key={el._key} className="text-black-two text-sm leading-7">
    {el.text}
  </p>)
}


const Headings = ({ HeadingTag, headingChildren }: { HeadingTag: Headings, headingChildren : any }) => {
  return headingChildren.map((el : any) => <HeadingTag key={el._key}>{el.text}</HeadingTag>)
}