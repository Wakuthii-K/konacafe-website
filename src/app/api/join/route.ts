import { NextRequest, NextResponse } from "next/server";

const FORM_ACTION =
  "https://docs.google.com/forms/d/1Q2iY8YRAgV7-SB6Qsb5hvdRqYWJO-Mm962XdcERBJnk/formResponse";

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, profession, organization } =
    await req.json();

  const body = new URLSearchParams({
    "entry.1552753855": `${firstName} ${lastName}`.trim(),
    "entry.1313915263": email,
    "entry.102422525": profession,
    "entry.860978901": organization,
  });

  await fetch(FORM_ACTION, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  return NextResponse.json({ ok: true });
}
