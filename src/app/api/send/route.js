import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { email, subject, name, phone, service, details } = await req.json();
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: email,
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>New message submitted:</p>
                    <p>Name: {name}</p>
                    <p>Phone: {phone}</p>
                    <p>Service: {service}</p>
                    <p>Details: {details}</p>
                </>
            ),
        });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
