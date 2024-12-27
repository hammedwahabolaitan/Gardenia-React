import styles from '../styles/FrontPage.module.css'
import { Link } from 'react-router-dom';
import ProductsData from '../constants/ProductsData';



export default function AllFlowers() {
  return (

    <>


      <div className={styles.title}>
        <h2>BEST SELLERS</h2>
      </div>

      <div className={styles.container}>

        {ProductsData.allFlowers.map((product) => (
          <div key={product.name} className={styles.card}>
            <Link to={`/${product.name}`}>
              <img src={`images/flowers/${product.image}`} alt={product.name} />
            </Link>
            <p className={styles.info}>{product.name}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}

      </div>


      <div className={styles.title}>
        <h2>AUTUMN COLLECTION</h2>
      </div>

      <div className={styles.container}>

        {ProductsData.autumn.map((product) => (
          <div key={product.name} className={styles.card}>
            <Link to={`/${product.name}`}>
              <img src={`images/autumn/${product.image}`} alt={product.name} />
            </Link>
            <p className={styles.info}>{product.name}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}

      </div>


      <div className={styles.title}>
        <h2>SUMMER COLLECTION</h2>
      </div>

      <div className={styles.container}>

        {ProductsData.summer.map((product) => (
          <div key={product.name} className={styles.card}>
            <Link to={`/${product.name}`}>
              <img src={`images/summer/${product.image}`} alt={product.name} />
            </Link>
            <p className={styles.info}>{product.name}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}

      </div>


   

    </>

  );
}