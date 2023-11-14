import UIProvider from "../components/UIProvider"
import {Open_Sans,Quicksand,Saira_Stencil_One} from 'next/font/google'

export const metadata = {
    title: 'Home',
    description: "Welcome to my site.I'm Bimal Thapa Magar and I am ReactJS enthusiast, Electronics and Communication Engineer and a guitar player.",
}


const open_sans = Open_Sans({
  weight: ['300','400','500','700'],
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-open_sans',
});

const quicksand = Quicksand({
  weight:['300','400','500','600','700'],
  subsets:['latin'],
  display:'swap',
  variable:'--font-quicksand'
});

const sairastencilone = Saira_Stencil_One({
  weight:['400'],
  subsets:['latin'],
  display:'swap',
  variable:'--font-saira_stencil_one'
})


  
export default function RootLayout({
    children,
  }) {
    return (
      <html lang="en" className={`${quicksand.variable} ${open_sans.variable} ${sairastencilone.variable}`}>
        <head>
          <base target="_blank"></base>
        </head>
        <body suppressHydrationWarning={true} className={`${quicksand.variable} ${open_sans.variable} ${sairastencilone.variable}`}>
            <UIProvider>
                {children}
            </UIProvider>
        </body>
      </html>
    )
}