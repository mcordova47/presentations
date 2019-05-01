import React from 'react'

const noteStyle = {
  color: 'rgb(78, 78, 78)',
  background: 'rgb(255, 248, 190)',
  padding: 10,
  margin: 10,
  borderRadius: 3,
  fontSize: 14,
  border: '2px solid rgb(255, 233, 49)',
}

const PresenterNotes = ({ isPresenterMode, children }) =>
  isPresenterMode
    ? <p style={noteStyle}>{children}</p>
    : ''

export default PresenterNotes
