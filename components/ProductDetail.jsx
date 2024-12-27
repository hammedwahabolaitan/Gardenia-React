import React, { useState } from 'react';
import styles from '../styles/ProductDetail.module.css';
import ProductsData from '../constants/ProductsData';
import { useParams } from 'react-router-dom';
import { Add } from '@mui/icons-material';

export default function ProductDetail({ addToCart }) {
  const { productName } = useParams();

  // Concatenate all product arrays into a single array
  const allProducts = [].concat(...Object.values(ProductsData));

  // Find the product based on the product name
  const thisProduct = allProducts.find(prod => prod.name === productName);

  // Check if the product is not found
  if (!thisProduct) {
    return <div>Product not found</div>;
  }

  // Check if the product has the necessary properties
  if (!thisProduct.type || !thisProduct.image) {
    return <div>Invalid product data</div>;
  }

  const folderName = thisProduct.type.toLowerCase();

  // State to track whether the product has been added to the cart
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    // Check if the product has already been added
    if (!isAddedToCart) {
      addToCart(thisProduct);
      // Set the state to true once the product is added
      setIsAddedToCart(true);
    }
  };

  return (
    <>
      <div className={styles.container}>

        <div className={styles.card}>
          <div className={styles.title_container}>
            <img className={styles.img} src={`/images/${folderName}/${thisProduct.image}`} alt={thisProduct.name} />
          </div>

          <div className={styles.card_info}>

            <div className={styles.product_name}>
              {thisProduct.name}
              <p className={styles.price}>${thisProduct.price}</p>
            </div>
            
            <div className={styles.card_description}>
              <p>Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <div className={styles.card_footer}>
              <button className={styles.card_btn} onClick={handleAddToCart}>
                {isAddedToCart ? 

                <div className={styles.no_add}>
                  <p>Item added to Cart!</p>
                </div>
                :
                <div>
                  <p>Add to Cart</p>
                </div>}
              </button>
            </div>

            <div className={styles.details_container}>
              <div className={styles.card_details}>
                <Add />
                <p>7 days freshness guarantee</p>
              </div>

              <div className={styles.card_details}>
                <Add />
                <p>Sent in bud for maximum vase life</p>
              </div>

              <div className={styles.card_details}>
                <Add />
                <p>Vase not included</p>
              </div>

              <img className={styles.payment} src='/images/visa-2.jpg' alt="Visa"></img>
              <img className={styles.payment} src='/images/mastercard-2.jpg' alt="MasterCard"></img>
              <img className={styles.payment} src='/images/paypal-2.jpg' alt="PayPal"></img>
              <img className={styles.payment} src='/images/google-pay.jpg' alt="Google Pay"></img>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
