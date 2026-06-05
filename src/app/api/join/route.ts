import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, profession, organization } =
    await req.json();

  await resend.emails.send({
    from: "Kona Cafe <onboarding@resend.dev>",
    to: "kona.spaces@gmail.com",
    subject: "New Membership Request — Kona Cafe Society",
    html: `
      <h2>New Membership Request</h2>
      <table>
        <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Profession</strong></td><td>${profession}</td></tr>
        <tr><td><strong>Organization</strong></td><td>${organization}</td></tr>
      </table>
    `,
  });

  return NextResponse.json({ ok: true });
}
