


export const createOrderId = async (amount: string) => {
  try {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: parseFloat(amount) * 100,
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.orderId;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
};


export const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    /**
     * Delete this
    */
   const email = ""
    const amount = '10'
    const currency = 'INR'

    const orderId: string = await createOrderId(amount.toString());
    const options = {
      key: process.env.key_id,
      amount: parseFloat(amount) * 100,
      currency: currency,
      name: 'name',
      description: 'description',
      order_id: orderId,
      handler: async function (response: any) {
        const data = {
          orderCreationId: orderId,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await fetch('/api/verify', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        });
        const res = await result.json();
        if (res.isOk) alert("payment succeed");
        else {
          alert(res.message);
        }
      },
      prefill: {
        name: name,
        email: email,
      },
      theme: {
        color: '#3399cc',
      },
    };
    const win = window as any
    const paymentObject = new win.Razorpay(options);
    
    paymentObject.on('payment.failed', function (response: any) {
      alert(response.error.description);
    });
    paymentObject.open();
  } catch (error) {
    console.log(error);
  }
};