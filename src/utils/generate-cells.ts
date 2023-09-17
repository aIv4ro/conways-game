import { type Size, type CGMatrix } from '../types/types'
import { getRandomBit } from './get-random-num'

export function generateCells (size: Size): CGMatrix {
  return Array(size.height)
    .fill(Array(size.width).fill(0))
    .map(arr => arr.map(() => getRandomBit()))
}
