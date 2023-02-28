import GameBoard from './components/GameBoard'
import { canvasWidth, canvasHeight, pieceWidth } from './components/Configs'
import { draw } from './components/DrawFunction'
import { keyListener } from './components/KeyListener'
import { Container } from 'react-bootstrap'

const App = () => {

  return (
    <Container>
      <h1>SNAKE</h1>
      <GameBoard
        draw={draw}
        width={canvasWidth}
        height={canvasHeight}
        pieceWidth={pieceWidth}
        keyListener={keyListener}
      />
    </Container>
  )
}

export default App
