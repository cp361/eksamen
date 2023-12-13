import React from 'react';
import { PageWrapper } from '@/pagewrapper';
import { Grid, GridCol } from '@mantine/core';
import sideImg from '../../assets/sidebar-background.png'
import Image from 'next/image'
import { ReservationComplete } from '@/components/ReservationComplete';



export default function Complete() {
  return (
    // <PageWrapper>
    <div className='bg-second'>

      <Grid>

        <GridCol span='auto' className='left-bg rc' h={630} w={94}>

          <Image 
          src={sideImg}
          width={94}
          height={700}
          />

        </GridCol>

        <GridCol span='auto' className='right-bg rc'h={700}>

        <ReservationComplete />

        </GridCol>


      </Grid>
    </div>
  );
}