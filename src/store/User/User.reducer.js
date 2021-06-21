// import api from '../../services/api'
// import type from '../types'

// const STATE = {
//     recomended: {}
// }

// export default function (state = STATE, action) {
//     switch (action.type) {
//         case type.SAVE_USER:
//             return {
//                 user: action.payload,
//                 isAuthorized: true
//             }

//         case type.GET_USER:
//             return STATE

//         case type.DELETE_USER:
//             return 

//         default:
//             return state
//     }
// }


// // async () => {
// //     try {
// //         const response = await api.get(`/users?email=${action, payload}`);

// //         if (response.data) {
// //             localStorage.setItem('@user', JSON.stringify(response))
// //         } else {
// //             localStorage.clear()
// //         }
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// // JSON.parse(localStorage.getItem('@user'))

// // localStorage.clear()
// // window.location.reload()