"use client";

import React, { useEffect, useState } from 'react';
import { Container, Avatar, Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { supabase } from '@/pages/lib/helper/supabaseClient';
import useMyContext from '@/context/my-context';





export function Profile() {

  const { UserEmail } = useMyContext();

  const router = useRouter();

  return (
    <Container className='profile-container' fluid h={100} bg="var(--cphYellow)">
      <div className='profile-info'>
        <div className='profile-photo'>
          <Avatar
            className='profile-avatar'
            variant='filled'
            color="var(--cphBlue)"
            radius="xl">
          </Avatar>
        </div>
        <div className='profile-text'>

          <h1>Hi {UserEmail} </h1>
          <p>Welcome back!</p>
        </div>


      </div>

      {/* Midlertidlig logud funktion til login-siden / man bliver ikke rigtigt logget ud */}
      <Button onClick={() => router.push("/")}>Logout</Button>
    </Container>
  );
};