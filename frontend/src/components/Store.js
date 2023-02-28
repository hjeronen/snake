import { createStore } from 'redux'
import { startX, startY } from './Configs'

const positionReducer = (state = { direction: 'RIGHT', x: startX, y: startY }, action) => {
    switch (action.type) {
        default:
            return state
        case 'SET':
            return state = action.payload
    }
}

export const store = createStore(positionReducer)