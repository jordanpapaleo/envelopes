export default class EnvelopeModel {
  constructor (props) {
    Object.keys(props).forEach((key) => {
      this[key] = props[key]
    })
  }
}

/*
{
  name:
  budget:
}
*/
