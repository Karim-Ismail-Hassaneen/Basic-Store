import Link from 'next/link';
import Styles from './page.module.css'
import Image from 'next/image';

export const metadata = {
  title: 'Blog Page'
}
const getData = async () => {
  const res = await fetch("https://dummyjson.com/products")
  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
const Blog = async () => {
  const data = await getData();
    const products = data.products;
  return (
    <main>
      <div className={Styles.mainContainer}>
        {
          products.map(product => (
            <Link href={`blog/${product.id}`} className={Styles.post} key={product.id}>
            <div className={Styles.imageContainer}>
              <Image
                className={Styles.image}
                src={product.thumbnail}
                alt='Product-Image'
                fill={true}
                />
            </div>
            <div className={Styles.content}>
                  <h1 className={Styles.title}>{product.title}</h1>
                  <h4 className={Styles.discontPrice}>${product.discountPercentage}</h4>
                  <h5 className={Styles.price}>${product.price}</h5>
                  <p className={Styles.txt}>{product.description}</p>
                </div>
          </Link>
          ))}
      </div>
      
    </main>
  )
}

export default Blog;