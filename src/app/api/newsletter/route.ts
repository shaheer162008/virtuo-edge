import { NextResponse } from 'next/server';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Validate email
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // TODO: Integrate with your email service provider
        // Examples: Mailchimp, SendGrid, ConvertKit, Resend, etc.
        // For now, we'll just log it and save to a file/database
        
        console.log('Newsletter subscription:', {
            email,
            timestamp: new Date().toISOString(),
        });

        // In production, you would:
        // 1. Save to database
        // 2. Send to email marketing service
        // 3. Send confirmation email
        
        // Example with a hypothetical service:
        // await emailService.subscribe({ email });

        return NextResponse.json(
            { 
                success: true, 
                message: 'Successfully subscribed to newsletter!' 
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Failed to subscribe. Please try again.' },
            { status: 500 }
        );
    }
}
