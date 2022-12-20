import React from 'react'
import classes from './Button.module.css'

const Button = ({ children, showMore, ...props }) => {
  console.log(showMore)
  return (
    <button {...props} className={`${classes.btn} ${showMore ? classes.btnMore : ''}`} >
      {children}
    </button >
  )
}

export default Button