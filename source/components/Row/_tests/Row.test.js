import React from 'react'
import { shallow } from 'enzyme'
import { expect } from '../../../../configuration/testSetup'
import ProjectsListRow from '../Row'

describe( '<ProjectsListRow />', () => {

  it( 'renders the first child component', () =>
    expect( shallow( <ProjectsListRow /> ).find( 'TextFieldContainer' ).length ).to.equal( 1 )
  )

  it( 'renders the second child component', () =>
    expect( shallow( <ProjectsListRow /> ).find( 'Icon' ).length ).to.equal( 1 )
  )
})
