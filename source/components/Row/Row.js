import React from 'react'
import TextFieldContainer from '../TextField/TextFieldContainer'
import Icon from '../Icon/Icon'

const Row = ({ text, id, iconType, fieldType }) => (
  <div className='row-container'>
    <TextFieldContainer text={ text } id={ id } type={ fieldType } />
    <Icon type={ iconType } />
  </div>
)

export default Row
