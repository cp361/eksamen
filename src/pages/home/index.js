import React from 'react';
import { NewReservation } from '@/components/NewReservation'
import { UpcomingReservation } from '@/components/UpcomingReservation';
import { Profile } from '@/components/auth/Profile';
import { PageWrapper } from '@/pagewrapper';
// import { Grid, GridCol } from '@mantine/core';
import sideImg from '../../assets/sidebar-background.png'
import Image from 'next/image'


export default function newReservation() {
  return (
    <PageWrapper>
    <div className='bg'>

      <div className='grid-home'>

        <div className='left-bg'>

          <Image 
          src={sideImg}
          width={94}
          alt='sidebar image'
          className='sidebar-image'
          />

        </div>

        <div className='right-bg'>

          <Profile />
          <UpcomingReservation />
          <NewReservation />

        </div>


      </div>
    </div>
    </PageWrapper>
  );
}