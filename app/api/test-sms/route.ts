import { NextRequest, NextResponse } from 'next/server';
import { sendOrderConfirmationSMS } from '@/lib/sms';

/**
 * Test SMS API endpoint
 * Use this to test if SMS integration is working
 * URL: /api/test-sms?phone=771234567&name=TestUser
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const phone = searchParams.get('phone');
  const name = searchParams.get('name') || 'Test User';

  if (!phone) {
    return NextResponse.json({
      error: 'Phone number is required. Usage: /api/test-sms?phone=771234567&name=TestUser',
    }, { status: 400 });
  }

  try {
    console.log(`Testing SMS to ${phone} for user ${name}`);
    
    const testOrderId = `TEST-${Date.now()}`;
    const result = await sendOrderConfirmationSMS(phone, testOrderId, name);

    return NextResponse.json({
      success: result.success,
      message: result.message,
      details: result.details,
      testOrderId,
      sentTo: phone,
    });
  } catch (error) {
    console.error('SMS test error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}