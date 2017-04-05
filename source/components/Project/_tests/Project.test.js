import React from 'react'
import sinon from 'sinon'
import moxios from 'moxios'
import { shallow, mount } from 'enzyme'
import { expect } from '../../../../configuration/testSetup'
import ProjectContainer from '../ProjectContainer'
import globalState from '../../utilities/globalState'

describe.only( ' <Project />', () => {
  context( 'componentDidMount', () => {
    let wrapper, mountSpy
    const fakeData = [
      { id: 1, text: 'amazing could do' },
      { id: 2, text: 'another amazing could do' }
    ]

    before( () => {
      moxios.install()
      mountSpy = sinon.spy( ProjectContainer.prototype, 'componentDidMount' )
      globalState.set({ currentProjectId: 1 })
      wrapper = mount( <ProjectContainer /> )
    })

    after( () => {
      moxios.uninstall()
      mountSpy.restore()
      globalState.set({ currentProjectId: null })
    })

    it( 'calls componentDidMount', () => {
      expect( ProjectContainer.prototype.componentDidMount.calledOnce ).to.equal( true )
    })

    it( 'makes http request and sets state to response', done => {
      moxios.wait( () => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: fakeData
        }).then( () => {
          expect( wrapper.state().couldDos[1] ).to.equal( fakeData )
          done()
        }).catch( done )
      })
    })

  })

})
