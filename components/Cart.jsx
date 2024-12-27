import { useState ,useEffect } from 'react';
import styles from '../styles/Cart.module.css';
import {useForm} from 'react-hook-form';



const Cart = ({ cart, removeFromCart, setCart }) => {
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);


  const handleRemoveItem = (itemName) => {
    removeFromCart(itemName);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  // Calculate the total price
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  // Form

  const { register, handleSubmit, formState: {errors} } = useForm();

   // Function to check all fields have been filled in
   const hasErrors = () => Object.keys(errors).length > 0;


  // form submit function
  const onSubmit = data => {
    console.log(data);
 

    // Clear the cart
    setCart([]);
    // Set the submitted state to true
    setIsSubmitted(true);
    // Optionally, clear the cart from localStorage
    localStorage.removeItem('cart');
  }




  // Conditional rendering based on whether the form has been submitted
  if (isSubmitted) {
    return (
      <div className={styles.thankYouMessage}>
        <p className={styles.order_message_success}>Your order was placed succesfully!</p>
        <p className={styles.order_message}>An email has been sent to your address with details of your purchase. If you had any problems with your order please contact us at <span>help@gardenia.com</span> </p>
        <p className={styles.order_message}> </p>
      </div>
    );
  }


  return (
    <>

    <div className={cart.length === 0 ? styles.emptyWrapper : styles.wrapper}>


      <div className={styles.header_container}>

        <h2 className={styles.header}>CART</h2>

        {cart.length === 0 ? (
          <p className={styles.text}>Your cart is currently empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div className={styles.content_container} key={item.name}>
                

                <div className={styles.card}>

                  <div className={styles.image_wrapper}>

                    <img src={`/images/${item.type}/${item.image}`} className={styles.img} alt={item.name}/>

                  </div>

                  <div className={styles.name_wrapper}>
                    <li className={styles.name}>{item.name}</li>
                  </div>

                  <div className={styles.price_wrapper}>
                    <li className={styles.name}>${item.price}</li>
                  </div>

                  <div className={styles.select_wrapper}>
                    <p
                      className={styles.select}
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value, 10))}
                      >
                        {item.quantity} 
                    </p>
                  </div>

                  <div className={styles.btn_wrapper}>
                    <button className={styles.btn} onClick={() => handleRemoveItem(item.name)}>
                      X
                    </button>
                  </div>


                </div>

                <div className={styles.remove_wrapper}>
                    <button className={styles.remove} onClick={() => handleRemoveItem(item.name)}>
                      REMOVE ITEM
                    </button>
                  </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length === 0 ? (
        <p></p>
      ) : (
        
        <div className={styles.checkout_container}>

          <div className={styles.header_container}>
            <h2 className={styles.header}>CHECKOUT</h2>
          </div>

  
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

            <h3>Contact</h3>
            <input placeholder='Email' className={styles.form_input1} {...register("Email", { required: true })} />
            <input placeholder='Phone Number' className={styles.form_input1} {...register("phoneNumber", { required: true })} />


            <h3>Delivery</h3>

            <input placeholder='Country' className={styles.form_input1} {...register("Country", { required: true })} />


            <div className={styles.names}>
              <input placeholder='First Name' className={styles.form_input2} {...register("firstName", { required: true })} />
              <input placeholder='Last Name' className={styles.form_input2} {...register("lastName", { required: true })} />
            </div>

            <input placeholder='Address' className={styles.form_input1} {...register("Address", { required: true })} />


            <div className={styles.location}>
              <input placeholder='City' className={styles.form_input3} {...register("City", { required: true })} />
              <input placeholder='Province' className={styles.form_input3} {...register("Province", { required: true })} />
              <input placeholder='Postal Code' className={styles.form_input3} {...register("postalCode", { required: true })} />
            </div>

            <h3>Payment Method</h3>
            <input placeholder='VISA' className={styles.form_input1} {...register("Visa", { required: true })} />
            {/* Display a generic error message if there are any errors */}
            {hasErrors() && <p className={styles.error}>All fields are required</p>}
            <h3>Payment</h3>

            <div className={styles.final_price}>
              <p>TOTAL :</p>
              <p>${total.toFixed(2)}</p>
            </div>
      
            <input className={styles.checkout_btn} type="submit" value='Checkout' />


          </form>
        </div>
          
      )}
      </div>
    </>
  );
};

export default Cart;
