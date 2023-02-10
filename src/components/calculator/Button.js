import React from 'react'

export const Button = ({value, text, method, index}) => {
  return (
    <>
          <button value={value} onClick={method}>
              {text}
          </button>
          {index%4 === 0 ? <br/> : null}
    </>
  )
}
