# 🎯 Final Setup Checklist

## ✅ Code & Files (COMPLETED)

- [x] Next.js project structure
- [x] TypeScript configuration
- [x] Tailwind CSS setup
- [x] All pages created (Home, Success, Cancel, Admin)
- [x] All components created
- [x] API routes created
- [x] Firebase integration
- [x] PayHere integration
- [x] Type definitions
- [x] Documentation files

## 🔧 Configuration Needed (YOUR TASK)

### 1. Install Dependencies

```bash
cd /Users/akilanishan/Desktop/Projects/Pre-Order-Site
npm install
```

### 2. Set Up Firebase

- [ ] Go to https://console.firebase.google.com
- [ ] Create new project "Lifting Social Pre-Order"
- [ ] Add web app
- [ ] Create Firestore database (Start in test mode)
- [ ] Copy Firebase config values
- [ ] Deploy Firestore rules from `firestore.rules`

### 3. Set Up PayHere

- [ ] Sign up at https://www.payhere.lk
- [ ] Complete merchant registration
- [ ] Get sandbox credentials from dashboard
- [ ] Note down Merchant ID and Secret

### 4. Configure Environment

- [ ] Copy `.env.example` to `.env.local`
- [ ] Fill in Firebase credentials
- [ ] Fill in PayHere credentials
- [ ] Set admin password
- [ ] Set product price (default: 2500 LKR)
- [ ] Set pre-order closing date

### 5. Add Product Images

- [ ] Create folder `/public/images/`
- [ ] Add `tshirt-front.jpg` (T-shirt front mockup)
- [ ] Add `tshirt-back.jpg` (T-shirt back mockup)
- [ ] Update image references in `components/Product.tsx`

### 6. Test Locally

- [ ] Run `npm run dev`
- [ ] Test homepage loads
- [ ] Test form submission
- [ ] Test payment redirection (sandbox mode)
- [ ] Complete a test payment
- [ ] Verify order appears in Firebase
- [ ] Test admin dashboard at `/admin`
- [ ] Test CSV export

### 7. Deploy to Vercel

- [ ] Push code to GitHub
- [ ] Connect repository to Vercel
- [ ] Add all environment variables in Vercel dashboard
- [ ] Deploy
- [ ] Get production URL

### 8. Configure PayHere IPN

- [ ] Log in to PayHere dashboard
- [ ] Go to Settings → IPN/Webhooks
- [ ] Add IPN URL: `https://your-domain.vercel.app/api/payment/payhere/notify`
- [ ] Save settings

### 9. Test Production

- [ ] Visit production URL
- [ ] Test complete payment flow
- [ ] Verify IPN updates order status
- [ ] Test on mobile device
- [ ] Test on different browsers
- [ ] Test admin dashboard

### 10. Go Live

- [ ] Get PayHere live credentials (after approval)
- [ ] Update environment variables
- [ ] Change `NEXT_PUBLIC_PAYHERE_MODE` to `live`
- [ ] Update Firestore security rules
- [ ] Test with small real payment
- [ ] Share link on Instagram
- [ ] Monitor orders

## 📱 Marketing Checklist

- [ ] Add link to Instagram bio
- [ ] Create Instagram story announcement
- [ ] Post product photos
- [ ] Create countdown posts
- [ ] Share customer testimonials (after first orders)

## 🐛 Troubleshooting

### If Firebase doesn't connect:
1. Check all credentials in `.env.local`
2. Verify Firestore database is created
3. Check Firestore rules are deployed

### If PayHere fails:
1. Verify sandbox credentials
2. Check merchant ID matches
3. Review PayHere dashboard logs
4. Ensure IPN URL is correct

### If build fails:
1. Delete `.next` folder
2. Run `npm install` again
3. Check for TypeScript errors: `npm run lint`

## 📞 Support Resources

- Next.js Docs: https://nextjs.org/docs
- Firebase Docs: https://firebase.google.com/docs
- PayHere Docs: https://support.payhere.lk
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Docs: https://vercel.com/docs

## 🎉 You're All Set!

Once you complete this checklist, your pre-order site will be live and ready to accept orders.

**Remember**: Start with sandbox mode, test thoroughly, then switch to live payments.

Good luck with your launch! 🚀
