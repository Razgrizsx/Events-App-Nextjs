import './globals.css'
import './general.sass'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Image from 'next/image'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Event App</title>
      </head>
      <body>
      <header>
        <div className={'topNav'}>
        <Image alt='logo' src={'/images/logo2.png'} width={100} height={100}></Image>
        <h1>At vero eos et accusamus et iusto odio dignissimos</h1>
        <Navigation/>
        </div>
       </header> 
      <main>
        {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}
