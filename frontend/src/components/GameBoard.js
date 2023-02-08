import { useRef, useEffect } from 'react'


const GameBoard = (props) => {

    const { draw, x, y, width, height, pieceWidth, pieceHeight } = props
    const canvasRef = useRef(null)

    useEffect(() => {

        const context = canvasRef.current.getContext('2d')

        draw(context, x, y, pieceWidth, pieceHeight)

    }, [draw, x, y, pieceWidth, pieceHeight])

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