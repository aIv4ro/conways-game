export function Header ({
  isStopped,
  onReset,
  onStop,
  onResume
}: {
  isStopped: boolean
  onReset: () => void
  onStop: () => void
  onResume: () => void
}) {
  return (
    <header className='flex items-center justify-end gap-5 px-5 h-16 bg-gray-800 mb-5'>
      <h1 className="text-2xl font-bold flex-1">Conway&apos;s Game of Life</h1>
      <button onClick={isStopped ? onResume : onStop} className="px-8 py-2 bg-zinc-700 hover:bg-zinc-500 rounded text-xl">
        {isStopped ? 'Resume' : 'Stop'}
      </button>
      <button onClick={onReset} className="px-8 py-2 bg-zinc-700 hover:bg-zinc-500 rounded text-xl">Reset</button>
    </header>
  )
}
