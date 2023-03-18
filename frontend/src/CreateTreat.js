import { canvasWidth, canvasHeight, pieceWidth } from './components/Configs'

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getRandomX = () => {
    const limit = (canvasWidth / pieceWidth) - 1
    return getRandomInt(limit) * pieceWidth
}

const getRandomY = () => {
    const limit = (canvasHeight / pieceWidth) - 1
    return getRandomInt(limit) * pieceWidth
}

export const getTreat = (maxX, maxY) => {
    const x = getRandomX()
    const y = getRandomY()

    return {x: x, y: y}
}
