import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import EnvelopeModel from 'components/Envelope'

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class Envelope extends Component {
  static propTypes = {
    envelope: PropTypes.instanceOf(EnvelopeModel)
  }

  state = {}

  render () {
    return (
      <div>Envelope</div>
    )
  }
}
