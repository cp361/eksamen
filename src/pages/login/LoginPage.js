import React from 'react'
import { AuthenticationForm } from '@/components/auth/AuthenticationForm'
import { Grid, GridCol } from '@mantine/core'
import Image from 'next/image'
import sideImg from '../../assets/home-background.png'
import { PageWrapper } from '@/pagewrapper'

const LoginPage = () => {
  return (

    //! Page wrapperen gør så der kommer en lille animation ved load
    <PageWrapper>
      <div className="bg-second div-text">
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
    </PageWrapper>

  )
}

export default LoginPage