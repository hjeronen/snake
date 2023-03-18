import { createStore } from 'redux'
import { startX, startY } from './Configs'

const gameReducer = (state = { snake: { direction: 'RIGHT', x: startX, y: startY, speed: 50 }, treat: { x: 800, y: 200 } }, action) => {
    switch (action.type) {
        default:
            return state
        case 'SET':
            return state = action.payload
    }
}

export const store = createStore(gameReducer)