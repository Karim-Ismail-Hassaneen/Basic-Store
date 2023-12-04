import Styles from './footer.module.css'
import Image from 'next/image'
import imgOne from '../../../public/Images/facebook.png'
import imgTwo from '../../../public/Images/instagram.png'
import imgThree from '../../../public/Images/telegram.png'
import imgFour from '../../../public/Images/X.png'
const Footer = () => {
    return (
        <main>
            <div className={Styles.container}>
                <div>© 2023 WOODI All Rights Reseved</div>
                    <div className={Styles.social}>
                        <Image
                        className={Styles.icon}
                        width={20}
                        height={20}
                        src={imgOne}
                        alt='facbook icon' />

                        <Image
                        className={Styles.icon}
                        width={20}
                        height={20}
                        src={imgTwo}
                        alt='instagram icon' />

                        <Image
                        className={Styles.icon}
                        width={20}
                        height={20}
                        src={imgThree}
                        alt='telegram icon' />

                        <Image
                        className={Styles.icon}
                        width={20}
                        height={20}
                        src={imgFour}
                        alt='X icon' />
                    </div>
            </div>
        </main>
    );
}

export default Footer;