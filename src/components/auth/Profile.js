"use client";

import React, { useEffect, useState } from 'react';
import { Container, Avatar, Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { supabase } from '@/pages/lib/helper/supabaseClient';





export function Profile() {
  const [userEmail, setUserEmail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    retrieveUser();
  }, []);

  const retrieveUser = async () => {
    try {
      const { data, error } = await supabase.auth.user();

      if (error) {
        throw error;
      }

      if (data) {
        // Opdater state med brugerens e-mail
        setUserEmail(data.email);
        console.log(data)
      }
    } catch (error) {
      console.error('Error retrieving user:', error.message);
    }
  };

  // const session = supabase.auth.getSession();
  // if (session) {
  //   // Brugeren er logget ind
  //   // Gennemfør yderligere handlinger her
  //   console.log(session?.user);
  // }

  // const test = async () => {

  //   const { data, error } = await supabase.auth.refreshSession()
  //   const { session, user } = data
  //   console.log(session?.user);
  // }

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

          {/* Vi skal også have lavet dette om til, så den viser navnet på brugeren der er logget ind */}
          <h1>Hi {userEmail || 'User'} </h1>
          <p>Welcome back!</p>
        </div>


      </div>

      {/* Midlertidlig logud funktion til login-siden / man bliver ikke rigtigt logget ud */}
      <Button onClick={() => router.push("/")}>Logout</Button>
    </Container>
  );
};