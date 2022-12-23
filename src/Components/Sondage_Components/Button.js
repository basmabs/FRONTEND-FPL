import React from 'react'

function Button({ handleClick, btnColor, increment, children }) {
  return <button onClick={() => handleClick(increment)} className={`btn btn-${btnColor}`}>{children}</button>
}
export default Button