import { store } from "./Store"

export const keyListener = (event) => {
    if (event.isComposing || event.keyCode === 229) {
        return
    }
    const state = store.getState()
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