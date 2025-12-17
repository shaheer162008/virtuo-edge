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

// Nexiler brand colors
const BRAND = {
  primary: '#33BBCF',
  dark: '#00040F',
  darkAlt: '#0a1628',
  white: '#ffffff',
  gray: '#9ca3af',
};

// Professional email template for client confirmation
const clientEmailTemplate = (data: { name: string; date: string; time: string; service: string }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Consultation Confirmed - Nexiler</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: ${BRAND.dark}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              
              <!-- Header with Logo -->
              <tr>
                <td style="padding: 32px 40px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center">
                        <!-- Nexiler Logo -->
                        <div style="display: inline-flex; align-items: center; gap: 8px;">
                          <div style="width: 40px; height: 40px; background: linear-gradient(135deg, ${BRAND.primary}, #1a8a9a); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                            <span style="color: white; font-weight: bold; font-size: 20px;">N</span>
                          </div>
                          <span style="color: ${BRAND.white}; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Nexiler</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Success Icon -->
              <tr>
                <td style="padding: 40px 40px 20px; text-align: center;">
                  <div style="width: 80px; height: 80px; background: linear-gradient(135deg, ${BRAND.primary}20, ${BRAND.primary}10); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 40px;">✓</span>
                  </div>
                </td>
              </tr>

              <!-- Main Content -->
              <tr>
                <td style="padding: 0 40px 40px;">
                  <h1 style="color: ${BRAND.white}; font-size: 28px; font-weight: 700; margin: 0 0 16px; text-align: center;">
                    Consultation Request Received!
                  </h1>
                  <p style="color: ${BRAND.gray}; font-size: 16px; line-height: 1.6; margin: 0 0 32px; text-align: center;">
                    Hi <span style="color: ${BRAND.primary}; font-weight: 600;">${data.name}</span>, thank you for booking a consultation with us!
                  </p>

                  <!-- Booking Details Card -->
                  <div style="background: ${BRAND.darkAlt}; border-radius: 12px; padding: 24px; margin-bottom: 32px; border: 1px solid rgba(255,255,255,0.1);">
                    <h3 style="color: ${BRAND.white}; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 20px; opacity: 0.7;">
                      Your Booking Details
                    </h3>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                          <span style="color: ${BRAND.gray}; font-size: 14px;">📅 Date</span>
                        </td>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); text-align: right;">
                          <span style="color: ${BRAND.white}; font-size: 14px; font-weight: 600;">${data.date || 'To be confirmed'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                          <span style="color: ${BRAND.gray}; font-size: 14px;">🕐 Time</span>
                        </td>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); text-align: right;">
                          <span style="color: ${BRAND.white}; font-size: 14px; font-weight: 600;">${data.time || 'To be confirmed'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0;">
                          <span style="color: ${BRAND.gray}; font-size: 14px;">🎯 Service</span>
                        </td>
                        <td style="padding: 12px 0; text-align: right;">
                          <span style="color: ${BRAND.primary}; font-size: 14px; font-weight: 600;">${data.service}</span>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- What's Next -->
                  <div style="background: linear-gradient(135deg, ${BRAND.primary}15, ${BRAND.primary}05); border-radius: 12px; padding: 24px; border: 1px solid ${BRAND.primary}30;">
                    <h3 style="color: ${BRAND.white}; font-size: 16px; font-weight: 600; margin: 0 0 16px;">
                      ⚡ What happens next?
                    </h3>
                    <ul style="color: ${BRAND.gray}; font-size: 14px; line-height: 2; margin: 0; padding-left: 20px;">
                      <li>Our team will review your request within <strong style="color: ${BRAND.white};">24 hours</strong></li>
                      <li>You'll receive a calendar invite for your consultation</li>
                      <li>We'll prepare personalized recommendations for you</li>
                    </ul>
                  </div>
                </td>
              </tr>

              <!-- CTA Button -->
              <tr>
                <td style="padding: 0 40px 40px; text-align: center;">
                  <a href="https://nexiler.tech" style="display: inline-block; background: linear-gradient(135deg, ${BRAND.primary}, #1a8a9a); color: ${BRAND.white}; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                    Visit Our Website →
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 24px 40px; background: rgba(0,0,0,0.3); text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
                  <p style="color: ${BRAND.gray}; font-size: 12px; margin: 0 0 8px;">
                    Questions? Reply to this email or contact us at
                    <a href="mailto:contact@nexiler.tech" style="color: ${BRAND.primary}; text-decoration: none;">contact@nexiler.tech</a>
                  </p>
                  <p style="color: ${BRAND.gray}; font-size: 12px; margin: 0;">
                    © ${datetime} Nexiler. All rights reserved.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

// Professional email template for admin notification
const adminEmailTemplate = (data: any) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Consultation Booking - Nexiler</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: ${BRAND.dark}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              
              <!-- Header with Logo -->
              <tr>
                <td style="padding: 24px 40px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td>
                        <div style="display: inline-flex; align-items: center; gap: 8px;">
                          <div style="width: 32px; height: 32px; background: linear-gradient(135deg, ${BRAND.primary}, #1a8a9a); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                            <span style="color: white; font-weight: bold; font-size: 16px;">N</span>
                          </div>
                          <span style="color: ${BRAND.white}; font-size: 20px; font-weight: 700;">Nexiler</span>
                        </div>
                      </td>
                      <td style="text-align: right;">
                        <span style="background: #ef4444; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                          🔔 NEW BOOKING
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Alert Banner -->
              <tr>
                <td style="padding: 24px 40px;">
                  <div style="background: linear-gradient(135deg, #ef444420, #ef444410); border: 1px solid #ef444440; border-radius: 12px; padding: 20px; text-align: center;">
                    <h2 style="color: ${BRAND.white}; font-size: 24px; font-weight: 700; margin: 0 0 8px;">
                      📌 New Consultation Request
                    </h2>
                    <p style="color: ${BRAND.gray}; font-size: 14px; margin: 0;">
                      Submitted on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </td>
              </tr>

              <!-- Client Information -->
              <tr>
                <td style="padding: 0 40px 24px;">
                  <div style="background: ${BRAND.darkAlt}; border-radius: 12px; padding: 24px; border: 1px solid rgba(255,255,255,0.1);">
                    <h3 style="color: ${BRAND.primary}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 20px;">
                      👤 Client Information
                    </h3>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                          <span style="color: ${BRAND.gray}; font-size: 13px;">Name</span>
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: right;">
                          <span style="color: ${BRAND.white}; font-size: 14px; font-weight: 600;">${data.name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                          <span style="color: ${BRAND.gray}; font-size: 13px;">Email</span>
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: right;">
                          <a href="mailto:${data.email}" style="color: ${BRAND.primary}; font-size: 14px; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0;">
                          <span style="color: ${BRAND.gray}; font-size: 13px;">Phone/WhatsApp</span>
                        </td>
                        <td style="padding: 10px 0; text-align: right;">
                          <a href="https://wa.me/${data.phone?.replace(/[^0-9]/g, '')}" style="color: #25D366; font-size: 14px; text-decoration: none; font-weight: 600;">${data.phone}</a>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>

              <!-- Consultation Details -->
              <tr>
                <td style="padding: 0 40px 24px;">
                  <div style="background: ${BRAND.darkAlt}; border-radius: 12px; padding: 24px; border: 1px solid rgba(255,255,255,0.1);">
                    <h3 style="color: ${BRAND.primary}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 20px;">
                      📋 Consultation Details
                    </h3>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                          <span style="color: ${BRAND.gray}; font-size: 13px;">Service</span>
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: right;">
                          <span style="background: ${BRAND.primary}20; color: ${BRAND.primary}; padding: 4px 10px; border-radius: 4px; font-size: 13px; font-weight: 600;">${data.service}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                          <span style="color: ${BRAND.gray}; font-size: 13px;">Budget Range</span>
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: right;">
                          <span style="color: #10b981; font-size: 14px; font-weight: 600;">${data.budget || 'Not specified'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                          <span style="color: ${BRAND.gray}; font-size: 13px;">Preferred Date</span>
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: right;">
                          <span style="color: ${BRAND.white}; font-size: 14px;">${data.preferredDate || 'Not specified'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                          <span style="color: ${BRAND.gray}; font-size: 13px;">Preferred Time</span>
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: right;">
                          <span style="color: ${BRAND.white}; font-size: 14px;">${data.preferredTime || 'Not specified'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0;">
                          <span style="color: ${BRAND.gray}; font-size: 13px;">Timezone</span>
                        </td>
                        <td style="padding: 10px 0; text-align: right;">
                          <span style="color: ${BRAND.white}; font-size: 14px;">${data.clientTimezone || 'Not detected'} (${data.timezoneOffset || 'N/A'})</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>

              <!-- Message -->
              <tr>
                <td style="padding: 0 40px 24px;">
                  <div style="background: ${BRAND.darkAlt}; border-radius: 12px; padding: 24px; border: 1px solid rgba(255,255,255,0.1);">
                    <h3 style="color: ${BRAND.primary}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px;">
                      💬 Client Message
                    </h3>
                    <p style="color: ${BRAND.white}; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${data.message || 'No message provided'}</p>
                  </div>
                </td>
              </tr>

              <!-- Action Required -->
              <tr>
                <td style="padding: 0 40px 32px;">
                  <div style="background: linear-gradient(135deg, #f59e0b20, #f59e0b10); border: 1px solid #f59e0b40; border-radius: 12px; padding: 20px; text-align: center;">
                    <p style="color: #f59e0b; font-size: 14px; font-weight: 600; margin: 0;">
                      ⚡ ACTION REQUIRED: Contact client within 24 hours
                    </p>
                  </div>
                </td>
              </tr>

              <!-- Quick Actions -->
              <tr>
                <td style="padding: 0 40px 32px; text-align: center;">
                  <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, ${BRAND.primary}, #1a8a9a); color: ${BRAND.white}; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-right: 12px;">
                    📧 Reply via Email
                  </a>
                  <a href="https://wa.me/${data.phone?.replace(/[^0-9]/g, '')}" style="display: inline-block; background: #25D366; color: ${BRAND.white}; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                    💬 WhatsApp
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 20px 40px; background: rgba(0,0,0,0.3); text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
                  <p style="color: ${BRAND.gray}; font-size: 12px; margin: 0;">
                    © ${datetime} Nexiler. Internal notification.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
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
      subject: '✅ Consultation Request Received - Nexiler',
      html: clientEmailTemplate({ name, date, time, service }),
    });

    // Send notification email to admin/developer
    await transporter.sendMail({
      from: "no-reply@nexiler.tech",
      to: "contact@nexiler.tech",
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
