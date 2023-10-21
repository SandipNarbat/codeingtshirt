import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useState} from 'react'
function MyApp({ Component, pageProps }) {
const [cart,setcart]=useState({})
const[subTotal,setTotal] = useState()
const saveCart = (mycart)=>{
  localStorage.setItem("cart",mycart)
}
const addToCart = (itemCode,qty,name,price,variant) => {
  let newCart = cart;
  if(itemCode in cart){
    newCart[itemCode].qty=cart[itemCode].qty + qty
  }
  else {
    newCart[itemCode]={qty:1,price,name,variant}
  }
}
const removeToCart = (itemCode,qty,name,price,variant) => {
  let newCart = cart;
  if(itemCode in cart){
    newCart[itemCode].qty=cart[itemCode].qty -qty
  }
  if ( newCart[itemCode]["qty"]<=0) {
    delete newCart[itemCode]
    
  }
  setcart({})
  saveCart({})
}

const clearCart = () => {
  setcart({})
  saveCart({})
}
return<>

  <Navbar />
  <Component {...pageProps} />
  <Footer />
  
  </> 
  
}

export default MyApp
