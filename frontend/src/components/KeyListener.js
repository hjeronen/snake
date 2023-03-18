import { store } from "./Store"

const dirs = {
    'w': 1,
    's': 1,
    'a': 0,
    'd': 0
}

const key = {
    'UP': 'w',
    'DOWN': 's',
    'LEFT': 'a',
    'RIGHT': 'd'
}

export const keyListener = (event) => {
    if (event.isComposing || event.keyCode === 229) {
        return
    }

    const state = store.getState()
    let snake = state.snake

    // check for disallowed direction
    if (dirs[event.key] === dirs[key[snake.direction]]) {
        return
    }

    switch (event.key) {
        default:
            break
        case 'w':
            snake.direction = 'UP'
            store.dispatch({
                type: 'SET',
                payload: { ...state, snake: snake }
            })
            break
        case 's':
            snake.direction = 'DOWN'
            store.dispatch({
                type: 'SET',
                payload: { ...state, snake: snake }
            })
            break
        case 'a':
            snake.direction = 'LEFT'
            store.dispatch({
                type: 'SET',
                payload: { ...state, snake: snake }
            })
            break
        case 'd':
            snake.direction = 'RIGHT'
            store.dispatch({
                type: 'SET',
                payload: { ...state, snake: snake }
            })
    }
}