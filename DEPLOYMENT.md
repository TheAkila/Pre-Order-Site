# Deployment Checklist

## Pre-Deployment

- [ ] Set up Firebase project
- [ ] Create Firestore database
- [ ] Configure Firestore security rules
- [ ] Set up PayHere merchant account
- [ ] Get PayHere sandbox credentials
- [ ] Add product images to `/public/images/`
- [ ] Test payment flow locally
- [ ] Set admin password

## Vercel Deployment

- [ ] Push code to GitHub
- [ ] Connect repository to Vercel
- [ ] Add all environment variables
- [ ] Deploy to production
- [ ] Test production URL

## Post-Deployment

- [ ] Configure PayHere IPN URL in PayHere dashboard
- [ ] Test complete payment flow on production
- [ ] Verify order creation in Firebase
- [ ] Test admin dashboard access
- [ ] Test CSV export
- [ ] Configure custom domain (if applicable)
- [ ] Set up PayHere live credentials (when ready)
- [ ] Update `NEXT_PUBLIC_PAYHERE_MODE` to 'live'

## Marketing

- [ ] Share pre-order link on Instagram
- [ ] Add link to Instagram bio
- [ ] Create Instagram stories
- [ ] Post countdown to pre-order closing
- [ ] Monitor orders in admin dashboard

## Firestore Security Rules

Add these rules to your Firebase console:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /orders/{orderId} {
      // Allow creating orders from client
      allow create: if true;
      
      // Allow reading own orders (optional)
      allow read: if true;
      
      // Prevent updates from client (only server can update via IPN)
      allow update: if false;
      allow delete: if false;
    }
  }
}
```

## Environment Variables Checklist

### Required for Production

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_PAYHERE_MERCHANT_ID=
PAYHERE_MERCHANT_SECRET=
NEXT_PUBLIC_PAYHERE_MODE=sandbox
ADMIN_PASSWORD=
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_PRODUCT_PRICE=2500
NEXT_PUBLIC_PREORDER_CLOSES=2026-01-31
```

## Testing Checklist

- [ ] Test on mobile (iOS)
- [ ] Test on mobile (Android)
- [ ] Test on desktop
- [ ] Test form validation
- [ ] Test payment success flow
- [ ] Test payment cancel flow
- [ ] Test admin login
- [ ] Test order filtering
- [ ] Test CSV export
- [ ] Test with different sizes
- [ ] Test with different quantities
