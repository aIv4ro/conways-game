import { useState } from 'react'
import { getNextFrame } from '../utils/get-next-frame'
import { useInterval } from './use-interval'
import { generateCells } from '../utils/generate-cells'

interface UseConwaysGame {
  initialCells?: Array<0 | 1>
  interval?: number
}

export function useConwaysGame ({
  initialCells = generateCells(),
  interval = 200
}: UseConwaysGame = {}) {
  const [cells, setCells] = useState(initialCells)
  const [isStopped, setIsStopped] = useState(false)

  function handleFrame () {
    setCells((prev) => getNextFrame(prev))
  }

  useInterval(
    handleFrame,
    isStopped ? null : interval,
    [setCells]
  )

  function reset () {
    setCells(generateCells())
  }

  function stop () {
    setIsStopped(true)
  }

  function resume () {
    setIsStopped(false)
  }

  return { cells, isStopped, reset, stop, resume }
}
