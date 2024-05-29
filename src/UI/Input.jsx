import React from 'react'
import P from '../DummyComponents/P'

const Input = ({label,id,...props}) => {
  return (
    <P className='control'>
        <label htmlFor={id}>{label}</label>
        <input  name={id} id={id} {...props} required/>
    </P>
  )
}

export default Input
