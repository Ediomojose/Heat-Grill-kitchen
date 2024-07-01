import React from 'react'

interface Props{
    btnContent: string;
}

const ReuseableButton = ({btnContent}:Props) => {
  return (
    <button type="button" className={`bg-brandBrown w-fit py-3 px-5 rounded shadow font-filmNoirRegular text-brandLightBrown lg:my-4 text-xxs lg:text-sm`}>{btnContent}</button>
  )
}

export default ReuseableButton