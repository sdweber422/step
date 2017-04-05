import React from 'react'
import Row from '../Row/Row'

const ProjectList = ({ projects }) => {
  let projectList

  if ( projects ) {
    projectList = projects.map( project =>
      <Row
        key={ project.id }
        fieldType={ 'project' }
        { ...project } />
    )
  } else {
    projectList = <div> Loading . . .</div>
  }

  return (
    <div>
      { projectList }
    </div>
  )
}

export default ProjectList
