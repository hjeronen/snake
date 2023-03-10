import { store } from './Store'

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

    if (position.x > width) {
        position.x = 0
    } else if (position.x < 0) {
        position.x = width
    }

    if (position.y > height) {
        position.y = 0
    } else if (position.y < 0) {
        position.y = height
    }

    return position
}

export const moveSnake = (state, width, height, pieceWidth) => {
    // move
    const position = updatePosition(state.x, state.y, state.direction, pieceWidth)

    // check map bounds and fix position
    const { x, y } = checkMapBounds(position.x, position.y, width, height)

    // update snake position
    store.dispatch({
        type: 'SET',
        payload: {
            direction: state.direction,
            x: x,
            y: y
        }
    })

    return [x, y]
}