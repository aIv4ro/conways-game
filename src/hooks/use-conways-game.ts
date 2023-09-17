import { useState } from 'react'
import { getNextFrame } from '../utils/get-next-frame'
import { useInterval } from './use-interval'
import { generateCells } from '../utils/generate-cells'
import { type CGMatrix } from '../types/types'
import { getMatrixSize } from '../utils/get-matrix-size'

interface UseConwaysGame {
  initialCells?: CGMatrix
  interval?: number
}

const defaultCells = generateCells({ width: 50, height: 50 })

export function useConwaysGame ({
  initialCells,
  interval = 200
}: UseConwaysGame = {}) {
  const [cells, setCells] = useState(initialCells ?? defaultCells)
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
    const size = getMatrixSize(cells)
    setCells(generateCells(size))
  }

  function stop () {
    setIsStopped(true)
  }

  function resume () {
    setIsStopped(false)
  }

  return { cells, isStopped, reset, stop, resume }
}
