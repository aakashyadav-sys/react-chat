import React from "react"
export const Button = ({ onClick , text , type }) => {
  return (
    <button style={{ display: 'block' , height: '50px' , width: '200px' , baackgroundColor: 'blue'}}  onClick={onClick}  type={type}  > {text} </button>
  )
}
