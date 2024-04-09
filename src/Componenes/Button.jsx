import React from 'react'

const Button = ({label}) => {
  return (
    <div className=' bg-secondary rounded-md px-8 py-4'>
      <button className=' text-white font-palanquin text-2xl'>{label}</button>
    </div>
  )
}

export default Button