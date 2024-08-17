
type FullPageLoaderProps = {
  text?: string
}

const FullPageLoader = ({ text }: FullPageLoaderProps) => {
  return (
    <section className="w-screen h-screen fixed left-0 top-0 flex-center flex-col z-30 bg-white gap-5">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-black align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] "
        ></span>
      </div>
      <span className="text-black font-semibold text-xl">{text ? text : "Loading. Please wait..."}</span>
    </section>
  )
}

export default FullPageLoader