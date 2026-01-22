import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const WAITLIST_FILE = path.join(process.cwd(), 'data', 'waitlist.json')

interface WaitlistEntry {
  email: string
  timestamp: string
  source: string
}

async function getWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(WAITLIST_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveWaitlist(entries: WaitlistEntry[]): Promise<void> {
  const dir = path.dirname(WAITLIST_FILE)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2))
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email richiesta' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      )
    }

    const waitlist = await getWaitlist()

    if (waitlist.some(entry => entry.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { error: 'Email già registrata' },
        { status: 409 }
      )
    }

    const newEntry: WaitlistEntry = {
      email: email.toLowerCase(),
      timestamp: new Date().toISOString(),
      source: 'landing-page'
    }

    waitlist.push(newEntry)
    await saveWaitlist(waitlist)

    return NextResponse.json(
      { message: 'Iscrizione completata', count: waitlist.length },
      { status: 201 }
    )
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const waitlist = await getWaitlist()
    return NextResponse.json({ count: waitlist.length })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
