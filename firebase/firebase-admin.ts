import { credential} from "firebase-admin";
import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

if(!process.env.PROJECT_ID || !process.env.CLIENT_EMAIL || !process.env.PRIVATE_KEY) {
  throw new Error("Missing Firebase admin environment variables");
}

const adminCredentials = {
  credential: credential.cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
};

const firebaseAdminApp = getApps().length === 0 ? initializeApp(adminCredentials) : getApp();
export const admindb = getFirestore(firebaseAdminApp);
