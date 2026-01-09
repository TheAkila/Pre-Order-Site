import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

console.log('Firebase config check:', {
  hasApiKey: !!firebaseConfig.apiKey,
  hasAuthDomain: !!firebaseConfig.authDomain,
  hasProjectId: !!firebaseConfig.projectId,
  projectId: firebaseConfig.projectId,
  environment: process.env.NODE_ENV
});

// Validate required Firebase environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN', 
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
  console.error('Missing Firebase environment variables:', missingVars);
  throw new Error(`Missing required Firebase environment variables: ${missingVars.join(', ')}`);
}

// Initialize Firebase
let app: FirebaseApp;
let db: Firestore;

try {
  if (!getApps().length) {
    console.log('Initializing Firebase app...');
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log('Firebase initialized successfully');
  } else {
    console.log('Using existing Firebase app...');
    app = getApps()[0];
    db = getFirestore(app);
  }
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw error;
}

export { app, db };
