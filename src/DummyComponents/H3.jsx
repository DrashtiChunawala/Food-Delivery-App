import React from 'react'

const H3 = ({children,...props}) => {
  return (
    <h3  {...props}>{children}</h3>
  )
}

export default H3

//to make sure that type is set by default to string etc.

// H3.prototype={
//   children:React.PropTypes.node,
//   className:React.PropTypes.string
// } 
