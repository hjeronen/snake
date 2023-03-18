import { pieceWidth } from "./Configs"

const updatePosition = (x, y, direction, pieceWidth) => {
    let position = { x: x, y: y }

    switch (direction) {
        default:
            position.x += pieceWidth
            break
        case 'UP':
            position.y -= pieceWidth
            break
        case 'DOWN':
            position.y += pieceWidth
            break
        case 'LEFT':
            position.x -= pieceWidth
            break
        case 'RIGHT':
            position.x += pieceWidth
    }

    return position
}

const checkMapBounds = (x, y, width, height) => {
    let position = { x: x, y: y }

    if (position.x > width - pieceWidth) {
        position.x = 0
    } else if (position.x < 0) {
        position.x = width - pieceWidth
    }

    if (position.y > height - pieceWidth) {
        position.y = 0
    } else if (position.y < 0) {
        position.y = height - pieceWidth
    }

    return position
}

export const moveSnake = (snake, width, height, pieceWidth) => {
    // move
    const position = updatePosition(snake.x, snake.y, snake.direction, pieceWidth)

    // check map bounds and fix position
    const { x, y } = checkMapBounds(position.x, position.y, width, height)

    return [x, y]
}