import { getRandomBit } from './get-random-num'

export function generateCells (): Array<0 | 1> {
  return Array(625).fill(0).map(getRandomBit)
}
