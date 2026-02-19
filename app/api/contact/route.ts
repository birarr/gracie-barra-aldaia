import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  console.log("Nuevo contacto:", data);

  // Aquí puedes integrar:
  // - Resend
  // - Nodemailer
  // - Base de datos
  // - CRM

  return NextResponse.json({ success: true });
}
