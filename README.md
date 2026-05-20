# 815 Septic Guy Website

Deploy-ready React + Vite landing page with optimized images, logo, SEO metadata, local business schema, request-service form, and mobile call/text bar.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Images

All site images are included in:

```text
public/images/
```

Main assets:
- logo-clean.png
- favicon.png
- truck1.jpg through truck7.jpg

## Form/Text-to-lead

The form posts to:

```text
/api/send-lead-text
```

A Twilio example handler is included at:

```text
api/send-lead-text.example.js
```

For Vercel/Next.js, move/adapt that handler into a real API route and add these environment variables:

```text
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_PHONE_NUMBER
OWNER_PHONE_NUMBER=+17792217536
```

For a static Vite deployment, use Formspree, Netlify Forms, or a hosted serverless endpoint.
# 815SepticGuy
