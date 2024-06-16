import { ComponentPropsWithoutRef, PropsWithChildren } from "react"

type ButtonType = "link" | "button"

type Variants = "primary" | "secondary"

type ButtonProps <T extends ButtonType> = PropsWithChildren<{
  as : T,
  className : string,
  variant : Variants
} & ComponentPropsWithoutRef<T>>

type BtnStyle = {
  [ key in Variants] : string
}

const btnStyles : BtnStyle = {
  primary : "btn-primary",
  secondary : "btn-secondary"
}

const Button = <T extends ButtonType>({ 
  as,
  className,
  variant,
  children,
  ...props
} : ButtonProps<T>) => {
  const style = btnStyles[variant]
  
  if (as === "link") {
    return (
      <a className={`${style} ${className}`} {...props }>{children}</a>
    )
  }

  return <button className={`${style} ${className}`} {...props }>{children}</button>
}

export default Button