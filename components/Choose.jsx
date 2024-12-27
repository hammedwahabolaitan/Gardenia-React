import React from 'react'
import styles from '../styles/Choose.module.css'

export default function Choose() {
  return (
    <div className={styles.container}>

    <h3 className={styles.header_text}>YOU CAN MAKE A DIFFERENCE</h3>

    <div className={styles.image_container}>
        <img className={styles.family} src='images/african-kids-2.jpeg'></img>
    </div>

    <div className={styles.text_container}>
        
        <p className={styles.text}>Since 1996 when we first started selling our beautiful blooms, the dream has always been to create something positive. Placing your order with us doesn't just end there, you are part of something bigger. Every order helps to make a difference.</p>
        <p className={styles.text}>We believe that Gardenia is a blessing, not just a business. For this reason, each year we donate a minimum of 10% of our profits to charitable projects close to our hearts, both in Spain and abroad.</p>
        <p className={styles.text}>For many years our key partner has been Links International - together we have worked to develop farms and medical projects, provide fresh water and support education. While not every project has flourished, we have learned lots of lessons and seen thousands of lives improved along the way.</p>
        <p className={styles.text}>We believe sustainable freedom from poverty is about giving people a hand up, not a handout. Micro-enterprise development is one way we can give such a hand up. We support many micro-enterprise projects in Malawi through our partner Links International.</p>
        <p className={styles.text}>Money is donated to give training to a local community group, who then provide loans to people, enabling them to create their own sustainable mini-businesses. Once the original loan is repaid, the money is recycled, giving others the same opportunity.</p>
        <p className={styles.text}>We have supported nearly 1000 micro-enterprise development projects in Malawi. These projects achieve so much more than simply providing income for food, clothing and education. They empower, restore dignity, and ensure sustainable relief from poverty.</p>
        <p className={styles.text}>Our charity work links closely with our desire to be a sustainable business. Our long-term goal is to be plastic-free, and every day we make a conscious effort to continue to work towards this goal, whether that be researching innovative means of packaging, or working with suppliers who share our values. We choose every day to be mindful of protecting the world we live in and the people in it.</p>
        <p className={styles.text}>Who'd have thought selling flowers could lead to such adventures?</p>
    </div>

</div>
  )
}
