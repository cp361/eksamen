import React from 'react';
import { Container, Avatar, Button } from '@mantine/core';
import { useRouter } from 'next/router';





export function Profile() {

  const router = useRouter();

  return (
    <Container className='profile-container' fluid h={100} bg="var(--cphYellow)">
      <div className='profile-info'>
        <div className='profile-photo'>
          <Avatar className='profile-avatar' variant='filled' color="blue" radius="xl">MJ</Avatar>
        </div>
        <div className='profile-text'>
          
          {/* Vi skal også have lavet dette om til, så den viser navnet på brugeren der er logget ind */}
          <h1>Hi Mia Jensen</h1>
          <p>Welcome back!</p>
        </div>

        
      </div>

        {/* Midlertidlig logud funktion til login-siden / man bliver ikke rigtigt logget ud */}
        <Button onClick={() => router.push("/")}>Logout</Button>
    </Container>
  );
};