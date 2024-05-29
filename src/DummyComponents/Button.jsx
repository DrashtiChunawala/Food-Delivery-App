import React from 'react'

const Button = ({children,className,textOnly,onClick,...props}) => {
  //by default classes
  let cssClass=textOnly?'text-button':'button';
  //to add another new class in case
  cssClass+=' '+className
  
  
  return (
    <>
    <button className={cssClass} {...props} onClick={onClick}>{children}</button>
    
    </>
  )
}

export default Button

//alternative method to add  classes to my button
// Button.defaultProps={
//   className:'button'
// }