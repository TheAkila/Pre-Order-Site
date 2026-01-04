# Testing Guide

## 🧪 Complete Testing Checklist

### Phase 1: Local Development Testing

#### 1.1 Installation Test
```bash
cd /Users/akilanishan/Desktop/Projects/Pre-Order-Site
npm install
```
**Expected**: All dependencies install without errors

#### 1.2 Development Server Test
```bash
npm run dev
```
**Expected**: Server starts at http://localhost:3000

#### 1.3 Homepage Test
- [ ] Visit http://localhost:3000
- [ ] Hero section displays correctly
- [ ] Product section shows mockup placeholders
- [ ] Details section renders size chart
- [ ] Order form is visible
- [ ] Footer displays contact info
- [ ] All text is readable on dark background

#### 1.4 Responsive Design Test
Test on different screen sizes:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

**Check**: All elements stack properly on mobile

### Phase 2: Form Testing

#### 2.1 Form Validation
- [ ] Submit empty form → Should show validation errors
- [ ] Enter name only → Should require phone
- [ ] Enter phone only → Should require name
- [ ] Select each size (S, M, L, XL, XXL) → Should work
- [ ] Change quantity (1-10) → Price should update

#### 2.2 Form Submission
- [ ] Fill complete form with valid data
- [ ] Click "Pay & Reserve Your Tee"
- [ ] Check browser console for errors
- [ ] Should create order in Firebase
- [ ] Should redirect to PayHere

### Phase 3: Payment Flow Testing

#### 3.1 PayHere Sandbox Setup
Use these test cards:
- **Visa**: 4916217501611292
- **Mastercard**: 5123456789012346
- **CVV**: Any 3 digits
- **Expiry**: Any future date

#### 3.2 Successful Payment Test
- [ ] Complete form submission
- [ ] Redirected to PayHere sandbox
- [ ] Enter test card details
- [ ] Complete payment
- [ ] Redirected to success page
- [ ] Check Firebase: Order status should be "PAID"

#### 3.3 Cancelled Payment Test
- [ ] Complete form submission
- [ ] Redirected to PayHere sandbox
- [ ] Click "Cancel" or close window
- [ ] Redirected to cancel page
- [ ] Check Firebase: Order status should be "CANCELLED"

#### 3.4 Failed Payment Test
- [ ] Complete form submission
- [ ] Use invalid card number
- [ ] Payment should fail
- [ ] Redirected to cancel page

### Phase 4: Admin Dashboard Testing

#### 4.1 Admin Access
- [ ] Visit http://localhost:3000/admin
- [ ] Enter admin password
- [ ] Should display dashboard

#### 4.2 Order Display
- [ ] All orders display in table
- [ ] Order details are correct
- [ ] Payment status shows correct colors
  - Green = PAID
  - Yellow = PENDING_PAYMENT
  - Red = CANCELLED

#### 4.3 Filtering
- [ ] Filter by "All Orders"
- [ ] Filter by "Paid"
- [ ] Filter by "Pending Payment"
- [ ] Filter by "Cancelled"
- [ ] Statistics update correctly

#### 4.4 CSV Export
- [ ] Click "Export CSV" button
- [ ] CSV file downloads
- [ ] Open CSV in Excel/Google Sheets
- [ ] All order data is present and correct

### Phase 5: API Testing

#### 5.1 Test Order Creation
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone": "+94771234567",
    "size": "M",
    "quantity": 2
  }'
