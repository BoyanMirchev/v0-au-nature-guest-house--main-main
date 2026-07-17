import { neon } from "@neondatabase/serverless"

const databaseUrl =
  process.env.DATABASE_URL ||
  process.env.NEON_DATABASE_URL ||
  process.env.NEON_POSTGRES_URL

if (!databaseUrl) {
  throw new Error("No Neon database connection string is set")
}

const sql = neon(databaseUrl)

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "aunature2024"
const VALID_STATUSES = ["new", "confirmed", "cancelled"] as const

type ReservationCreatePayload = {
  name?: string
  email?: string
  phone?: string
  checkIn?: string
  checkOut?: string
  guests?: string
  message?: string
}

type ReservationUpdatePayload = {
  id?: string | number
  status?: string
}

type ReservationDeletePayload = {
  id?: string | number
}

function isValidId(id: unknown): id is string | number {
  if (typeof id === "number") {
    return Number.isInteger(id) && id > 0
  }

  if (typeof id === "string") {
    return id.trim().length > 0
  }

  return false
}

function isAdmin(request: Request) {
  const provided = request.headers.get("x-admin-password")?.trim()
  return Boolean(provided) && provided === ADMIN_PASSWORD
}

function unauthorizedResponse() {
  return Response.json({ error: "Unauthorized" }, { status: 401 })
}

// Public: create a reservation from the booking form
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReservationCreatePayload
    const name = body.name?.trim()
    const email = body.email?.trim()
    const phone = body.phone?.trim()
    const checkIn = body.checkIn?.trim()
    const checkOut = body.checkOut?.trim()
    const guests = body.guests?.trim()
    const message = body.message?.trim() ?? ""

    if (!name || !email || !phone || !checkIn || !checkOut || !guests) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const created = await sql`
      INSERT INTO reservations (name, email, phone, check_in, check_out, guests, message)
      VALUES (${name}, ${email}, ${phone}, ${checkIn}, ${checkOut}, ${guests}, ${message})
      RETURNING id
    `

    return Response.json({ success: true, id: created[0]?.id }, { status: 201 })
  } catch (error) {
    console.error("Error creating reservation:", error)

    return Response.json({ error: "Failed to create reservation" }, { status: 500 })
  }
}

// Admin: list all reservations
export async function GET(request: Request) {
  if (!isAdmin(request)) {
    return unauthorizedResponse()
  }

  try {
    const reservations = await sql`
      SELECT id, name, email, phone, check_in, check_out, guests, message, status, created_at
      FROM reservations
      ORDER BY created_at DESC
    `

    return Response.json({ reservations }, { status: 200 })
  } catch (error) {
    console.error("Error fetching reservations:", error)

    return Response.json({ error: "Failed to fetch reservations" }, { status: 500 })
  }
}

// Admin: update reservation status
export async function PATCH(request: Request) {
  if (!isAdmin(request)) {
    return unauthorizedResponse()
  }

  try {
    const { id, status } = (await request.json()) as ReservationUpdatePayload

    if (!isValidId(id)) {
      return Response.json({ error: "Missing or invalid reservation ID" }, { status: 400 })
    }

    if (typeof status !== "string" || !VALID_STATUSES.includes(status as (typeof VALID_STATUSES)[number])) {
      return Response.json({ error: "Invalid status" }, { status: 400 })
    }

    const updated = await sql`
      UPDATE reservations
      SET status = ${status}
      WHERE id = ${id}
      RETURNING id
    `

    if (updated.length === 0) {
      return Response.json({ error: "Reservation not found" }, { status: 404 })
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error updating reservation:", error)

    return Response.json({ error: "Failed to update reservation" }, { status: 500 })
  }
}

// Admin: delete a reservation
export async function DELETE(request: Request) {
  if (!isAdmin(request)) {
    return unauthorizedResponse()
  }

  try {
    const { id } = (await request.json()) as ReservationDeletePayload

    if (!isValidId(id)) {
      return Response.json({ error: "Missing or invalid reservation ID" }, { status: 400 })
    }

    const deleted = await sql`
      DELETE FROM reservations
      WHERE id = ${id}
      RETURNING id
    `

    if (deleted.length === 0) {
      return Response.json({ error: "Reservation not found" }, { status: 404 })
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error deleting reservation:", error)

    return Response.json({ error: "Failed to delete reservation" }, { status: 500 })
  }
}
