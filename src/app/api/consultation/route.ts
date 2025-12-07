import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, date, time, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send email notification to your team
    // 2. Send confirmation email to the client
    // 3. Store in database or CRM
    // 4. Integrate with calendar API (Google Calendar, Calendly, etc.)

    // For now, we'll just log it (in production, implement actual email/database logic)
    console.log('Consultation Booking:', {
      name,
      email,
      phone,
      company,
      service,
      budget,
      date,
      time,
      message,
      timestamp: new Date().toISOString(),
    });

    // Example: Send email using a service like Resend, SendGrid, or Nodemailer
    // await sendConsultationEmail({ name, email, ... });

    return NextResponse.json(
      { 
        success: true,
        message: 'Consultation booked successfully. We will contact you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Consultation API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
