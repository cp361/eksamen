import React from 'react';
import { NewReservation } from '@/components/NewReservation'
import { UpcomingReservation } from '@/components/UpcomingReservation';
import { Profile } from '@/components/auth/Profile';
import { PageWrapper } from '@/pagewrapper';
import { Grid, GridCol } from '@mantine/core';
import sideImg from '../../assets/sidebar-background.png'
import Image from 'next/image'


export default function newReservation() {
  return (
    <PageWrapper>
    <div className='bg'>

      <Grid className='grid-home'>

        <GridCol span='auto' w={94}>

          <Image 
          src={sideImg}
          />

        </GridCol>

        <GridCol span='auto'  className='right-bg'>

          <Profile />
          <UpcomingReservation />
          <NewReservation />

        </GridCol>


      </Grid>
    </div>
    </PageWrapper>
  );
}