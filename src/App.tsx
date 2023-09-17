import { GameBoard } from './components/game-board'
import { Header } from './components/header'
import { useConwaysGame } from './hooks/use-conways-game'

function App () {
  const { cells, isStopped, reset, stop, resume } = useConwaysGame()

  function handleReset () {
    reset()
  }

  return (
    <>
      <Header
        onReset={handleReset}
        onStop={stop}
        onResume={resume}
        isStopped={isStopped} />
      <GameBoard
        cells={cells} />
    </>
  )
}

export default App
