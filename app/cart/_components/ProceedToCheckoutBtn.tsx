"use client"
import { useCartContext } from '@/ContextProviders/CartContext';
import Script from 'next/script';
import { useState } from 'react';
import CheckoutForm from './CheckoutForm';


const ProceedToCheckoutBtn = () => {

  const [ showCheckoutForm, setShowCheckoutForm ] = useState<boolean>(true)

  const hideForm = setShowCheckoutForm.bind(null, false)

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <button onClick={setShowCheckoutForm.bind(null, true)} className='btn-black mt-3'>Proceed To Checkout</button>
      { showCheckoutForm && <CheckoutForm hideForm={hideForm} /> }
    </>
  )
}

export default ProceedToCheckoutBtn