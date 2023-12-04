import Image from 'next/image'
import Styles from './post.module.css'
import Link from 'next/link'
import Back from './button/back'
import { images } from '../../../../../next.config'

const getData = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    if (!res.ok) {
  
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const Product = async ({params}) => {
    const product = await getData(params.id)
    return (
        <>
            <main>
                <div className={Styles.container}>
                    <header className={Styles.header}>
                        <div className={Styles.info}>
                        <h2>{product.brand}</h2>
                            <h1 className={Styles.title}>{product.title}</h1>
                            <h1 className={Styles.price}>${product.price}</h1>
                        </div>
                        <div className={Styles.imageContainer}>
                            <Image
                                src={product.thumbnail}
                                className={Styles.image}
                                width={600}
                                height={400}
                                alt='Product-image'
                                />
                        </div>
                    </header>
                    <div className={Styles.content}>
                        <div className={Styles.gallary}>
                            {product.images.map(image => (
                                <Image
                                key={product.id}
                                src={image}
                                width={180}
                                height={180}
                                alt={product.title}
                                 />
                            ))}
                        </div>
                    <p className={Styles.desc}>{product.description}</p>
                    </div>
                </div>
                        <Link href='../../blog'>
                         <Back />
                        </Link>
                       
            </main>
        </>
    )
}
export default Product;