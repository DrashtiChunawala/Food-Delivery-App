import React, { Children } from 'react'

const P = ({children,...props}) => {
  return (
    <p {...props}>{children}</p>
  )
}

export default P
