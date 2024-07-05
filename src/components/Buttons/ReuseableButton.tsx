
interface Props{
    btnContent: string;
}

const ReuseableButton = ({btnContent}:Props) => {
  return (
    <button type="button" className={`bg-brandBrown w-fit py-3 px-7 rounded shadow-md font-InterRegular text-brandLightBrown lg:my-4 text-xxs lg:text-sm hover:bg-transparent hover:ring-2 hover:ring-brandBrown hover:text-black ease-in duration-300`}>{btnContent}</button>
  )
}

export default ReuseableButton