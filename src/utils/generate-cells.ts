import { type CGMatrix } from '../types/types'
import { getRandomBit } from './get-random-num'

export function generateCells (): CGMatrix {
  return Array(625).fill(0).map(getRandomBit)
}
