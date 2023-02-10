import React from 'react'

const ResultScreen = ({result}) => {
  return (
    <>
        <input type="text" value={result} onChange={() =>console.log("")}  />
        <br />
        <br />
    </>
  )
}

export default ResultScreen