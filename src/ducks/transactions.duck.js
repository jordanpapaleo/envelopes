import Transaction from 'models/Transaction'

// Actions
export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION'
export const EDIT_TRANSACTION = 'EDIT_TRANSACTION'

// Reducer
const initialState = []

export default function envelopeReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [...state, new Transaction(action.payload)]
    case DELETE_TRANSACTION:
      return state.filter(transaction => transaction.id !== action.payload)
    case EDIT_TRANSACTION:
      for (var i = 0, j = state.length; i < j; i++) {
        const transaction = state[i]
        if (transaction.id === action.payload.id) {
          state[i] = new Transaction({
            ...transaction,
            ...action.payload
          })

          break
        }
      }

      return [...state]
    default:
      return state
  }
}

// Action Creators
export function addEnvelope (transaction) {
  return {
    type: ADD_TRANSACTION,
    payload: transaction
  }
}

export function deleteEnvelope (transactionId) {
  return {
    type: DELETE_TRANSACTION,
    payload: transactionId
  }
}

export function editEvnelope (update) {
  return {
    type: EDIT_TRANSACTION,
    payload: update
  }
}
