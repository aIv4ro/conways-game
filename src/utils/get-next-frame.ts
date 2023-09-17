export function getNextFrame (cells: Array<0 | 1>): Array<0 | 1> {
  return cells.map((cell, index) => {
    const neighbors = getNeighbors(index)
    const aliveNeighbors = neighbors.filter((neighbor) => cells[neighbor] === 1).length
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
}

function getNeighbors (index: number) {
  const neighbors = []
  const isLeftEdge = index % 25 === 0
  const isRightEdge = index % 25 === 24
  const isTopEdge = index < 25
  const isBottomEdge = index >= 600
  if (!isLeftEdge) {
    neighbors.push(index - 1)
  }
  if (!isRightEdge) {
    neighbors.push(index + 1)
  }
  if (!isTopEdge) {
    neighbors.push(index - 25)
  }
  if (!isBottomEdge) {
    neighbors.push(index + 25)
  }
  if (!isLeftEdge && !isTopEdge) {
    neighbors.push(index - 26)
  }
  if (!isRightEdge && !isTopEdge) {
    neighbors.push(index - 24)
  }
  if (!isLeftEdge && !isBottomEdge) {
    neighbors.push(index + 24)
  }
  if (!isRightEdge && !isBottomEdge) {
    neighbors.push(index + 26)
  }
  return neighbors
}
