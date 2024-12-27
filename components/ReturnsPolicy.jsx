import React from 'react'
import styles from '../styles/ReturnsPolicy.module.css'

export default function ReturnsPolicy() {
  return (
    <div className={styles.container}>

        <h3 className={styles.title}>Returns Policy and Cancellations Rights</h3>

    <div className={styles.text_container}> 
        <p className={styles.text}>Thank you for your purchase. We hope you are happy with your purchase. However, if you are in anyway disappointed with our flowers or service, please call us on 08107450970 (Spain) or +2348107450970 (International), or email us at olaitanwahabhammed@gmail.com</p>
        <p className={styles.text}>Our customer support phone lines are open 9am - 5pm Monday to Friday (excluding national holidays). This may be extended during busy periods such as around Mother’s Day and Christmas.</p>
        <p className={styles.text}>All calls are charged at the national rate. Calls may be monitored for training purposes and to maintain our high level of quality service.</p>
        
        <h3 className={styles.header_text}>Complaints</h3>
        <p className={styles.text}>If you have cause for complaint this must be reviewed within 14 days after dispatch. Please note that we cannot guarantee an exact delivery date on flowers dispatched by Royal Mail Tracked 24.</p>
        <p className={styles.text}>We aim to respond to customer service matters within one working day and resolve all complaints within 3 working days.</p>

        <h3 className={styles.header_text}>Returns</h3>
        <p className={styles.text}>Please note this policy excludes all our flower products as these are perishable goods and exempt from this legislation. This does not affect your statutory rights as a consumer.</p>
    </div>

</div>
  )
}
