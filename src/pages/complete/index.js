import React from 'react';
import { PageWrapper } from '@/pagewrapper';
import { Grid, GridCol } from '@mantine/core';
import sideImg from '../../assets/sidebar-background.png'
import Image from 'next/image'
import { ReservationComplete } from '@/components/ReservationComplete';



export default function Complete() {
  return (
    // <PageWrapper>
    <div className='bg'>

      <Grid>

        <GridCol span='auto' className='left-bg rc'>

          <Image 
          src={sideImg}
          />

        </GridCol>

        <GridCol span='auto' className='right-bg rc'>

        <ReservationComplete />

        </GridCol>


      </Grid>
    </div>
  );
}