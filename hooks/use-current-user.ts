"use client"

import { useState, useEffect } from 'react'

export interface UserData {
  id: string
  firstName: string | null
  lastName: string | null
  fullName: string
  imageUrl: string
  primaryEmailAddress: string | null
}

export function useCurrentUser() {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('/api/user')
        
        if (!response.ok) {
          // If response is 401, user is not authenticated (don't show error)
          if (response.status === 401) {
            setLoading(false)
            return
          }
          throw new Error('Failed to fetch user data')
        }
        
        const userData = await response.json()
        setUser(userData)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  return { user, loading, error }
}
