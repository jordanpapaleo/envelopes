import EnvelopeModel from 'models/EnvelopeModel'
// Actions
export const ADD_ENVELOPE = 'ADD_ENVELOPE'
export const DELETE_ENVELOPE = 'DELETE_ENVELOPE'
export const EDIT_ENVELOPE = 'EDIT_ENVELOPE'

const initialState = []

// Reducer
export default function envelopeReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ENVELOPE:
      return [...state, new EnvelopeModel(action.payload)]
    case DELETE_ENVELOPE:
      return state.filter(envelope => envelope.id !== action.payload)
    case EDIT_ENVELOPE:
      for (var i = 0, j = state.length; i < j; i++) {
        const envelope = state[i]
        if (envelope.id === action.payload.id) {
          state[i] = new EnvelopeModel({
            ...envelope,
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
export function addEnvelope (envelope) {
  return {
    type: ADD_ENVELOPE,
    payload: envelope
  }
}

export function deleteEnvelope (envelopeId) {
  return {
    type: DELETE_ENVELOPE,
    payload: envelopeId
  }
}
