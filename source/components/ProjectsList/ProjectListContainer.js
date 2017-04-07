import React from 'react'
import axios from 'axios'
import componentErrorHandler from '../utilities/componentErrorHandler'
import GlobalStateComponent from '../utilities/GlobalStateComponent'
import RowList from '../reusable/Row/RowList'
import globalState from '../utilities/globalState'

export default class ProjectListContainer extends GlobalStateComponent {
  componentDidMount() {
    axios.get( `http://localhost:1337/user/${this.state.userId}/projects` )
      .then( body => globalState.set({ projects: body.data }) )
      .catch( componentErrorHandler( 'ProjectListContainer' ) )
  }

  render() {
    return <RowList items={ this.state.projects } type='project' />
  }
}
