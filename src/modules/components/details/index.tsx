import React, { ReactNode } from 'react'
import {IconBaseProps} from 'react-icons/lib'
interface Itext {
  title: string;
  details: ReactNode;
  icon?: ReactNode;
}
type Props = {
  text: Itext[]
}

const Details = ({text}: Props) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-7 text-center">
        {text.map((txt) => (
          <div key={txt.title} className="pt-4 pb-8">
            {txt.icon && (<div className="flex justify-center text-[40px] md:text-[50px] text-sky-500 mb-2">{txt.icon}</div>)}
            <p className="text-[18px] font-bold mb-1">{txt.title}</p>
            {txt.details}
          </div>
        ))}
      </div>
  )
}

export default Details