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

    // check for disallowed direction
    if (dirs[event.key] === dirs[key[state.direction]]) {
        return
    }

    switch (event.key) {
        default:
            break
        case 'w':
            store.dispatch({
                type: 'SET',
                payload: { ...state, direction: 'UP' }
            })
            break
        case 's':
            store.dispatch({
                type: 'SET',
                payload: { ...state, direction: 'DOWN' }
            })
            break
        case 'a':
            store.dispatch({
                type: 'SET',
                payload: { ...state, direction: 'LEFT' }
            })
            break
        case 'd':
            store.dispatch({
                type: 'SET',
                payload: { ...state, direction: 'RIGHT' }
            })
    }
}