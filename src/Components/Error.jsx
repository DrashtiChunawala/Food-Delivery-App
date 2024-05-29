import React from 'react'
import P from '../DummyComponents/P'
import H2 from '../DummyComponents/H2'

const Error = ({title='Something went wrong',message='Please try again later'}) => {
  return (
    <div className="errorWrapper">
      <div className='error'>
          <H2>{title}</H2>
          <P>{message}</P>
      </div>
    </div>
  )
}

export default Error