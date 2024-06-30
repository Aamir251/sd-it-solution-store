import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';
import { OrderNotes } from '@/utils/razorpay';

const razorpay = new Razorpay({
 key_id: process.env.NEXT_PUBLIC_RAZOR_KEY_ID!,
 key_secret: process.env.NEXT_PUBLIC_RAZOR_KEY_SECRET,
});

export async function POST(request: NextRequest) {
 const { amount, currency, notes } = (await request.json()) as {
  amount: string;
  currency: string;
  notes : OrderNotes
 };

 const options  = {
  amount,
  currency,
  receipt: 'rcp1',
  notes
 };
 
 const order = await razorpay.orders.create(options);
 console.log(order);
 return NextResponse.json({ orderId: order.id }, { status: 200 });
}