import React, {Component} from 'react'
import MainNav from 'components/MainNav'

export default class App extends Component {
  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: 100}}>
          <MainNav />
        </div>
      </div>
    )
  }
}
