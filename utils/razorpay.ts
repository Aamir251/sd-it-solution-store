export type OrderNotes = {
  name: string
  email : string
  contact : number
}

export const createOrderId = async (amount : number, notes : OrderNotes ) => {

  try {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: parseFloat(amount.toString()) * 100,
        notes
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


