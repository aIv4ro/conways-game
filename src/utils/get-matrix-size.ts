import { type Size, type CGMatrix } from '../types/types'

export function getMatrixSize (matrix: CGMatrix): Size {
  const height = matrix.length
  const width = matrix[0]?.length ?? 0
  return { height, width }
}
