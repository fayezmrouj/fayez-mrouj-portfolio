import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // In production this would persist to a database or send an email.
    console.log("[contact] message received:", {
      name,
      email,
      subject,
      message: message?.slice(0, 200),
      at: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message:
        "Thank you for reaching out. I will respond to your message within 48 hours.",
    });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
