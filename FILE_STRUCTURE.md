# Project File Structure

```
Pre-Order-Site/
│
├── 📁 app/                          # Next.js App Router
│   ├── 📁 admin/                    # Admin Dashboard
│   │   └── page.tsx                 # Admin page component
│   │
│   ├── 📁 api/                      # API Routes
│   │   ├── 📁 orders/
│   │   │   └── route.ts             # Order CRUD endpoints
│   │   │
│   │   └── 📁 payment/
│   │       └── 📁 payhere/
│   │           ├── route.ts         # Payment initiation
│   │           └── 📁 notify/
│   │               └── route.ts     # PayHere IPN handler
│   │
│   ├── 📁 cancel/                   # Payment Cancel Page
│   │   └── page.tsx
│   │
│   ├── 📁 fonts/                    # Font files
│   │   ├── GeistVF.woff
│   │   └── GeistMonoVF.woff
│   │
│   ├── 📁 success/                  # Payment Success Page
│   │   └── page.tsx
│   │
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Home page
│   └── globals.css                  # Global styles
│
├── 📁 components/                   # React Components
│   ├── Hero.tsx                     # Hero section
│   ├── Product.tsx                  # Product showcase
│   ├── Details.tsx                  # Product details & size chart
│   ├── OrderForm.tsx                # Pre-order form
│   └── Footer.tsx                   # Footer
│
├── 📁 lib/                          # Utilities & Config
│   └── firebase.ts                  # Firebase initialization
│
├── 📁 types/                        # TypeScript Types
│   └── order.ts                     # Order type definitions
│
├── 📁 public/                       # Static Assets
│   └── 📁 images/                   # Product images (to be added)
│       ├── tshirt-front.jpg         # ⚠️ Add this
│       └── tshirt-back.jpg          # ⚠️ Add this
│
├── 📁 .git/                         # Git repository
│
├── 📄 Configuration Files
│   ├── .env.example                 # Environment variables template
│   ├── .env.local                   # ⚠️ Create this with your credentials
│   ├── .eslintrc.json               # ESLint configuration
│   ├── .gitignore                   # Git ignore rules
│   ├── firestore.rules              # Firestore security rules
│   ├── next.config.ts               # Next.js configuration
│   ├── package.json                 # NPM dependencies
│   ├── postcss.config.mjs           # PostCSS configuration
│   ├── tailwind.config.ts           # Tailwind CSS configuration
│   ├── tsconfig.json                # TypeScript configuration
│   └── vercel.json                  # Vercel deployment config
│
└── 📄 Documentation Files
    ├── START_HERE.md                # 👈 START WITH THIS
    ├── QUICKSTART.md                # Quick setup guide
    ├── README.md                    # Complete documentation
    ├── SETUP_CHECKLIST.md           # Setup checklist
    ├── DEPLOYMENT.md                # Deployment guide
    └── PROJECT_SUMMARY.md           # Project overview

```

## 📊 File Statistics

- **Total TypeScript/TSX files**: 16
- **Total components**: 5
- **Total API routes**: 3
- **Total pages**: 4 (Home, Success, Cancel, Admin)
- **Documentation files**: 6

## 🎯 Key Files to Understand

### Core Application Files

1. **`app/page.tsx`** - Main landing page
   - Imports all components
   - Single-scroll design

2. **`components/OrderForm.tsx`** - Pre-order form
   - Form validation
   - Creates order via API
   - Redirects to payment

3. **`app/api/orders/route.ts`** - Order management
   - POST: Create new order
   - GET: Fetch all orders

4. **`app/api/payment/payhere/route.ts`** - Payment gateway
   - Generates PayHere form
   - Auto-submits to PayHere

5. **`app/api/payment/payhere/notify/route.ts`** - Payment webhook
   - Receives PayHere IPN
   - Updates order status

6. **`app/admin/page.tsx`** - Admin dashboard
   - View all orders
   - Filter and export

### Configuration Files

1. **`.env.example`** - Copy to `.env.local` and fill in
2. **`firestore.rules`** - Deploy to Firebase console
3. **`vercel.json`** - Vercel deployment settings

## 🔄 Data Flow

```
User Form Submission
        ↓
Create Order (PENDING_PAYMENT)
        ↓
Redirect to PayHere
        ↓
User Completes Payment
        ↓
PayHere Sends IPN
        ↓
Update Order Status (PAID/CANCELLED)
        ↓
Redirect User to Success/Cancel Page
```

## 📱 Component Hierarchy

```
app/layout.tsx (Root)
├── app/page.tsx (Home)
│   ├── Hero
│   ├── Product
│   ├── Details
│   ├── OrderForm
│   └── Footer
│
├── app/success/page.tsx
│
├── app/cancel/page.tsx
│
└── app/admin/page.tsx
```

## ⚠️ Files You Need to Create/Update

1. **`.env.local`** - Copy from `.env.example` and add your credentials
2. **`/public/images/tshirt-front.jpg`** - Add T-shirt front mockup
3. **`/public/images/tshirt-back.jpg`** - Add T-shirt back mockup
4. **`components/Product.tsx`** - Uncomment Image components after adding images

## ✅ Everything Else is Ready!

All code files are complete and production-ready. Just configure and deploy!
