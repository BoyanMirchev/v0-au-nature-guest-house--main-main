import { neon } from "@neondatabase/serverless"

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  message?: string
  website?: string
}

function getRequiredEnv(name: string): string {
  const value = process.env[name]

  if (!value) {
    throw new Error(`${name} environment variable is not set`)
  }

  return value
}

const sql = neon(getRequiredEnv("DATABASE_URL"))

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normalizeString(value: unknown): string {
  return String(value ?? "").trim()
}

function isTooLong(value: string, maxLength: number): boolean {
  return value.length > maxLength
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    // Honeypot поле против прости ботове
    if (body.website) {
      return Response.json({ success: true }, { status: 200 })
    }

    const name = normalizeString(body.name)
    const email = normalizeString(body.email)
    const phone = normalizeString(body.phone)
    const message = normalizeString(body.message)

    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      )
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 },
      )
    }

    if (
      isTooLong(name, 100) ||
      isTooLong(email, 254) ||
      isTooLong(phone, 30) ||
      isTooLong(message, 2000)
    ) {
      return Response.json(
        { error: "One or more fields are too long" },
        { status: 400 },
      )
    }

    await sql`
      INSERT INTO contacts (name, email, phone, message, is_read)
      VALUES (${name}, ${email}, ${phone}, ${message}, false)
    `

    return Response.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error("Contact API error:", error)

    return Response.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}