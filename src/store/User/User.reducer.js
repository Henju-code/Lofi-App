import api from '../../services/api'

export default function (state = {}, action) {
    switch (action.type) {
        case 'SAVE_USER_DATA':
            return async () => {
                try {
                    const response = await api.get(`/users?email=${action, payload}`);

                    if (response.data) {
                        localStorage.setItem('@user', JSON.stringify(response))
                    } else {
                        localStorage.clear()
                    }
                } catch (error) {
                    console.log(error);
                }
            }

        case 'GET_USER_DATA':
            return JSON.parse(localStorage.getItem('@user'))

        case 'DELETE_USER_DATA':
            return () => {
                localStorage.clear()
                window.location.reload()
            }

        default:
            return state
    }
}