import React from 'react'
import axios from 'axios'
import globalState from '../utilities/globalState'
import componentErrorHandler from '../utilities/componentErrorHandler'
import GlobalStateComponent from '../utilities/GlobalStateComponent'
import Project from './Project'

export default class ProjectContainer extends GlobalStateComponent {
  constructor() {
    super()
    this.state = globalState.get()
    globalState.subscribe( this.updateState )
  }

  componentDidMount() {
    const projectId = this.state.currentProjectId

    axios.get( `http://localhost:1337/project/${projectId}/could-do` )
      .then( response => globalState.set({ couldDos: { [projectId]: response.data } }) )
      .catch( componentErrorHandler( 'ProjectContainer' ) )
  }

  render() {
    return <Project />
  }

}
