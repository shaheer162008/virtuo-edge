import * as admin from "firebase-admin";

const serviceAccountJSON = JSON.parse(process.env.SERVICE_ACCOUNT || '{}');
const firebaseAdmin = admin.apps.length?admin.app():admin.initializeApp({
  credential: admin.credential.cert(serviceAccountJSON || "")
});

export const admindb = firebaseAdmin.firestore();