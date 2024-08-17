export const generateClientTxnId = () => {
  const timestamp = Date.now().toString();
  const randomNum = Math.floor(Math.random() * 1000000).toString();
  return `txn-${timestamp}-${randomNum}`;
}


export const getOrderStatus = async (client_txn_id: string) => {

  const date = new Date()

  const addZeroIfLessthanTen = (num: number): string | number => {
    return num < 10 ? `0${num}` : num
  }

  const txnMonth = addZeroIfLessthanTen(date.getMonth() + 1)

  const txn_date = `${date.getDate()}-${txnMonth}-${date.getFullYear()}`

  console.log({ txn_date });

  const resp = await fetch("https://api.ekqr.in/api/check_order_status", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key: process.env.NEXT_PUBLIC_UPIGATEWAY_KEY,
      client_txn_id: client_txn_id,
      txn_date: txn_date
    }),
  })

  const data = await resp.json()


  return data

}