/**
 * Dialog Ideamart SMS Integration
 * Sends order confirmation SMS to customers
 */

interface SMSResponse {
  success: boolean;
  message: string;
  details?: any;
}

export async function sendOrderConfirmationSMS(
  phone: string,
  orderId: string,
  customerName: string
): Promise<SMSResponse> {
  const apiKey = process.env.IDEAMART_API_KEY;
  const apiUrl = process.env.IDEAMART_API_URL || 'https://api.dialog.lk/sms/send';
  
  // Skip if SMS is not configured
  if (!apiKey) {
    console.warn('Dialog Ideamart API key not configured. Skipping SMS notification.');
    return {
      success: false,
      message: 'SMS service not configured',
    };
  }

  // Format phone number (ensure it has country code)
  const formattedPhone = formatPhoneNumber(phone);

  // Compose SMS message (160 characters max for single SMS)
  const message = `✅ Order Confirmed! Hi ${customerName}, your Lifting Social order #${orderId.slice(-8)} is confirmed. We'll notify you when it ships. - Lifting Social`;

  try {
    console.log(`Sending SMS to ${formattedPhone} for order ${orderId}`);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: formattedPhone,
        message: message,
        type: 'SMS',
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(`SMS sent successfully to ${formattedPhone}`);
      return {
        success: true,
        message: 'SMS sent successfully',
        details: data,
      };
    } else {
      console.error('SMS sending failed:', data);
      return {
        success: false,
        message: `SMS failed: ${data.message || 'Unknown error'}`,
        details: data,
      };
    }
  } catch (error) {
    console.error('Error sending SMS:', error);
    return {
      success: false,
      message: `SMS error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}

/**
 * Format phone number for Dialog Ideamart
 * Converts various formats to +94XXXXXXXXX
 */
function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  let cleaned = phone.replace(/\D/g, '');

  // If starts with 0, replace with 94
  if (cleaned.startsWith('0')) {
    cleaned = '94' + cleaned.slice(1);
  }

  // If doesn't start with country code, add 94
  if (!cleaned.startsWith('94')) {
    cleaned = '94' + cleaned;
  }

  // Add + prefix
  return '+' + cleaned;
}

/**
 * Send delivery update SMS
 */
export async function sendDeliveryUpdateSMS(
  phone: string,
  orderId: string,
  status: string
): Promise<SMSResponse> {
  const apiKey = process.env.IDEAMART_API_KEY;
  const apiUrl = process.env.IDEAMART_API_URL || 'https://api.dialog.lk/sms/send';
  
  if (!apiKey) {
    return { success: false, message: 'SMS service not configured' };
  }

  const formattedPhone = formatPhoneNumber(phone);
  let message = '';

  switch (status) {
    case 'PROCESSING':
      message = `📦 Your Lifting Social order #${orderId.slice(-8)} is being prepared. Estimated delivery: 2-3 days.`;
      break;
    case 'SHIPPED':
      message = `🚚 Your order #${orderId.slice(-8)} has been shipped! Track your delivery via SMS updates.`;
      break;
    case 'DELIVERED':
      message = `✅ Your Lifting Social tee has been delivered! Enjoy your gear. Thank you for your order!`;
      break;
    default:
      message = `📋 Update on order #${orderId.slice(-8)}: ${status}. - Lifting Social`;
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: formattedPhone,
        message: message,
        type: 'SMS',
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(`Delivery update SMS sent to ${formattedPhone}`);
      return { success: true, message: 'SMS sent', details: data };
    } else {
      console.error('Delivery SMS failed:', data);
      return { success: false, message: 'SMS failed', details: data };
    }
  } catch (error) {
    console.error('Error sending delivery SMS:', error);
    return { success: false, message: `Error: ${error}` };
  }
}
