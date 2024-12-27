import React from 'react'
import styles from '../styles/CorporateGifts.module.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RedeemIcon from '@mui/icons-material/Redeem';
import DiscountIcon from '@mui/icons-material/Discount';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';




export default function CorporateGifts() {
  return (
    
    <>
    
    
    <div className={styles.container}>


        <div className={styles.corporate_gifts_container}>

            <div className={styles.text_content}>
                <h3>Corporate Gifts</h3>
                <p>
                Whether you are looking to reward your loyal customers, important clients or your
                own staff, we have a great range of flowers, plants, hampers and gifts. Choose
                from gorgeous hand-tied bouquets, long-lasting house plants - perfect for the
                desk, and gift hampers filled with delicious treats, wines and chocolates.
                </p>
                <hr />
                <p>We can also create bespoke gifts to suit your budget and requirements. Please contact us to discuss your requirements.</p>
            </div>

            <div className={styles.image_content}>
                <img src="images/corporate-party.jpeg" alt="corporate party" />
            </div>

        </div>
    </div>


    <div className={styles.contact_container}>

        <div className={styles.contact_info}>
            <h3 className={styles.promo_header}>Enquire now</h3>
            <p className={styles.contact_text}> Phone: <span>+34 1623 750343 </span></p>
            <p className={styles.contact_text}> Email: <span>corporate@gardenia.com</span></p>
        </div>
        
        <h3 className={styles.promo_header}>Why choose Gardenia?</h3>


        <div className={styles.promo_container}>
          

            <div className={styles.items}>
                <LocalShippingIcon className={styles.promo_icon} />
                <p>Named day deliveries</p>
                <p>with full tracking</p>
            </div>

            <div className={styles.items}>
                <RedeemIcon fontSize='large' className={styles.promo_icon} />
                <p>More than 200</p>
                <p>gifts to choose from</p>
            </div>

            <div className={styles.items}>
             <DiscountIcon fontSize='large' className={styles.promo_icon} />
             <p>Bulk discounts</p>
             <p>available</p>
            </div>

            <div className={styles.items}>
                <PhoneEnabledIcon fontSize='large' className={styles.promo_icon} /> 
                <p>Dedicated</p> 
                <p>personal service</p>
            </div>

      
        
        </div>



    </div>


    </>




  )
}
