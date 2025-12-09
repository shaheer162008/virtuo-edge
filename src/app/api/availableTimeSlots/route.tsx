import { NextResponse } from 'next/server';
import { admindb } from '../../../../firebase/firebase-admin';

export async function GET() {
  try {
    const bookedTimessnapshot = await admindb.collection('consultations').get()

    if (bookedTimessnapshot.empty) {
      return NextResponse.json({ times: [] }, { status: 200 });
    }

    const bookedTimes = bookedTimessnapshot.docs.map(doc => {
      const data = doc.data();
      return data.preferredTime;
    }).filter(time => time != null); 

    return NextResponse.json({ times: bookedTimes }, { status: 200 });

  } catch (error) {
    console.error("Error fetching booked times:", error);
    // Return a 500 Internal Server Error response
    return NextResponse.json(
      { error: "Failed to fetch booked times" },
      { status: 500 }
    );
  }
}