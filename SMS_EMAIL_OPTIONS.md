# 📱 SMS Notification Options for Sri Lanka

## Option 1: Dialog Ideamart (Sri Lankan SMS Gateway)
**Best for Sri Lankan customers**

### Setup:
1. Register at: https://www.ideamart.io/
2. Get API credentials
3. Pricing: ~LKR 0.25 per SMS

### Implementation:
```typescript
// Add to app/api/payment/payhere/notify/route.ts

async function sendOrderConfirmation(phone: string, orderId: string) {
  const response = await fetch('https://api.dialog.lk/sms/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.IDEAMART_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      address: phone,
      message: `✅ Order Confirmed! ID: ${orderId}. Your Lifting Social tee will be delivered soon. Track: liftingsocial.com/track`,
      type: 'SMS',
    }),
  });
}
```

## Option 2: Twilio (International)
**More expensive but reliable**

### Setup:
1. Register at: https://www.twilio.com/
2. Get Account SID & Auth Token
3. Pricing: ~$0.05 per SMS

### Implementation:
```typescript
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

await client.messages.create({
  body: `✅ Order ${orderId} confirmed! Your Lifting Social tee is on the way.`,
  from: process.env.TWILIO_PHONE_NUMBER,
  to: phone,
});
```

## Option 3: Manual SMS (Simple Start)
**Free but requires manual work**

1. Get notification in admin dashboard
2. Send SMS manually via your phone
3. Use WhatsApp Business API (free with Business account)

---

# 📧 Email Notification Options

## Option 1: Resend (Modern & Simple)
**Best developer experience**

### Setup:
1. Register at: https://resend.com/
2. Free tier: 100 emails/day
3. Add your domain

### Implementation:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'orders@liftingsocial.com',
  to: email,
  subject: '✅ Order Confirmed - Lifting Social',
  html: `
    <h1>Order Confirmed!</h1>
    <p>Order ID: ${orderId}</p>
    <p>Your limited-edition tee is being prepared.</p>
  `,
});
```

## Option 2: SendGrid (Popular)
**Free tier: 100 emails/day**

### Setup:
1. Register at: https://sendgrid.com/
2. Get API key
3. Verify sender email

### Implementation:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: email,
  from: 'orders@liftingsocial.com',
  subject: 'Order Confirmation',
  html: '<strong>Your order is confirmed!</strong>',
});
```

## Option 3: Gmail SMTP (Free but limited)
**Good for testing**

### Setup:
- Use your Gmail account
- Enable 2FA & get App Password
- Limited to 500 emails/day

---

# 💡 Recommended Solution

For a Sri Lankan clothing brand with Instagram customers:

### **Hybrid Approach:**
1. **SMS via Dialog Ideamart** - Primary notification (customers check phones)
2. **Email via Resend** - Secondary (for tracking & receipts)
3. **WhatsApp Business** - Manual follow-ups & delivery updates

### Cost:
- SMS: ~LKR 50 per 100 orders
- Email: FREE (100/day limit)
- WhatsApp: FREE

### Implementation Priority:
1. ✅ Keep current success page (already done)
2. 🚀 Add Dialog SMS for instant confirmation
3. 📧 Add email for receipts (optional)
4. 📱 Use WhatsApp for delivery updates (manual, free)

---

# 🎯 Quick Start (SMS Only)

Would you like me to implement Dialog Ideamart SMS notifications? 

I'll need:
1. Your Dialog Ideamart API credentials
2. Or I can set up the code structure and you add credentials later
