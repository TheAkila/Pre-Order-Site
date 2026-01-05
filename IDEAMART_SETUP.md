# 📱 Dialog Ideamart SMS Setup Guide

## Step 1: Register for Dialog Ideamart

1. Go to: https://www.ideamart.io/
2. Click **"Sign Up"** (top right)
3. Choose **"Developer Account"** (Free tier available)
4. Fill in your details:
   - Name
   - Email
   - Phone number
   - Company name (can use "Lifting Social")
5. Verify your email and phone

## Step 2: Create an SMS App

1. Login to Ideamart dashboard
2. Click **"My Apps"** → **"Create New App"**
3. Select **"SMS API"**
4. Fill in app details:
   - App Name: "Lifting Social Pre-Orders"
   - Description: "Order confirmation SMS for customers"
   - Category: "E-commerce"
5. Submit for approval (usually instant for SMS)

## Step 3: Get Your API Credentials

1. In your app dashboard, find **"API Credentials"**
2. Copy your **API Key** (long string starting with `Bearer_`)
3. Note the **API Endpoint**: `https://api.dialog.lk/sms/send`

## Step 4: Add Credentials to Your App

### For Local Development:

Edit `.env.local`:
```env
IDEAMART_API_KEY=your_actual_api_key_here
IDEAMART_API_URL=https://api.dialog.lk/sms/send
```

### For Vercel Production:

1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add these variables:
   ```
   IDEAMART_API_KEY = your_actual_api_key_here
   IDEAMART_API_URL = https://api.dialog.lk/sms/send
   ```
4. Select: Production, Preview, Development
5. Save and redeploy

## Step 5: Top Up Your Account

1. Go to **"Billing"** in Ideamart dashboard
2. Click **"Top Up"**
3. Add credit via:
   - Credit/Debit Card
   - Bank Transfer
   - Mobile Money

**Pricing:**
- Local SMS: ~LKR 0.25 per message
- International SMS: ~LKR 5.00 per message

**Recommended Top-Up:**
- Start with LKR 500 (~2000 SMS)
- For 100 pre-orders: ~LKR 25

## Step 6: Test SMS Sending

### Test with your phone number first:

```bash
curl -X POST https://api.dialog.lk/sms/send \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "address": "+94771234567",
    "message": "Test message from Lifting Social",
    "type": "SMS"
  }'
```

Replace:
- `YOUR_API_KEY` with your actual key
- `+94771234567` with your phone number

You should receive the SMS within seconds!

## Step 7: Verify Integration

1. Complete a test order on your site
2. Use sandbox PayHere to test payment
3. Check your phone for confirmation SMS
4. Check Vercel logs for "SMS sent successfully"
5. Check Ideamart dashboard for SMS logs

## Phone Number Format

The system automatically handles these formats:
- `0771234567` → Converted to `+94771234567`
- `771234567` → Converted to `+94771234567`
- `+94771234567` → Used as is

## SMS Message Templates

### Order Confirmation (Sent automatically after payment):
```
✅ Order Confirmed! Hi [Name], your Lifting Social order #[ID] is confirmed. We'll notify you when it ships. - Lifting Social
```

### Manual Delivery Updates (Send from admin):
You can use the SMS function for delivery updates:
- Processing
- Shipped
- Delivered

## Troubleshooting

### SMS Not Sending?

**Check 1: API Key is Correct**
- Make sure you copied the full API key
- Include `Bearer_` prefix if required

**Check 2: Account Balance**
- Login to Ideamart dashboard
- Check "Billing" → "Balance"
- Top up if balance is low

**Check 3: Phone Number Format**
- Must be Sri Lankan number (+94)
- Check Vercel logs for formatted number

**Check 4: App Status**
- Check if app is "Active" in Ideamart
- Some apps need approval first

**Check 5: Check Logs**
- Vercel logs: `vercel logs`
- Look for "SMS sent successfully" or error messages

### Common Errors:

**"Insufficient balance"**
- Top up your account

**"Invalid phone number"**
- Check number format
- Must start with +94 for Sri Lanka

**"App not active"**
- Wait for approval (usually instant)
- Contact Ideamart support

**"Rate limit exceeded"**
- Free tier has limits
- Upgrade account or wait

## Cost Estimate

For 100 pre-orders:
- 100 order confirmations: LKR 25
- 100 shipping notifications: LKR 25
- 100 delivery confirmations: LKR 25
- **Total: ~LKR 75 (less than $1 USD)**

## Support

**Dialog Ideamart Support:**
- Email: support@ideamart.io
- Phone: +94 777 678 700
- Live Chat: Available on website

**Your Integration:**
- Check [SMS_EMAIL_OPTIONS.md](SMS_EMAIL_OPTIONS.md) for code details
- Check Vercel logs for errors
- Test with your own phone first

---

## Quick Start Checklist

- [ ] Register at ideamart.io
- [ ] Create SMS app
- [ ] Get API key
- [ ] Add to `.env.local`
- [ ] Add to Vercel env vars
- [ ] Top up LKR 500
- [ ] Test with your phone
- [ ] Complete test order
- [ ] Verify SMS received
- [ ] Deploy to production

**Total setup time: ~15 minutes**

🎉 Once set up, SMS notifications are completely automatic!
