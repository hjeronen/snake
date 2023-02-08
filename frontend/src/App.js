import GameBoard from './components/GameBoard'
import { draw } from './components/DrawFunction'
import { Container } from 'react-bootstrap'

const App = () => {

  const canvasWidth = 1000
  const canvasHeight = 600

  const startX = 50
  const startY = 50

  const pieceWidth = 20
  const pieceHeight = 20

  return (
    <Container>
      <h1>SNAKE</h1>
      <GameBoard
        draw={draw}
        x={startX}
        y={startY}
        width={canvasWidth}
        height={canvasHeight}
        pieceWidth={pieceWidth}
        pieceHeight={pieceHeight}
      />
    </Container>
  )
}

export default App
