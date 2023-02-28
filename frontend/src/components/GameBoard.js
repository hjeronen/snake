import { useRef, useEffect } from 'react'
import { store } from './Store'
import { keyListener } from './KeyListener'


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

            const state = store.getState()
            switch (state.direction) {
                default:
                    state.x++
                    break
                case 'UP':
                    state.y--
                    break
                case 'DOWN':
                    state.y++
                    break
                case 'LEFT':
                    state.x--
                    break
                case 'RIGHT':
                    state.x++
            }

            if (state.x > width) {
                state.x = 0
                store.dispatch({
                    type: 'SET',
                    payload: {
                        direction: state.direction,
                        x: 0,
                        y: state.y
                    }
                })
            } else if (state.x < 0) {
                state.x = width
                store.dispatch({
                    type: 'SET',
                    payload: {
                        direction: state.direction,
                        x: width,
                        y: state.y
                    }
                })
            }

            if (state.y > height) {
                state.y = 0
                store.dispatch({
                    type: 'SET',
                    payload: {
                        direction: state.direction,
                        x: state.x,
                        y: 0
                    }
                })
            } else if (state.y < 0) {
                state.y = height
                store.dispatch({
                    type: 'SET',
                    payload: {
                        direction: state.direction,
                        x: state.x,
                        y: height
                    }
                })
            }

            draw(context, state.x, state.y, pieceWidth, pieceWidth)

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