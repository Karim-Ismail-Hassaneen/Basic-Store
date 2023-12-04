import Styles from './CSS/page.module.css'
import Image from 'next/image'
import imag from '../../public/Images/undraw_images.svg'
import Button from './button/btn'
import Contact from './(static)/contact/page'

export const metadata = {
  title: "Main Page"
}
const Home = () => {
  return (
    <>
    <main>
      <div className={Styles.container}>
        <div className={Styles.col}>
          <h1 className={Styles.title}>Your Best E-Commerce Destination</h1>
          <p className={Styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates voluptas, aliquid</p>
          < Button />
        </div>
        <div className={Styles.col}>
            <Image
            className={Styles.img}
                src={imag}
                alt='HEXASHOP Image'
             />
        </div>
      </div>
      <Contact />
    </main>
    </>
  )
}

export default Home;