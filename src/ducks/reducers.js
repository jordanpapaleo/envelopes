import {combineReducers} from 'redux'
import balance from './balance.duck'
import envelopes from './envelopes.duck'
import transactions from './transactions.duck'
export default combineReducers({
  balance,
  envelopes,
  transactions
})
