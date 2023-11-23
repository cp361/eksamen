import React from 'react'

import classroomimg from '../assets/classroom-img.png'
import Image from 'next/image'
import { Button } from '@mantine/core'

const ClassRoomCard = ({ classroom }) => {
  return (
    <div className='classroom-card'>
      <Image
        src={classroomimg}
        className='classroom-card-img'
      />
      <h3 className='classroom-number'> {classroom.roomnumber} </h3>
      <p className='classroom-facility'> {classroom.facility1} </p>
      <p className='classroom-facility'> {classroom.facility2} </p>
      <p className='classroom-facility'> {classroom.facility3} </p>

      <Button className='reserve-button' size='md' color='var(--cphYellow)'>Reserve</Button>
      
    </div>
  )
}

export default ClassRoomCard