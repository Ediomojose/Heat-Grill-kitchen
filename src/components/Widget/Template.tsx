import React, {ReactNode} from 'react'
import WebNavigation from '../Navigation/WebNavigation'
import WebpageFooter from '../Footer/WebpageFooter'

interface TemplateProps{
    children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({children}) => {
  return (
    <main className="">
        <WebNavigation/>
        <section className=''>
            {children}
        </section>
        <WebpageFooter/>
    </main>
  )
}

export default Template