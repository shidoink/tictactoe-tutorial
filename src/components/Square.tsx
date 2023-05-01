import React from 'react'
import {useState} from 'react'

interface SquareProps {
    value: string
}


function Square  ({value, onSquareClick})  {
  return (
    <div 
    className='h-12 w-12 border border-black flex justify-center'
    >
    <button className= 'w-full'
    onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  )
}

export default Square
