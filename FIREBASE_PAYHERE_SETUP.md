# 🔥 Quick Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Enter project name: `lifting-social-preorder`
4. Disable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Firestore Database

1. In Firebase console, click "Build" → "Firestore Database"
2. Click "Create database"
3. Select "Start in production mode"
4. Choose your region (closest to Sri Lanka: asia-south1)
5. Click "Enable"

## Step 3: Set Security Rules

1. Click "Rules" tab in Firestore
2. Replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /orders/{orderId} {
      // Allow anyone to create orders
      allow create: if true;
      
      // Only admin can read orders
      allow read: if false;
      
      // Only server can update orders
      allow update: if false;
    }
  }
}
```

3. Click "Publish"

## Step 4: Get Firebase Credentials

1. Click gear icon ⚙️ → "Project settings"
2. Scroll to "Your apps" section
3. Click web icon `</>`
4. Register app name: "Lifting Social Web"
5. Don't check "Firebase Hosting"
6. Click "Register app"

7. Copy these values:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",              // Copy this
  authDomain: "project.firebaseapp.com",  // Copy this
  projectId: "project-id",          // Copy this
  storageBucket: "project.appspot.com",   // Copy this
  messagingSenderId: "123456789",   // Copy this
  appId: "1:123:web:abc..."         // Copy this
};
```

## Step 5: Update .env.local

Open `.env.local` and replace:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123:web:abc...
```

## Step 6: Test Connection

1. Restart dev server:
```bash
npm run dev
```

2. Go to http://localhost:3000
3. Fill pre-order form
4. Check Firebase console → Firestore → orders collection

✅ If you see the order, Firebase is working!

---

# 💳 Quick PayHere Setup Guide

## Step 1: Create Merchant Account

1. Go to https://www.payhere.lk/
2. Click "Sign Up" → "Business Account"
3. Fill registration form
4. **Note:** Approval may take 1-2 business days

## Step 2: Get Sandbox Credentials (For Testing)

1. Login to PayHere dashboard
2. Go to "Settings" → "Domains & Credentials"
3. Find **Sandbox** section
4. Copy:
   - Merchant ID (7 digits)
   - Merchant Secret (long string)

## Step 3: Update .env.local

```env
NEXT_PUBLIC_PAYHERE_MERCHANT_ID=1234567
PAYHERE_MERCHANT_SECRET=your_secret_here
NEXT_PUBLIC_PAYHERE_MODE=sandbox
```

## Step 4: Test Payment

1. Restart dev server
2. Fill order form and submit
3. You'll be redirected to PayHere sandbox
4. Use test card:

**Test Card Details:**
- Card Number: 4916217501611292
- Expiry: Any future date (e.g., 12/25)
- CVV: Any 3 digits (e.g., 123)
- Name: Any name

5. Complete payment
6. Check admin dashboard → order status should be "PAID"

## Step 5: Go Live (After Approval)

1. Wait for PayHere approval email
2. Get **Live** credentials from dashboard
3. Update `.env.local`:

```env
NEXT_PUBLIC_PAYHERE_MODE=live
NEXT_PUBLIC_PAYHERE_MERCHANT_ID=your_live_merchant_id
PAYHERE_MERCHANT_SECRET=your_live_secret
```

4. Update Vercel environment variables
5. Redeploy

---

# ⚡ Quick Start (Development)

```bash
# 1. Install dependencies
npm install

# 2. Configure .env.local (see above)
# Edit .env.local with your Firebase and PayHere credentials

# 3. Start dev server
npm run dev

# 4. Open browser
http://localhost:3000

# 5. Test order flow
- Fill form
- Submit order
- Complete payment
- Check /admin (password: admin123)
```

---

# 🚀 Deploy to Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "Ready for production"
git push

# 2. Deploy to Vercel
# Go to vercel.com
# Import your GitHub repo
# Add ALL environment variables from .env.local

# 3. Update base URL
# After deployment, update in Vercel:
NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app
```

---

# ✅ Checklist

- [ ] Firebase project created
- [ ] Firestore enabled with security rules
- [ ] Firebase credentials in .env.local
- [ ] PayHere sandbox credentials added
- [ ] Test order created successfully
- [ ] Test payment completed
- [ ] Admin dashboard accessible (/admin)
- [ ] Deployed to Vercel
- [ ] Environment variables added to Vercel
- [ ] Base URL updated in production

---

# 🆘 Common Issues

**"Firebase not initialized"**
- Check .env.local has correct credentials
- Restart dev server after changing .env.local

**"PayHere configuration missing"**
- Verify merchant ID and secret in .env.local
- Check no extra spaces in credentials

**"Order not found"**
- Check Firebase security rules
- Verify Firestore database is enabled

**Payment redirect fails**
- Check NEXT_PUBLIC_BASE_URL is correct
- Verify PayHere credentials are for correct mode (sandbox/live)

---

**Total setup time: 20-30 minutes** ⏱️
