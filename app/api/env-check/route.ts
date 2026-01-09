import { NextResponse } from 'next/server';

export async function GET() {
  console.log('Environment check API called');
  
  const envCheck = {
    message: 'Environment variables check',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
    region: process.env.VERCEL_REGION,
    deployment: process.env.VERCEL_URL,
    firebase: {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'Present' : 'Missing',
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'Present' : 'Missing', 
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'Missing',
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? 'Present' : 'Missing',
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? 'Present' : 'Missing',
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? 'Present' : 'Missing',
    },
    payhere: {
      merchantId: process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID ? 'Present' : 'Missing',
      merchantSecret: process.env.PAYHERE_MERCHANT_SECRET ? 'Present' : 'Missing',
      mode: process.env.NEXT_PUBLIC_PAYHERE_MODE || 'Missing'
    },
    admin: {
      password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD ? 'Present' : 'Missing'
    },
    counts: {
      totalEnvVars: Object.keys(process.env).length,
      nodeEnvVars: Object.keys(process.env).filter(key => key.startsWith('NODE_')).length,
      vercelEnvVars: Object.keys(process.env).filter(key => key.startsWith('VERCEL_')).length,
      nextEnvVars: Object.keys(process.env).filter(key => key.startsWith('NEXT_')).length,
      firebaseEnvVars: Object.keys(process.env).filter(key => key.includes('FIREBASE')).length,
    }
  };

  console.log('Environment check results:', envCheck);
  
  return NextResponse.json(envCheck);
}