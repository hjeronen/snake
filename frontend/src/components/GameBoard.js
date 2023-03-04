import { useRef, useEffect } from 'react'
import { store } from './Store'
import { keyListener } from './KeyListener'
import { moveSnake } from './MoveSnake'


const GameBoard = ({ draw, width, height, pieceWidth }) => {

    const canvasRef = useRef(null)

    useEffect(() => {

        window.addEventListener('keydown', keyListener)

        return () => {
            window.removeEventListener('keydown', keyListener)
        }
    })

    useEffect(() => {

        const context = canvasRef.current.getContext('2d')

        let animationFrameId

        const render = () => {

            let state = store.getState()
            let [x, y] = moveSnake(state, width, height)

            draw(context, x, y, pieceWidth, pieceWidth)

            animationFrameId = window.requestAnimationFrame(render)

        }

        render()

        return () => {

            window.cancelAnimationFrame(animationFrameId)

        }

    }, [draw, width, height, pieceWidth])

    return (
        <canvas
            ref={canvasRef}
            style={{
                border: "3px solid black",
            }}
            width={width}
            height={height}
        />
    )
}

export default GameBoard