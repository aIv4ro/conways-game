import { type DependencyList, useEffect } from 'react'

export function useInterval (fn: () => void, timeout: number | null | undefined, deps: DependencyList) {
  useEffect(() => {
    if (timeout == null) return
    const interval = setInterval(() => { fn() }, timeout)
    return () => { clearInterval(interval) }
  }, [fn, timeout, deps])
}
