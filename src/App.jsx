
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header2 from '../components/Header2'
import Navbar from '../components/Navbar'
import SimpleSlider from '../components/Banner'
import Popular from '../components/Popular'
import Gifts from '../components/Gifts'
import Plants from '../components/Plants'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ProductDetail from '../components/ProductDetail'
import Cart from '../components/Cart'
import AllFlowers from '../components/AllFlowers'
import AllPlants from '../components/AllPlants'
import BirthdayGifts from '../components/BirthdayGifts'
import AnniversaryGifts from '../components/AnniversaryGifts'
import Giftboxes from '../components/Giftboxes'
import Funeral from '../components/Funeral'
import About from '../components/About'
import Choose from '../components/Choose'
import CorporateGifts from '../components/CorporateGifts';
import ReturnsPolicy from '../components/ReturnsPolicy';


function App() {

  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(savedCart);


  const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name);
  
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  

  const removeFromCart = (productName) => {
    const updatedCart = cart.filter(item => item.name !== productName);
    setCart(updatedCart);
  };

  const updateCartLength = () => {
    setCartLength(getCartLength()); 
  };





  return (
    <>

    <Header2 cart={cart} updateCartLength={updateCartLength} />
    <Navbar />

    <Routes>

    <Route path="/" element={
      <>
      <SimpleSlider />
      <Popular />
      <Gifts />
      <Plants />
      <Newsletter />
      </>
    }/>

<Route path="/flowers" element={
      <>
        <AllFlowers />
      </>
    }/>

<Route path="/plants" element={
      <>
        <AllPlants />
      </>
    }/>

<Route path="/birthday" element={
      <>
        <BirthdayGifts />
      </>
    }/>

<Route path="/anniversary" element={
      <>
        <AnniversaryGifts />
      </>
    }/>

<Route path="/giftboxes" element={
      <>
        <Giftboxes />
      </>
    }/>

<Route path="/funeral" element={
      <>
        <Funeral /> 
      </>
    }/>

<Route path="/about" element={
      <>
        <About />  
      </>
    }/>

<Route path="/choose" element={
      <>
        <Choose />
      </>
    }/>

<Route path="/corporate-gifts" element={
      <>
        <CorporateGifts />
      </>
    }/>

<Route path="/returns" element={
      <>
        <ReturnsPolicy />
      </>
    }/>

<Route path="/cart" element={
      <>
        <Cart cart={cart} removeFromCart={removeFromCart} setCart={setCart} />
      </>
    }/>

<Route path="/:productName" element={
      <>
        <ProductDetail addToCart={addToCart} />
      </>
    }/>



    </Routes>

    <Footer />


    </>
  )
}

export default App
