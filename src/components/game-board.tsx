import { Cell } from './cell'

export function GameBoard ({
  cells
}: {
  cells: Array<0 | 1>
}) {
  return (
    <div className='grid grid-cols-[repeat(25,22px)] justify-center'>
      {cells.map((cell, index) => {
        return <Cell key={index} cell={cell} />
      })}
    </div>
  )
}
