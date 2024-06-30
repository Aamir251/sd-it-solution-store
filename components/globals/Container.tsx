import { PropsWithChildren } from "react"


type ContainerProps = PropsWithChildren<{
  className?: string,
  as?: "section" | "div" | "article" | "nav"

}>


const Container = ({ children, className, as = "div" }: ContainerProps) => {
  const JSXElement = as
  return (
    <JSXElement className={`w-full max-w-7xl mx-auto px-6 md:px-0 md:w-11/12 ${className}`}>
      {children}
    </JSXElement>
  )
}

export default Container
