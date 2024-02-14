import React from 'react'
// bg-slate-400
export const Seat = ({seatNo}) => {

  const handleClick =() =>{
    alert( seatNo + " seat clicked ")
  }
  return (
    <div className='seat-compartment rounded-sm'  onClick={handleClick}>
          <p className='flex justify-center p-1 text-gray-500 text-sm'> {seatNo}</p>
    </div>
  )
}
