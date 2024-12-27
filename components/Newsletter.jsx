import React, { useState } from 'react';
import styles from '../styles/Newsletter.module.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


function Newsletter() {

  const [email, setEmail] = useState('');
  const [isSubscribed, setSubscribed] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
};


  const handleSubscribe = () => {
    if (email.trim() !== '' && !isSubscribed) {
      // Perform the subscription logic here
      setSubscribed(true);      
      // You can also clear the input field after subscribing
      setEmail('Your email was registered!');
  }
  };





  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <MailOutlineIcon className={styles.icon} />
          <p>Keep in touch with us</p>
        </div>

        <div className={styles.subheader}>
          <p>Sign up to our emails for news, competitions and exclusive discounts.</p>
        </div>

        <div className={styles.input_container}>
          <input 
          className={styles.input} 
          type="text" 
          placeholder="Enter your email address" 
          value={email}
          onChange={handleInputChange} 
          />

          <button
            className={styles.button}
            onClick={() => {
              if (!isSubscribed) {
                handleSubscribe();
              }
            }}
          >

          {isSubscribed ? 
          
          <p className={styles.subscribed_true}>Thank you for subscribing!</p>
          : 
          <p>Subscribe</p>}
        </button>
      </div>

      </div>

      <div className={styles.alert_container}>


  


        </div>




    </>
  );
}

export default Newsletter;
