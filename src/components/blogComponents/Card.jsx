import React from 'react'

function Card({ children }) {
  React.useEffect(() => {
    console.log(children)
  }, [children])
  return (
    <div>
      {children}
    </div>
  )
}

export default Card