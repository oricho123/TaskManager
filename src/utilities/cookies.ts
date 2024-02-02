import { useCallback, useState } from 'react'

export default function useCookie(
  name: string
): [string | null, (value: string, expires_ms?: number) => void, () => void] {
  const [value, setValue] = useState(() => {
    const value = '; ' + document.cookie
    const parts = value.split('; ' + name + '=')

    if (parts.length === 2) {
      const lastPart = parts.pop()
      if (lastPart !== undefined) {
        return lastPart.split(';').shift() ?? null
      }
    }
    return sessionStorage.getItem(name) || null
  })

  const deleteCookie = useCallback(() => {
    sessionStorage.removeItem(name)
    // Set cookie to expire in -1 days
    const date = new Date()
    date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000)
    document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/'
    setValue(null)
  }, [name])

  const setCookie = useCallback(
    (value: string, expires_ms: number = 7 * 24 * 60 * 60 * 1000) => {
      if (expires_ms === 0) {
        deleteCookie()
        sessionStorage.setItem(name, value)
      } else {
        const date = new Date()
        date.setTime(date.getTime() + expires_ms)
        document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/'
      }
      setValue(value)
    },
    [name, deleteCookie]
  )

  return [value, setCookie, deleteCookie]
}
