# 🎨 Lifting Social - UI/UX Design System

## Overview
Modern, professional hub-style design system following flat aesthetic principles with high information density and clarity. Built for desktop and mobile responsiveness.

---

## 🎨 Color Palette

### Primary Brand Color
- **Deep Red**: `#D00000` (Primary CTA, active states, branding)
  - Used in: Buttons, links, accents, highlights
  - Tailwind: `brand-red`

### Supporting Colors
- **Red Dark**: `#9D0208` (Hover states)
  - Tailwind: `brand-red-dark`
- **Red Light**: `#DC2F02` (Gradients)
  - Tailwind: `brand-red-light`

### Backgrounds
- **Primary**: `#FFFFFF` (White)
  - Tailwind: `bg-white`
- **Secondary**: `#F8FAFC` (Slate 50)
  - Tailwind: `bg-slate-50`
- **Tertiary**: `#F1F5F9` (Slate 100)
  - For cards and sections

### Text Colors
- **Headings**: `#0F172A` (Slate 900)
  - Tailwind: `text-slate-900`
- **Body Text**: `#475569` (Slate 600)
  - Tailwind: `text-slate-600`
- **Meta/Labels**: `#94A3B8` (Slate 400)
  - Tailwind: `text-slate-400`

### Borders
- **Subtle**: `#E2E8F0` (Slate 200)
  - Tailwind: `border-slate-200`
- **Transparent**: For seamless inputs
  - Tailwind: `border-transparent`

---

## 📝 Typography System

### Font Families

#### Headings - Outfit (Geometric Sans-Serif)
- **Usage**: Bold, impactful titles and section headers
- **Font Weight**: 700 (Bold)
- **Variable**: `--font-outfit`
- **Class**: `font-heading`

**Examples**:
```tsx
<h1 className="font-heading text-6xl font-bold">LIFTING SOCIAL</h1>
<h2 className="font-heading text-4xl font-bold">The Drop</h2>
```

#### Body - IBM Plex Sans (Technical Sans-Serif)
- **Usage**: Long-form content, descriptions, paragraphs
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semibold)
- **Variable**: `--font-ibm-plex`
- **Class**: `font-body`

**Examples**:
```tsx
<p className="font-body text-lg text-slate-600">
  Built for Those Who Lift. Premium quality athletic wear.
</p>
```

#### UI Elements - Inter (Standard Sans-Serif)
- **Usage**: Navigation, buttons, labels, metadata
- **Font Weights**: 400, 500, 600, 700
- **Variable**: `--font-inter`
- **Class**: `font-sans` (default)

**Examples**:
```tsx
<button className="font-sans font-medium">Reserve Your Tee</button>
<label className="font-sans text-sm font-medium">Full Name</label>
```

### Typography Scale

```
- Text 6XL: 3.75rem (60px) - Hero titles
- Text 5XL: 3rem (48px) - Page titles
- Text 4XL: 2.25rem (36px) - Section headers
- Text 3XL: 1.875rem (30px) - Card titles
- Text 2XL: 1.5rem (24px) - Subheadings
- Text XL: 1.25rem (20px) - Large body
- Text LG: 1.125rem (18px) - Regular body
- Text Base: 1rem (16px) - Standard text
- Text SM: 0.875rem (14px) - Labels, metadata
- Text XS: 0.75rem (12px) - Small labels
```

---

## 🎯 Visual Style

### Rounded Corners
- **Small Elements**: `rounded-xl` (0.75rem) - Inputs, buttons, small cards
- **Medium Elements**: `rounded-2xl` (1rem) - Cards, containers
- **Large Elements**: `rounded-3xl` (1.5rem) - Major sections, hero cards

### Shadows
- **Brand Shadow**: `shadow-brand` - Standard brand elevation
- **Brand Shadow Large**: `shadow-brand-lg` - Enhanced brand elevation
- **Implementation**: Colored shadows using brand red with 20% opacity

```css
shadow-brand: 0 10px 15px -3px rgba(208, 0, 0, 0.2);
shadow-brand-lg: 0 20px 25px -5px rgba(208, 0, 0, 0.2);
```

### Borders
- **Minimalist Approach**: Border usage is minimal
- **Separators**: `border-b` for dividing sections
- **Forms**: Seamless design with light gray backgrounds
- **Hover States**: Transition to brand-red borders

---

## 📐 Layout & Structure

### Global Container
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

- **Max Width**: `max-w-7xl` (1280px)
- **Responsive Padding**:
  - Mobile: `px-4` (1rem)
  - Tablet: `sm:px-6` (1.5rem)
  - Desktop: `lg:px-8` (2rem)

### Grid System
```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
  {/* 12-column grid for complex layouts */}
</div>
```

### Sidebar Layout
```tsx
<div className="grid lg:grid-cols-12 gap-8">
  <aside className="lg:col-span-4">{/* Meta info */}</aside>
  <main className="lg:col-span-8">{/* Main content */}</main>
</div>
```

---

## 🧩 Component Specifications

### Cards

#### Standard Card
```tsx
<div className="bg-white rounded-2xl border border-slate-200 p-8 card-hover">
  {/* Content */}
</div>
```

#### Feature Card
```tsx
<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-red transition-all duration-300 card-hover">
  <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red mb-6">
    <Icon size={28} strokeWidth={1.5} />
  </div>
  <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Title</h3>
  <p className="font-body text-slate-600">Description</p>
</div>
```

#### Gradient Card
```tsx
<div className="bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl p-8 text-white">
  {/* Content */}
</div>
```

### Forms (Seamless Style)

#### Form Container
```tsx
<div className="bg-slate-50 rounded-3xl p-8 sm:p-12">
  {/* Form content */}
</div>
```

