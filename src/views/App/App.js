import React, {Component} from 'react'
import MainNav from 'components/MainNav'
import Envelope from 'components/Envelope'

export default class App extends Component {
  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: 100}}>
          <MainNav />
        </div>
        <div style={{flexGrow: 1}}>
          <Envelope />
        </div>
      </div>
    )
  }
}
