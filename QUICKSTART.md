# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials.

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🔑 Get Your API Keys

### Firebase Setup (2 minutes)

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create new project
3. Add web app
4. Copy config values to `.env.local`
5. Create Firestore database (test mode)

### PayHere Setup (5 minutes)

1. Sign up at [PayHere.lk](https://www.payhere.lk)
2. Go to Settings → Domains & Credentials
3. Get Merchant ID and Secret
4. Use sandbox mode for testing

## 📱 Test the Flow

1. Fill out the pre-order form
2. Click "Pay & Reserve Your Tee"
3. Use PayHere sandbox test cards
4. Complete payment
5. See order in admin dashboard at `/admin`

## 🎨 Customize Your Site

### Change Product Price

In `.env.local`:
```
NEXT_PUBLIC_PRODUCT_PRICE=2500
```

### Add Product Images

1. Add images to `/public/images/`
2. Edit [components/Product.tsx](components/Product.tsx)
3. Uncomment the Image components

### Change Brand Name

Search and replace "Lifting Social" across the project.

## 📊 View Orders

Go to [http://localhost:3000/admin](http://localhost:3000/admin)

Password: Set in `.env.local` as `ADMIN_PASSWORD`

## 🚀 Deploy

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

## ❓ Need Help?

Check [README.md](README.md) for detailed documentation.
