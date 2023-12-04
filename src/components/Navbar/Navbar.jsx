import Style from './Navbar.module.css'
import Link from 'next/link';
import { links } from './data/data';
import Logo from '@/elements/logo/logo';
import Btn from '@/elements/button/btn';
const Navbar = () => {
    return (
        <>
            <div className={Style.container}>
                <Logo />
                <div className={Style.links}>
                {
                    links.map((link) => (
                        <Link
                            key={link.id}
                            className={Style.btn}
                            href={link.url}>
                            {link.title}
                        </Link>
                    ))}
                    <Btn />
                </div>
            </div>
        </>
    )
}

export default Navbar;