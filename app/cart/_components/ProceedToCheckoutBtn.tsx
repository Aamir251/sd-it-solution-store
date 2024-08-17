"use client"
import { useState } from 'react';
import CheckoutForm from './CheckoutForm';


const ProceedToCheckoutBtn = () => {

  const [showCheckoutForm, setShowCheckoutForm] = useState<boolean>(false)

  const hideForm = setShowCheckoutForm.bind(null, false)

  return (
    <>
      <button onClick={setShowCheckoutForm.bind(null, true)} className='btn-black mt-3'>Proceed To Checkout</button>
      {showCheckoutForm && <CheckoutForm hideForm={hideForm} />}
    </>
  )
}

export default ProceedToCheckoutBtn