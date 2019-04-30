import React from 'react'

const Image = ({ alt, style, ...rest }) => (
  <img
    style={{
      maxHeight: 450,
      maxWidth: 700,
      ...style
    }}
    alt={alt}
    {...rest}
  />
)

export default Image
