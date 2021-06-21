import type from '../types'

export default function (state = {}, action) {
    switch (action.type) {
        case type.SET_RADIOS:
            return action.payload
        default:
            return state
    }
}