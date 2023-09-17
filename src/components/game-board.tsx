import { type CGMatrix } from '../types/types'
import { getMatrixSize } from '../utils/get-matrix-size'
import { Cell } from './cell'

export function GameBoard ({
  cells
}: {
  cells: CGMatrix
}) {
  const { height, width } = getMatrixSize(cells)
  return (
    <div style={{
      gridTemplateRows: `repeat(${height},22px)`,
      gridTemplateColumns: `repeat(${width},22px`
    }} className='grid justify-center'>
      {cells.map((row) => {
        return row.map((cell, cellIndex) => {
          return <Cell key={cellIndex} cell={cell} />
        })
      })}
    </div>
  )
}
