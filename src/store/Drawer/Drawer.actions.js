export function show () {
    return {
        type: 'SHOW',
        payload: true
    }
}

export function hide () {
    return {
        type: 'HIDE',
        payload: false
    }
}