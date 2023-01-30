import React from 'react'
import PropTypes from 'prop-types'


function Button({text, scheme, clickHandler}) {

  const color = scheme === 'primary' ? "#44B" : scheme === 'secondary' ? "red" : "gray";
  
  const style = {
    backgroundColor: color,
    color: 'white',
    padding: '.75em 2em',
    border: 0,
    outline: 0,
    borderRadius: '.5em',
    cursor: 'pointer'
  }


  return (
    <button style={style} onClick={(e) => clickHandler(e)}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  scheme: PropTypes.string
}
Button.defaultProps = {
  text: "Click Me",
  scheme: "primary"
}


export default Button