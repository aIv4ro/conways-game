import { type Size, type CGMatrix, type CellPosition } from '../types/types'
import { getMatrixSize } from './get-matrix-size'

export function getNextFrame (cells: CGMatrix): CGMatrix {
  const size = getMatrixSize(cells)
  return cells.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      const cellPosition = { row: rowIndex, col: cellIndex }
      const neighbors = getNeighbors(cellPosition, size)
      const aliveNeighbors = neighbors.filter((neighborPos) => cells[neighborPos.row][neighborPos.col] === 1).length
      if (cell === 1) {
        if (aliveNeighbors < 2 || aliveNeighbors > 3) {
          return 0
        }
        if (aliveNeighbors === 2 || aliveNeighbors === 3) {
          return 1
        }
      }
      if (cell === 0 && aliveNeighbors === 3) {
        return 1
      }
      return cell
    })
  })
}

function getNeighbors (position: CellPosition, size: Size): CellPosition[] {
  const neighbors = []
  const { row, col } = position
  const { width, height } = size
  const top = row - 1
  const bottom = row + 1
  const left = col - 1
  const right = col + 1
  if (top >= 0) {
    neighbors.push({ row: top, col })
  }
  if (bottom < height) {
    neighbors.push({ row: bottom, col })
  }
  if (left >= 0) {
    neighbors.push({ row, col: left })
  }
  if (right < width) {
    neighbors.push({ row, col: right })
  }
  if (top >= 0 && left >= 0) {
    neighbors.push({ row: top, col: left })
  }
  if (top >= 0 && right < width) {
    neighbors.push({ row: top, col: right })
  }
  if (bottom < height && left >= 0) {
    neighbors.push({ row: bottom, col: left })
  }
  if (bottom < height && right < width) {
    neighbors.push({ row: bottom, col: right })
  }
  return neighbors
}
