import Link from 'next/link';
import Styles from './logo.module.css'
import { Montserrat } from 'next/font/google'
const logoFont = Montserrat({
     subsets: ['latin'],
     weight: ['400']
     })
function Logo() {
  return (
    <>
    <Link href='/' className={`${Styles.logo} ${logoFont.className}`}>WOODI</Link>
    </>
  )
}

export default Logo