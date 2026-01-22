'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface WaitlistFormProps {
  variant?: 'light' | 'dark'
}

export function WaitlistForm({ variant = 'light' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setStatus('loading')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Perfetto! Ti contatteremo al lancio.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Qualcosa è andato storto. Riprova.')
      }
    } catch {
      setStatus('error')
      setMessage('Errore di connessione. Riprova.')
    }
  }

  const isDark = variant === 'dark'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <Input
        type="email"
        placeholder="La tua email universitaria"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'loading' || status === 'success'}
        className={`flex-1 h-12 text-base ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60' : ''}`}
      />
      <Button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={`h-12 px-8 text-base font-semibold ${isDark ? 'bg-white text-primary-600 hover:bg-white/90' : 'bg-primary-600 hover:bg-primary-700 text-white'}`}
      >
        {status === 'loading' ? 'Iscrizione...' : 'Unisciti alla waitlist'}
      </Button>
      {message && (
        <p className={`text-sm mt-2 sm:absolute sm:mt-16 ${status === 'success' ? (isDark ? 'text-green-300' : 'text-green-600') : (isDark ? 'text-red-300' : 'text-red-600')}`}>
          {message}
        </p>
      )}
    </form>
  )
}
