export default class Envelope {
  constructor (props) {
    Object.keys(props).forEach((key) => {
      this[key] = props[key]
    })
  }
}
