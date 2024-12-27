import styles from '../styles/FrontPage.module.css'
import { Link } from 'react-router-dom';
import ProductsData from '../constants/ProductsData';



export default function Popular() {
  return (

    <>


      <div className={styles.title}>
        <h2>POPULAR</h2>
      </div>

      <div className={styles.container}>
        {ProductsData.popular.map((product) => (
          <div key={product.name} className={styles.card}>
            <Link to={`/${product.name}`}>
              <img src={`images/flowers/${product.image}`} alt={product.name} />
            </Link>
            <p className={styles.info}>{product.name}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>

      <div className={styles.btn_container}>
        <Link className={styles.btn} to='/flowers'>
          VIEW ALL
        </Link>
      </div>
   

    </>

  );
}