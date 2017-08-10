// // Actions
// export const DEPOSIT = 'DEPOSIT'
// export const WITHDRAW = 'WITHDRAW'
//
// const initialState = {
//   balance: 0
// }
//
// // Reducer
// export default function appReducer (state = initialState, action) {
//   switch (action.type) {
//     case DEPOSIT:
//       return {
//         ...state,
//         balance: state.balance + action.payload
//       }
//     case WITHDRAW:
//       return {
//         ...state,
//         balance: state.balance - action.payload
//       }
//     default:
//       return state
//   }
// }
//
// // Action Creators
// export function depositFunds (amount) {
//   return {
//     type: DEPOSIT,
//     payload: amount
//   }
// }
//
// export function withdrawFunds (amount) {
//   return {
//     type: WITHDRAW,
//     payload: amount
//   }
// }
