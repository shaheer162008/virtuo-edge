import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { admindb } from '../../../../firebase/firebase-admin';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADRESS,
    pass: process.env.PASSWORD,
  },
});

const datetime = new Date().getFullYear();

// Email template for client
const clientEmailTemplate = (name: string,time:string) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #0066cc; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .footer { background-color: #333; color: white; padding: 15px; border-radius: 0 0 5px 5px; text-align: center; }
        .highlight { color: #0066cc; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Consultation Request Received ✓</h2>
        </div>
        <div class="content">
          <p>Hi <span class="highlight">${name}</span>,</p>
          <p>Thank you for booking a consultation with us! We have received your request and our team will review it shortly.</p>
          <p><strong>What happens next?</strong></p>
          <ul>
            <li>Our team will review your details within 24 hours</li>
            <li>We will send you a confirmation email for your booked ${time} time slots</li>
            <li>You will receive a calendar invite for your scheduled consultation</li>
          </ul>
          <p>If you have any questions in the meantime, feel free to reach out to us.</p>
          <p>Best regards,<br><span class="highlight">Nexiler Team</span></p>
        </div>
        <div class="footer">
          <p>&copy; ${datetime} Nexiler. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
`;

// Email template for admin/developer
const adminEmailTemplate = (data: any) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #ff6b6b; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .footer { background-color: #333; color: white; padding: 15px; border-radius: 0 0 5px 5px; text-align: center; }
        table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        table th { background-color: #f0f0f0; padding: 10px; text-align: left; border: 1px solid #ddd; font-weight: bold; }
        table td { padding: 10px; border: 1px solid #ddd; }
        .label { font-weight: bold; color: #333; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Consultation Booking 📌</h2>
        </div>
        <div class="content">
          <p>A new consultation request has been submitted. Here are the details:</p>
          <table>
            <tr>
              <th colspan="2">Client Information</th>
            </tr>
            <tr>
              <td class="label">Name:</td>
              <td>${data.name}</td>
            </tr>
            <tr>
              <td class="label">Email:</td>
              <td>${data.email}</td>
            </tr>
            <tr>
              <td class="label">Phone:</td>
              <td>${data.phone}</td>
            </tr>
            <tr>
              <th colspan="2">Consultation Details</th>
            </tr>
            <tr>
              <td class="label">Service:</td>
              <td>${data.service}</td>
            </tr>
            <tr>
              <td class="label">Budget:</td>
              <td>${data.budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td class="label">Preferred Date:</td>
              <td>${data.date || 'Not specified'}</td>
            </tr>
            <tr>
              <td class="label">Preferred Time:</td>
              <td>${data.time || 'Not specified'}</td>
            </tr>
            <tr>
              <td class="label">Timezone:</td>
              <td>${data.timezone || 'Not specified'} (UTC ${data.timezoneOffset})</td>
            </tr>
            <tr>
              <th colspan="2">Message</th>
            </tr>
            <tr>
              <td colspan="2">${data.message || 'No message provided'}</td>
            </tr>
            <tr>
              <td class="label">Submitted At:</td>
              <td>${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <p><strong>Action Required:</strong> Please contact the client within 24 hours to confirm the consultation.</p>
        </div>
        <div class="footer">
          <p>&copy; ${datetime} Nexiler. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, date, time, timezone, timezoneOffset, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify environment variables
    if (!process.env.EMAIL_ADRESS || !process.env.PASSWORD) {
      console.error('Missing email configuration in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Prepare consultation data
    const consultationData = {
      name,
      email,
      phone,
      service,
      budget: budget || '',
      preferredDate: date || '',
      preferredTime: time || '',
      clientTimezone: timezone || '',
      timezoneOffset: timezoneOffset || '',
      message: message || '',
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    // Save to Firestore
    const consultationsRef = admindb.collection('consultations');
    const docRef = await consultationsRef.add(consultationData);

    // Send confirmation email to client
    await transporter.sendMail({
      from: "no-reply@nexiler.tech",
      to: email,
      subject: 'Consultation Request Received - Nexiler',
      html: clientEmailTemplate(name,time),
    });

    // Send notification email to admin/developer
    await transporter.sendMail({
      from: "no-reply@nexiler.tech",
      to: "info@nexiler.tech",
      subject: `New Consultation Booking - ${name}`,
      html: adminEmailTemplate(consultationData),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Consultation booked successfully. We will contact you within 24 hours.',
        consultationId: docRef.id,
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
