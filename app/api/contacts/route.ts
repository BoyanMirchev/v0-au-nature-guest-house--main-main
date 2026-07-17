import { neon } from "@neondatabase/serverless"

const databaseUrl = process.env.DATABASE_URL


if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is not set")
}


const sql = neon(databaseUrl)

type ContactUpdatePayload = {
  id?: string | number
  is_read?: boolean
}

type ContactDeletePayload = {
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

function isAuthorized(request: Request) {
  const authHeader = request.headers.get("authorization")

  if (!authHeader) {
    return false
  }

  const token = authHeader.replace("Bearer ", "").trim()

 
}

function unauthorizedResponse() {
  return Response.json(
    { error: "Unauthorized" },
    { status: 401 },
  )
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return unauthorizedResponse()
  }

  try {
    const contacts = await sql`
      SELECT id, name, email, phone, message, is_read, created_at
      FROM contacts
      ORDER BY created_at DESC
    `

    return Response.json({ contacts }, { status: 200 })
  } catch (error) {
    console.error("Error fetching contacts:", error)

    return Response.json(
      { error: "Failed to fetch contacts" },
      { status: 500 },
    )
  }
}

export async function PATCH(request: Request) {
  if (!isAuthorized(request)) {
    return unauthorizedResponse()
  }

  try {
    const { id, is_read } = (await request.json()) as ContactUpdatePayload

    if (!isValidId(id)) {
      return Response.json(
        { error: "Missing or invalid contact ID" },
        { status: 400 },
      )
    }

    if (typeof is_read !== "boolean") {
      return Response.json(
        { error: "Invalid read status" },
        { status: 400 },
      )
    }

    const updatedContacts = await sql`
      UPDATE contacts
      SET is_read = ${is_read}
      WHERE id = ${id}
      RETURNING id
    `

    if (updatedContacts.length === 0) {
      return Response.json(
        { error: "Contact not found" },
        { status: 404 },
      )
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error updating contact:", error)

    return Response.json(
      { error: "Failed to update contact" },
      { status: 500 },
    )
  }
}

export async function DELETE(request: Request) {
  if (!isAuthorized(request)) {
    return unauthorizedResponse()
  }

  try {
    const { id } = (await request.json()) as ContactDeletePayload

    if (!isValidId(id)) {
      return Response.json(
        { error: "Missing or invalid contact ID" },
        { status: 400 },
      )
    }

    const deletedContacts = await sql`
      DELETE FROM contacts
      WHERE id = ${id}
      RETURNING id
    `

    if (deletedContacts.length === 0) {
      return Response.json(
        { error: "Contact not found" },
        { status: 404 },
      )
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error deleting contact:", error)

    return Response.json(
      { error: "Failed to delete contact" },
      { status: 500 },
    )
  }
}