#### Input Field
```tsx
<div>
  <label className="flex items-center gap-2 font-body text-sm font-medium text-slate-700 mb-2">
    <Icon size={16} strokeWidth={2} />
    Field Label
  </label>
  <input
    type="text"
    className="input-seamless w-full"
    placeholder="Placeholder"
  />
</div>
```

#### Input Class Definition
```css
.input-seamless {
  @apply bg-slate-50 border-transparent px-4 py-3 rounded-xl text-slate-900 
         focus:outline-none focus:ring-2 focus:ring-brand-red transition-all duration-300;
}
```

### Buttons

#### Primary Button
```tsx
<button className="btn-primary">
  Reserve Your Tee
</button>
```

```css
.btn-primary {
  @apply bg-brand-red text-white px-8 py-4 rounded-xl font-medium 
         transition-all duration-300 hover:bg-brand-red-dark 
         shadow-brand hover:shadow-brand-lg;
}
```

#### Secondary Button
```tsx
<button className="btn-secondary">
  View Collection
</button>
```

```css
.btn-secondary {
  @apply border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl 
         font-medium transition-all duration-300 hover:border-brand-red 
         hover:text-brand-red;
}
```

### Icons
- **Library**: Lucide React
- **Stroke Width**: 1.5-2.5 (Thin to medium)
- **Size**: Typically 20-24px for buttons, 28-32px for features
- **Color**: Matches text or uses brand-red for accent

```tsx
import { ShoppingBag, User, Phone } from 'lucide-react';

<ShoppingBag size={20} strokeWidth={2.5} />
```

---

## 🎭 UX Behaviors

### Responsiveness
```tsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Collapses to single column on mobile */}
</div>
```

### Loading States
```tsx
<button disabled={isSubmitting} className="btn-primary">
  {isSubmitting ? (
    <>
      <Loader2 className="animate-spin" size={20} />
      Processing...
    </>
  ) : (
    'Submit'
  )}
</button>
```

### Transitions
```css
/* Smooth color transitions */
transition-colors duration-300

/* All properties */
transition-all duration-300

/* Hover lift effect */
.card-hover {
  @apply transition-all duration-300 hover:-translate-y-1 hover:shadow-xl;
}
```

---

## 📱 Responsive Breakpoints

```
- SM: 640px - Mobile landscape
- MD: 768px - Tablet portrait
- LG: 1024px - Tablet landscape / small desktop
- XL: 1280px - Desktop
- 2XL: 1536px - Large desktop
```

### Usage Pattern
```tsx
<div className="
  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
  px-4 sm:px-6 lg:px-8
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
  {/* Responsive content */}
</div>
```

---

## 🎨 Design Patterns

### Hero Section
- **Background**: Gradient with subtle pattern
- **Typography**: Large heading (6XL), medium tagline
- **CTAs**: Primary + Secondary buttons
- **Stats**: Border-left accent with brand-red

### Product Showcase
- **Cards**: Aspect ratio 4:5, rounded-3xl
- **Hover**: Scale effect (105%)
- **Info Cards**: Icon + Label + Value pattern

### Form Design
- **Container**: Light background, no border
- **Inputs**: Seamless style with focus ring
- **Labels**: Small, outside input, with icon
- **Validation**: Red accent for errors

### Information Cards
- **Icon Area**: Colored background (brand-red/10)
- **Content**: Heading + description pattern
- **Hover**: Border color transition

---

## 🎯 Accessibility

### Contrast Ratios
- **Text on White**: Slate-900 (AAA rated)
- **Body on White**: Slate-600 (AA rated)
- **White on Brand-Red**: (AAA rated)

### Focus States
- **Ring**: 2px solid brand-red
- **Offset**: Default browser offset
- **Visible**: Always visible on keyboard navigation

### Interactive Elements
- **Min Touch Target**: 44x44px (mobile)
- **Hover States**: Clear visual feedback
- **Loading States**: Spinner + text indication

---

## 💻 Implementation Notes

### Tailwind Configuration
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        red: '#D00000',
        'red-dark': '#9D0208',
        'red-light': '#DC2F02',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      heading: ['var(--font-outfit)'],
      body: ['var(--font-ibm-plex)'],
    },
  },
}
```

### Font Loading
```typescript
// app/layout.tsx
import { Inter, Outfit, IBM_Plex_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex" 
});
```

---

## ✨ Key Design Principles

1. **Clarity First**: Information is easy to find and digest
2. **Minimal Friction**: Seamless forms, clear CTAs
3. **Professional**: Clean, modern, trustworthy
4. **Responsive**: Mobile-first, works everywhere
5. **Brand-Forward**: Red accent drives attention
6. **Performance**: Fast load times, smooth transitions
7. **Accessible**: High contrast, clear focus states

---

## 🎪 Component Library

### Utility Classes
```css
.btn-primary { /* Primary action button */ }
.btn-secondary { /* Secondary action button */ }
.input-seamless { /* Form input field */ }
.card-hover { /* Card with hover effect */ }
```

### Common Patterns
```tsx
// Icon with label
<div className="flex items-center gap-2">
  <Icon size={16} />
  <span>Label</span>
</div>

// Badge
<div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 
                border border-brand-red/20 rounded-full">
  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
  <span className="text-sm font-medium text-brand-red">Badge Text</span>
</div>

// Stat Display
<div className="border-l-2 border-brand-red pl-4">
  <div className="font-heading text-3xl font-bold text-slate-900">100%</div>
  <div className="font-body text-sm text-slate-600">Label</div>
</div>
```

---

**Design System Version**: 1.0  
**Last Updated**: January 2026  
**Built For**: Lifting Social Pre-Order Platform

This design system ensures consistency, maintainability, and professional polish across the entire application.
