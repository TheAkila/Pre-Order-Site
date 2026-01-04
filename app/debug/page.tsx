'use client';

import React from 'react';
import Link from 'next/link';

export default function DebugPage() {
  const envVars = {
    FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? '✓ Set' : '✗ Missing',
    FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? '✓ Set' : '✗ Missing',
    FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? '✓ Set' : '✗ Missing',
    FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? '✓ Set' : '✗ Missing',
    FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? '✓ Set' : '✗ Missing',
    FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? '✓ Set' : '✗ Missing',
    PAYHERE_MERCHANT_ID: process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID ? '✓ Set' : '✗ Missing',
    PAYHERE_MODE: process.env.NEXT_PUBLIC_PAYHERE_MODE || 'Not set',
    ADMIN_PASSWORD: process.env.NEXT_PUBLIC_ADMIN_PASSWORD ? '✓ Set' : '✗ Missing',
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'Not set',
    PRODUCT_PRICE: process.env.NEXT_PUBLIC_PRODUCT_PRICE || 'Not set',
    PREORDER_CLOSES: process.env.NEXT_PUBLIC_PREORDER_CLOSES || 'Not set',
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Environment Variables Debug</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Variable</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(envVars).map(([key, value]) => (
                <tr key={key} className="border-b">
                  <td className="py-2 font-mono text-sm">{key}</td>
                  <td className="py-2">
                    <span className={value.includes('✓') ? 'text-green-600' : 'text-red-600'}>
                      {value}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">API Test</h2>
          <button
            onClick={async () => {
              try {
                const response = await fetch('/api/orders');
                const data = await response.json();
                console.log('API Response:', data);
                alert(`API returned ${response.status}: ${JSON.stringify(data).slice(0, 100)}...`);
              } catch (err) {
                console.error('API Error:', err);
                alert(`API Error: ${err}`);
              }
            }}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
          >
            Test /api/orders
          </button>
        </div>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-bold mb-2">⚠️ Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>All variables should show &quot;✓ Set&quot;</li>
            <li>If any show &quot;✗ Missing&quot;, add them in Vercel Settings → Environment Variables</li>
            <li>After adding variables, redeploy your app</li>
            <li>Click &quot;Test /api/orders&quot; to verify API connectivity</li>
            <li>Check browser console for detailed errors</li>
          </ol>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-red-600 hover:underline">← Back to Home</Link>
          {' | '}
          <Link href="/admin" className="text-red-600 hover:underline">Admin Dashboard →</Link>
        </div>
      </div>
    </div>
  );
}
