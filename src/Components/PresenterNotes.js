import React from 'react'

const PresenterNotes = ({ isPresenterMode, children }) =>
  isPresenterMode
    ? <p style={{ opacity: 0.35 }}><em>{children}</em></p>
    : ''

export default PresenterNotes
