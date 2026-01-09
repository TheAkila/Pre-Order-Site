import { NextResponse } from 'next/server';

export async function GET() {
  console.log('Test API endpoint called');
  
  const testData = {
    message: 'Test API is working',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    firebaseConfigCheck: {
      hasApiKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      hasAuthDomain: !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      hasProjectId: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    },
    serverInfo: {
      platform: process.platform,
      nodeVersion: process.version,
      region: process.env.VERCEL_REGION || 'local',
    }
  };

  console.log('Returning test data:', testData);
  
  return NextResponse.json(testData);
}