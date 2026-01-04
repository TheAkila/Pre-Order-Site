# Lifting Social Pre-Order Site - Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable **Firestore Database**:
   - Go to Build > Firestore Database
   - Click "Create database"
   - Choose "Start in production mode"
   - Select your region

4. Get Firebase credentials:
   - Go to Project Settings (gear icon)
   - Scroll to "Your apps" section
   - Click the web icon `</>`
   - Copy the configuration values

5. Update `.env.local` with your Firebase credentials

6. Set Firestore Security Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Orders collection - public write, admin read
    match /orders/{orderId} {
      allow create: if true;  // Allow order creation
      allow read: if false;   // Read only via API
      allow update: if false; // Update only via API
    }
  }
}
```

### 3. Configure PayHere Payment Gateway

1. Go to [PayHere.lk](https://www.payhere.lk/)
2. Sign up for merchant account
3. Get your credentials from Dashboard:
   - Merchant ID
   - Merchant Secret
4. Update `.env.local` with PayHere credentials

**Sandbox Testing:**
- Use `sandbox` mode during development
- Test cards available on PayHere docs

**Production:**
- Change `NEXT_PUBLIC_PAYHERE_MODE` to `live`
- Use real merchant credentials

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Test the Flow

1. **Pre-order Form**: 
   - Fill customer details
   - Select size and quantity
   - Submit order

2. **Payment**:
   - Redirects to PayHere
   - Complete test payment
   - Returns to success page

3. **Admin Dashboard**:
   - Go to `/admin`
   - Password: Set in `.env.local` (`ADMIN_PASSWORD`)
   - View all orders
   - Export to CSV

## 🌐 Deployment to Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for production"
git push
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables:
   - Copy all values from `.env.local`
   - **IMPORTANT**: Update `NEXT_PUBLIC_BASE_URL` to your Vercel URL

### 3. Configure Domains (Optional)
- Add custom domain in Vercel settings
- Update `NEXT_PUBLIC_BASE_URL` to your domain

## 📱 Features

✅ Mobile-first responsive design  
✅ Product showcase with images  
✅ Size guide with mobile card layout  
✅ Pre-order form with validation  
✅ Firebase Firestore integration  
✅ PayHere payment gateway (LKR)  
✅ Admin dashboard with order management  
✅ CSV export functionality  
✅ Touch-optimized mobile interactions

## 🔐 Security Notes

1. **Admin Password**: Change `ADMIN_PASSWORD` in production
2. **Firebase Rules**: Update security rules before going live
3. **Environment Variables**: Never commit `.env.local` to git
4. **PayHere Secret**: Keep `PAYHERE_MERCHANT_SECRET` secure

## 🐛 Troubleshooting

### Firebase Connection Issues
- Check if credentials are correct
- Verify Firestore is enabled
- Check security rules

### PayHere Payment Fails
- Verify merchant ID is correct
- Check mode (sandbox vs live)
- Ensure base URL is set correctly

### Admin Dashboard Not Loading
- Check admin password
- Verify API route is working (`/api/orders`)
- Check browser console for errors

## 📊 Admin Dashboard

Access: `/admin`  
Password: Set in `.env.local`

**Features:**
- View all orders with filters
- Payment status tracking
- Revenue statistics
- Export orders to CSV
- Real-time order list

## 🎨 Brand Colors

- Primary: Black (#000000)
- Accent: Red (#D00000)
- Background: White (#FFFFFF)

## 📞 Support

For issues, check:
1. Browser console for errors
2. Network tab for API failures
3. Firebase console for data issues
4. PayHere dashboard for payment logs

---

**Built with Next.js 15, TypeScript, Tailwind CSS, Firebase, and PayHere**
