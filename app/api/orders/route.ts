import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Order, OrderFormData } from '@/types/order';

// GET /api/orders - Fetch all orders
export async function GET() {
  try {
    const ordersRef = collection(db, 'orders');
    const q = query(ordersRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    const orders: Order[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      orders.push({
        orderId: doc.id,
        name: data.name,
        phone: data.phone,
        size: data.size,
        quantity: data.quantity,
        amount: data.amount,
        paymentMethod: data.paymentMethod,
        paymentStatus: data.paymentStatus,
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt?.toDate(),
      });
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

// POST /api/orders - Create new order
export async function POST(request: NextRequest) {
  try {
    const body: OrderFormData = await request.json();

    // Validate input
    if (!body.name || !body.phone || !body.size || !body.quantity) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (body.quantity < 1) {
      return NextResponse.json(
        { error: 'Quantity must be at least 1' },
        { status: 400 }
      );
    }

    // Calculate amount
    const productPrice = parseInt(process.env.NEXT_PUBLIC_PRODUCT_PRICE || '2500');
    const amount = productPrice * body.quantity;

    // Create order in Firebase
    const ordersRef = collection(db, 'orders');
    const orderData = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      size: body.size,
      quantity: body.quantity,
      amount,
      paymentMethod: 'PAYHERE',
      paymentStatus: 'PENDING_PAYMENT',
      createdAt: Timestamp.now(),
    };

    const docRef = await addDoc(ordersRef, orderData);

    return NextResponse.json({
      orderId: docRef.id,
      ...orderData,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