```
**Expected**: Returns order object with ID

#### 5.2 Test Order Retrieval
```bash
curl http://localhost:3000/api/orders
```
**Expected**: Returns array of orders

### Phase 6: Firebase Testing

#### 6.1 Firestore Connection
- [ ] Orders collection exists
- [ ] New orders appear in real-time
- [ ] Order documents have correct structure
- [ ] Timestamps are correct

#### 6.2 Security Rules
- [ ] Can create orders from client
- [ ] Cannot update orders from client
- [ ] Cannot delete orders from client
- [ ] Can read orders (adjust for production)

### Phase 7: Production Testing

#### 7.1 Pre-Deployment
- [ ] Run `npm run build`
- [ ] No build errors
- [ ] No TypeScript errors
- [ ] No ESLint errors

#### 7.2 Post-Deployment (Vercel)
- [ ] Production URL loads
- [ ] All pages accessible
- [ ] Forms work correctly
- [ ] PayHere redirects work
- [ ] IPN notifications received
- [ ] Orders update in Firebase
- [ ] Admin dashboard accessible

#### 7.3 IPN Testing
- [ ] Complete a sandbox payment on production
- [ ] Check Vercel logs for IPN hits
- [ ] Verify order status updated
- [ ] Check PayHere dashboard logs

### Phase 8: Cross-Browser Testing

Test on:
- [ ] Chrome (Desktop & Mobile)
- [ ] Safari (Desktop & Mobile)
- [ ] Firefox (Desktop)
- [ ] Edge (Desktop)

**Check**: All features work identically

### Phase 9: Performance Testing

#### 9.1 Lighthouse Audit
Run in Chrome DevTools:
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

#### 9.2 Load Testing
- [ ] Page loads in < 3 seconds
- [ ] Images load properly
- [ ] No console errors
- [ ] Smooth scrolling

### Phase 10: Security Testing

#### 10.1 Environment Variables
- [ ] No secrets in code
- [ ] All secrets in `.env.local`
- [ ] `.env.local` in `.gitignore`
- [ ] Vercel environment variables set

#### 10.2 Payment Security
- [ ] Hash verification works
- [ ] Cannot tamper with order amount
- [ ] IPN signature validated
- [ ] No payment data stored client-side

## 🐛 Common Issues & Solutions

### Issue: "Firebase not initialized"
**Solution**: Check `.env.local` has all Firebase credentials

### Issue: "PayHere redirect fails"
**Solution**: Verify merchant ID and secret in `.env.local`

### Issue: "IPN not updating orders"
**Solution**: Check Vercel logs, verify IPN URL in PayHere dashboard

### Issue: "Admin dashboard shows no orders"
**Solution**: Check Firebase connection, verify orders collection exists

### Issue: "Build fails"
**Solution**: 
```bash
rm -rf .next node_modules
npm install
npm run build
```

## ✅ Test Sign-Off

When all tests pass:
- [ ] Development testing complete
- [ ] Form testing complete
- [ ] Payment flow working
- [ ] Admin dashboard functional
- [ ] API endpoints working
- [ ] Firebase connected
- [ ] Production deployed
- [ ] IPN configured
- [ ] Cross-browser tested
- [ ] Performance optimized

**Ready for launch!** 🚀

## 📊 Test Data Examples

### Valid Test Orders

1. **Order 1**:
   - Name: "John Doe"
   - Phone: "+94771234567"
   - Size: "L"
   - Quantity: 1

2. **Order 2**:
   - Name: "Jane Smith"
   - Phone: "+94712345678"
   - Size: "M"
   - Quantity: 3

3. **Order 3**:
   - Name: "Mike Johnson"
   - Phone: "+94761234567"
   - Size: "XL"
   - Quantity: 2

### Invalid Test Cases

1. **Missing Name**:
   - Phone: "+94771234567"
   - Expected: Validation error

2. **Invalid Phone**:
   - Name: "Test"
   - Phone: "invalid"
   - Expected: Should still submit (add validation if needed)

3. **Zero Quantity**:
   - Quantity: 0
   - Expected: Validation error

## 🎯 Success Criteria

Your site is ready when:
- ✅ All checklist items pass
- ✅ No console errors
- ✅ Payment completes successfully
- ✅ Orders appear in admin dashboard
- ✅ Mobile experience is smooth
- ✅ Production deployment is stable

Happy testing! 🧪
