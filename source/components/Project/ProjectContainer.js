import React, { Component } from 'react'
import axios from 'axios'
import globalState from '../globalState'
import componentErrorHandler from '../utilities/componentErrorHandler'
import Project from './Project'

export default class ProjectContainer extends Component {
  constructor() {
    super()
    this.state = globalState.get()
    globalState.subscribe( this.updateState )
  }

}
