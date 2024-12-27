import { useState, useEffect } from 'react';
import styles from '../styles/Header2.module.css'
import { Badge } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


export default function Header2({ cart, updateCartLength }) {
  
  // State variable to keep track of the cart length
  const [cartLength, setCartLength] = useState(0);
  

  useEffect(() => {
    // Update the cart length when the cart prop changes
    setCartLength(cart.length);
  }, [cart]);
  
    return (
   <>
   
      <div className={styles.container}>

         <div className={styles.left_wrapper}>
            <Link to='/'>
               <img className={styles.logo} src='images/gardenia-logo-3 v2.png'></img>
            </Link>
            <p className={styles.info}>The #1 online flower shop</p>
         </div>


         <div className={styles.right_wrapper}>

            <div className={styles.contact}>  
               <LocalPhoneIcon className={styles.phone_icon} color='inherit' />
               <p className={styles.hola}> 08107450970</p>
            </div>

            <Link to='/cart'>
               <Badge color="secondary" badgeContent={cartLength} showZero max={99}>
               <ShoppingCartIcon className={styles.cart} color='inherit' />
               </Badge>
            </Link>

         </div>
      </div>
   
   </>
  )
}
