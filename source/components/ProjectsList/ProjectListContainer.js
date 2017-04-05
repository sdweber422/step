import React from 'react'
import axios from 'axios'
import componentErrorHandler from '../utilities/componentErrorHandler'
import GlobalStateComponent from '../utilities/GlobalStateComponent'
import ProjectList from './ProjectList'
import globalState from '../utilities/globalState'

export default class ProjectListContainer extends GlobalStateComponent {
  componentDidMount() {
    axios.get( `http://localhost:1337/user/${this.state.userId}/projects` )
      .then( body => globalState.set({ projects: body.data }) )
      .catch( error => componentErrorHandler( 'ProjectListContainer', error ) )
  }

  render() {
    return <ProjectList projects={ this.state.projects } />
  }
}
