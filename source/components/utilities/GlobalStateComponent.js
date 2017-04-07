import { Component } from 'react'
import globalState from './globalState'

export default class GlobalStateComponent extends Component {
  constructor() {
    super()
    this.state = globalState.get()
    globalState.subscribe( this.updateState )
  }

  componentWillUnmount() { globalState.unsubscribe(this.updateState) }

  updateState = newState => this.setState( newState )
}
