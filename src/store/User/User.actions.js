export function saveUser (email) {
    return {
        type: 'SAVE_USER_DATA',
        payload: email
    }
}

export function getUser () {
    return {
        type: 'GET_USER_DATA',
    }
}

export function deleteUser () {
    return {
        type: 'DELETE_USER_DATA',
    }
}