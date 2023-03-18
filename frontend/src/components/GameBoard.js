import { useRef, useEffect } from 'react'
import { store } from './Store'
import { keyListener } from './KeyListener'
import { moveSnake } from './MoveSnake'
import { getTreat } from '../CreateTreat'


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

        // movement speed
        let fps = 0

        const render = () => {

            let state = store.getState()
            let snake = state.snake
            let treat = state.treat

            let x = snake.x
            let y = snake.y
            let speed = snake.speed

            fps++

            if (fps > speed) {

                // move snake
                [x, y] = moveSnake(snake, width, height, pieceWidth, speed)
                fps = 0

                // check if on top of treat
                if (x === treat.x && y === treat.y) {
                    treat = getTreat(width, height)
                }

                store.dispatch({
                    type: 'SET',
                    payload: {
                        snake: {
                            direction: snake.direction,
                            x: x,
                            y: y,
                            speed: speed
                        },
                        treat: treat
                    }
                })
            }

            draw(context, snake, treat, pieceWidth, pieceWidth)

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