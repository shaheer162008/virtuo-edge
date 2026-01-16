import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { admindb } from "../../../../firebase/firebase-admin";

const datetime = new Date().getFullYear();

// Virtuo Edge brand colors
const BRAND = {
  primary: '#33BBCF',
  accent: '#135ACD',
  dark: '#00040F',
  darkAlt: '#0a1628',
  white: '#ffffff',
  gray: '#9ca3af',
};

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { message: "Invalid email" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existing = await admindb
      .collection("newsletterEmails")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (!existing.empty) {
      return NextResponse.json(
        { message: "Check your inbox. If you didn't receive an email, it means you're already subscribed to our newsletter." },
        { status: 200 }
      );
    }

    // Save email to Firestore
    await admindb.collection("newsletterEmails").add({
      email,
      subscribedAt: new Date(),
      source: "website-newsletter",
    });

    // ---- SEND PROMOTIONAL EMAIL ----
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADRESS,
      pass: process.env.PASSWORD,
    },
  });

    await transporter.sendMail({
      from: "info@virtuoedge.tech",
      to: email,
      subject: "Welcome to Our Newsletter 🚀",
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Virtuo Edge Newsletter</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: ${BRAND.dark}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header with Logo -->
                    <tr>
                      <td style="padding: 32px 40px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <span style="color: ${BRAND.white}; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Virtuo Edge</span>
                      </td>
                    </tr>

                    <!-- Welcome Icon -->
                    <tr>
                      <td style="padding: 40px 40px 20px; text-align: center;">
                        <div style="width: 80px; height: 80px; background: linear-gradient(135deg, ${BRAND.accent}20, ${BRAND.accent}10); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; color: ${BRAND.accent};">
                          <span style="font-size: 40px;">🎉</span>
                        </div>
                      </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                      <td style="padding: 0 40px 40px;">
                        <h1 style="color: ${BRAND.white}; font-size: 28px; font-weight: 700; margin: 0 0 16px; text-align: center;">
                          Thanks for Subscribing!
                        </h1>
                        <p style="color: ${BRAND.gray}; font-size: 16px; line-height: 1.6; margin: 0 0 32px; text-align: center;">
                          Welcome to the <span style="color: ${BRAND.accent}; font-weight: 600;">Virtuo Edge</span> newsletter community
                        </p>

                        <!-- What You'll Get Card -->
                        <div style="background: ${BRAND.darkAlt}; border-radius: 12px; padding: 24px; margin-bottom: 32px; border: 1px solid ${BRAND.accent}30;">
                          <h3 style="color: ${BRAND.accent}; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 20px;">
                            📧 What You'll Receive
                          </h3>
                          <ul style="color: ${BRAND.gray}; font-size: 14px; line-height: 2; margin: 0; padding-left: 20px;">
                            <li>✨ AI automation solutions & tips</li>
                            <li>💻 Web & app development insights</li>
                            <li>🎯 Exclusive offers & industry trends</li>
                            <li>📊 Business growth strategies</li>
                          </ul>
                        </div>

                        <!-- Next Steps -->
                        <div style="background: linear-gradient(135deg, ${BRAND.accent}15, ${BRAND.accent}05); border-radius: 12px; padding: 24px; border: 1px solid ${BRAND.accent}30;">
                          <h3 style="color: ${BRAND.white}; font-size: 16px; font-weight: 600; margin: 0 0 16px;">
                            ⚡ What happens next?
                          </h3>
                          <p style="color: ${BRAND.gray}; font-size: 14px; line-height: 1.7; margin: 0;">
                            You'll start receiving curated updates from our team. If you're looking to automate or scale your business, feel free to reply to any email – we'd love to help!
                          </p>
                        </div>
                      </td>
                    </tr>

                    <!-- CTA Button -->
                    <tr>
                      <td style="padding: 0 40px 40px; text-align: center;">
                        <a href="https://virtuoedge.tech" style="display: inline-block; background: linear-gradient(135deg, ${BRAND.accent}, #1a5fc9); color: ${BRAND.white}; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                          Explore Our Services →
                        </a>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding: 24px 40px; background: rgba(0,0,0,0.3); text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
                        <p style="color: ${BRAND.gray}; font-size: 12px; margin: 0 0 8px;">
                          Questions? Contact us at
                          <a href="mailto:info@virtuoedge.tech" style="color: ${BRAND.accent}; text-decoration: none;">info@virtuoedge.tech</a>
                        </p>
                        <p style="color: ${BRAND.gray}; font-size: 12px; margin: 0;">
                          © ${datetime} Virtuo Edge. All rights reserved.
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Subscribed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
