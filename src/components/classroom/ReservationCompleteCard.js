import React from 'react'

import classroomimg from '../../assets/classroom-img.png'
import Image from 'next/image'
import { FaChalkboardTeacher, FaPlug, FaTv } from 'react-icons/fa'

const ReservationCompleteCard = ({ classroom }) => {
  return (
    <div className='reservation-complete-card'>
      <Image
        src={classroomimg}
        className='reservation-complete-card-img'
      />
      <h3
        className='reservation-complete-number'
      >
        Room:
        <br />
        <span>
          {classroom.roomnumber}
        </span>
      </h3>
      <div className='reservation-complete-icons'>
        <FaTv color='var(--cphYellow)' size={15} />
        <FaChalkboardTeacher color='var(--cphYellow)' size={15} />
        <FaPlug color='var(--cphYellow)' size={15} />
      </div>
      <p className='reservation-complete-facility'> Smartboard </p>
      <p className='reservation-complete-facility'> Whiteboard </p>
      <p className='reservation-complete-facility'> Outlets and extension cords </p>


    </div>
  )
}

export default ReservationCompleteCard