import React from 'react'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>

        <div className={styles.image_container}>
            <img className={styles.family} src='images/family1.jpg'></img>
        </div>

        <div className={styles.text_container}>
            <p className={styles.text}>We deliver happiness!</p>
            <p className={styles.text}>That might sound a little idealistic but it's the reason we get out of bed in the morning. At Gardenia we believe that business can and should have a positive impact. Gardenia doesn't exist simply to create profits. We want to make a difference to people and to our world. Our values haven't changed since we started selling flowers under an umbrella back in 1996. Gardenia is family-owned, so we're all about relationships, whether that be with our customers, suppliers or our staff. We have the pleasure of selling a product that brings joy to others and aim to do so fairly and to the highest standards.</p>
            <p className={styles.text}>Gardenia has always been committed to giving a minimum of 10% of profits to working with the poor either in Spain or largely in the developing world. As far as we're concerned this doesn't just mean signing a cheque and then walking away. We are actively involved in deciding how these funds are managed and providing other, practical support too.</p>
            <p className={styles.text}>We do everything under the same roof, this means all of our staff members are trained to Gardenias' high standards, from our production team who are responsible for packing and quality-checking your flowers, to our friendly customer support team who are there to answer any questions you may have. They're all an integral part of the Gardenia family!</p>
            <p className={styles.text}>Of course, we're not perfect and we know we're never going to be. It's really important that we understand this because when we're aware that we've not got everything right we can look for ways to improve. We want to get better. Constantly.</p>
        </div>

    </div>
  )
}
