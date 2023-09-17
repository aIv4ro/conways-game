export function Cell ({ cell }: { cell: number }) {
  return <div className={'w-[22px] h-[22px] transition-colors duration-300 ' + (cell === 0 ? 'bg-red-400' : 'bg-green-400')} />
}
