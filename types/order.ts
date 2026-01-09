// Order data types
export interface Order {
  orderId: string;
  name: string;
  phone: string;
  size: TShirtSize;
  quantity: number;
  amount: number;
  paymentMethod: 'PAYHERE';
  paymentStatus: PaymentStatus;
  createdAt: Date;
  updatedAt?: Date;
}

export type TShirtSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type PaymentStatus = 'PENDING_PAYMENT' | 'PAID' | 'CANCELLED';

export interface OrderFormData {
  name: string;
  phone: string;
  size: TShirtSize;
  quantity: number;
  acceptedTerms: boolean;
  acceptedPrivacy: boolean;
}
