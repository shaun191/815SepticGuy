import twilio from "twilio";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, address, service, message, source } = req.body;

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.OWNER_PHONE_NUMBER,
      body: `New lead from ${source}

Name: ${name}
Phone: ${phone}
Address/City: ${address}
Service: ${service}
Message: ${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Twilio error:", error);
    return res.status(500).json({ error: "Failed to send text" });
  }
}
