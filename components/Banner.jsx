import React, { Component }  from 'react'
import styles from '../styles/Banner.module.css'
import Slider from 'react-slick';

export default class SimpleSlider extends Component {

    render() {
      const settings = {
        infinite: true,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1
      };


      return (
        <div className={styles.container}>
          <Slider {...settings}>
            <div>
              <h3 className={styles.text}>A FAMILY BUSINESS SINCE 1996</h3>
              <p className={styles.description}>More than 25 years of experience</p>
            </div>
            <div>
              <h3 className={styles.text}>10% OF PROFITS DONATED TO CHARITY</h3>
              <p className={styles.description}>Your gifts keep on giving</p>
            </div>
            <div>
              <h3 className={styles.text}>4.8 / 5 on Trustpilot</h3>
              <p className={styles.description}>From over 180k reviews</p>
            </div>
            <div>
            <h3 className={styles.text}>7 DAY FRESHNESS GUARANTEE</h3>
            <p className={styles.description}>Sent in bud for a longer vase life</p>
            </div>
          </Slider>
        </div>
      );
    }
  }
