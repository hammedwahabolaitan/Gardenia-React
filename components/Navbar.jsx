import { useState } from 'react';
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom' 
import MenuIcon from '@mui/icons-material/Menu'; // Import the burger menu icon
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon

export default function Navbar() {
    
    
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!burgerMenuOpen);
      };
  
  
    return (
    
    <>
        {burgerMenuOpen ? (
        <CloseIcon fontSize='large' className={`${styles.burgerMenuIcon} ${styles.closeIcon}`} onClick={toggleBurgerMenu} />
      ) : (
        <MenuIcon fontSize='large' className={styles.burgerMenuIcon} onClick={toggleBurgerMenu} />
      )}

         <nav className={`${styles.links_container} ${burgerMenuOpen ? styles.burgerMenuOpen : ''}`}>
            {burgerMenuOpen && (
    <>

      
    </>
  )}

            <Link to="/flowers" onClick={() => setBurgerMenuOpen(false)}>
                <h2 className={styles.links}>FLOWERS</h2>
            </Link>

            <Link to="/plants" onClick={() => setBurgerMenuOpen(false)}>
                <h2 className={styles.links}>PLANTS</h2>
            </Link>

            <Link to="/birthday" onClick={() => setBurgerMenuOpen(false)}>
                <h2 className={styles.links}>BIRTHDAY GIFTS</h2>
            </Link>

            <Link to="/anniversary" onClick={() => setBurgerMenuOpen(false)}>
                <h2 className={styles.links}>ANNIVERSARY GIFTS</h2>
            </Link>

            <Link to="/giftboxes" onClick={() => setBurgerMenuOpen(false)}>
                <h2 className={styles.links}>GIFTBOXES</h2>
            </Link>

            <Link to="/funeral" onClick={() => setBurgerMenuOpen(false)}>
                <h2 className={styles.links}>FUNERAL</h2>
            </Link>
        </nav>
    </>

  )
}
