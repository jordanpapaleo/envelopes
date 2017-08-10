export default class Transaction {
  constructor (props) {
    Object.keys(props).forEach((key) => {
      this[key] = props[key]
    })
  }
}
