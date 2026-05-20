// Example Twilio backend for Next.js/Vercel.
// This file is included as a reference. In a Vite-only static deployment,
// you will need to deploy this as a serverless function or convert the site to Next.js.

import twilio from "twilio";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, phone, address, service, message, source } = req.body;
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  const body = `New lead from ${source}\nName: ${name}\nPhone: ${phone}\nAddress/City: ${address}\nService: ${service}\nMessage: ${message}`;

  await client.messages.create({
    body,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.OWNER_PHONE_NUMBER || "+17792217536",
  });

  return res.status(200).json({ ok: true });
}
