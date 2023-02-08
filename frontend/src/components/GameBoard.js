import { useState, useRef, useEffect } from 'react'


const GameBoard = ({ draw, x, y, width, height, pieceWidth, pieceHeight }) => {

    const canvasRef = useRef(null)
    const [piece, setPiece] = useState({ positionX: x, positionY: y })


    useEffect(() => {

        const context = canvasRef.current.getContext('2d')
        const newPiece = {...piece}

        let animationFrameId

        const render = () => {

            newPiece.positionX++

            if (newPiece.positionX > width) {
                newPiece.positionX = 0
            }

            draw(context, newPiece.positionX, newPiece.positionY, pieceWidth, pieceHeight)

            animationFrameId = window.requestAnimationFrame(render)

        }

        render()

        return () => {

            window.cancelAnimationFrame(animationFrameId);

        }

    }, [draw, piece, width, pieceWidth, pieceHeight])

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