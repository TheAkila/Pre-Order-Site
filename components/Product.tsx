'use client';

import { Calendar, Tag } from 'lucide-react';

export default function Product() {
  return (
    <section id="product" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-black mb-2 sm:mb-3 md:mb-4 px-2">
            The Drop
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-3 sm:px-4 leading-relaxed">
            Premium quality athletic wear. Limited quantity. Designed for champions.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Front View Card */}
          <div className="group bg-slate-50 rounded-3xl overflow-hidden card-hover">
            <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-slate-400 mb-2">
                    <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-body text-sm text-slate-500">Front View Mockup</p>
                </div>
              </div>
              {/* Replace with actual image */}
              {/* <Image 
                src="/images/tshirt-front.jpg" 
                alt="T-shirt front view"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              /> */}
            </div>
            <div className="p-6">
              <p className="font-body text-sm font-medium text-slate-600 text-center">FRONT VIEW</p>
            </div>
          </div>

          {/* Back View Card */}
          <div className="group bg-slate-50 rounded-3xl overflow-hidden card-hover">
            <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-slate-400 mb-2">
                    <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-body text-sm text-slate-500">Back View Mockup</p>
                </div>
              </div>
              {/* Replace with actual image */}
              {/* <Image 
                src="/images/tshirt-back.jpg" 
                alt="T-shirt back view"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              /> */}
            </div>
            <div className="p-6">
              <p className="font-body text-sm font-medium text-slate-600 text-center">BACK VIEW</p>
            </div>
          </div>
        </div>

        {/* Price & Deadline Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center">
                <Tag className="w-5 h-5 text-brand-red" />
              </div>
              <p className="font-body text-sm font-medium text-slate-600">PRICE</p>
            </div>
            <p className="font-heading text-4xl font-bold text-brand-black">
              LKR {(parseInt(process.env.NEXT_PUBLIC_PRODUCT_PRICE || '2500')).toLocaleString()}
            </p>
            <p className="font-body text-sm text-slate-500 mt-2">Per unit · Limited stock</p>
          </div>

          <div className="bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <p className="font-body text-sm font-medium text-white/90">PRE-ORDER CLOSES</p>
            </div>
            <p className="font-heading text-3xl font-bold" suppressHydrationWarning>
              {typeof window !== 'undefined' 
                ? new Date(process.env.NEXT_PUBLIC_PREORDER_CLOSES || '2026-01-31').toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })
                : 'January 31, 2026'
              }
            </p>
            <p className="font-body text-sm text-white/80 mt-2">Limited time offer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
