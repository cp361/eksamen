import React from 'react'
import { AuthenticationForm } from '@/components/AuthenticationForm'
import { Grid, GridCol } from '@mantine/core'
import Image from 'next/image'
import sideImg from '../../assets/home-background.png'

const LoginPage = () => {
  return (
    
    <div className="bg div-text">
      <Grid className='grid' align='center'>
        <GridCol span='auto' h={556.8} w={400} className='img-bg'>
          <Image
            src={sideImg}
            width={500}
            height={556.8}
            alt="Login side image"
          />
        </GridCol>

        <GridCol span='auto'>

        <AuthenticationForm />

        </GridCol>

      </Grid>
    </div>
    
  )
}

export default LoginPage