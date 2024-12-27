import styles from '../styles/FrontPage.module.css'
import { Link } from 'react-router-dom';
import ProductsData from '../constants/ProductsData';



export default function AllPlants() {
  return (

    <>


      <div className={styles.title}>
        <h2>PLANTS</h2>
      </div>

      <div className={styles.container}>

        {ProductsData.allPlants.map((product) => (
          <div key={product.name} className={styles.card}>
            <Link to={`/${product.name}`}>
              <img src={`images/plants/${product.image}`} alt={product.name} />
            </Link>
            <p className={styles.info}>{product.name}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}

      </div>


    </>

  );
}