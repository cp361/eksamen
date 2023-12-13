import React from 'react'

import classroomimg from '../../assets/classroom-img.png'
import Image from 'next/image'
import { Button } from '@mantine/core'
import { FaChalkboardTeacher, FaPlug, FaTv } from 'react-icons/fa'
import { cancelAlert } from '../alert/CancelAlert'

const ClassRoomCard2 = ({ reservation, classroom }) => {
  return (
    <div className='classroom-card2'>
      <div>
        <Image
          src={classroomimg}
          className='classroom-card-img'
          alt='classroom image'
        />

      <h3 className='classroom-number2'> {reservation.roomnumber} </h3>
      <Button className='classroom-button' size='sm' color='var(--cphYellow)' onClick={cancelAlert}>Cancel</Button>

      </div>
      <div className='classroom-card-info'>
        <div className='classroom-icons'>
          <FaTv color='var(--cphYellow)' size={15} />
          <FaChalkboardTeacher color='var(--cphYellow)' size={15} />
          <FaPlug color='var(--cphYellow)' size={15} />
        </div>
        <p className='classroom-facility'> {classroom.facility1} </p>
        <p className='classroom-facility'> {classroom.facility2} </p>
        <p className='classroom-facility'> {classroom.facility3} </p>
      </div>
    </div>
  )
}

export default ClassRoomCard2