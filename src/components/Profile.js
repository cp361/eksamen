import React from 'react';
import { Container, Avatar } from '@mantine/core';





export function Profile() {

  return (
    <Container className='profile-container' fluid h={100} bg="#FBB040">
      <div className='profile-info'>
        <div className='profile-photo'>
          <Avatar className='profile-avatar' variant='filled' color="blue" radius="xl">MJ</Avatar>
        </div>
        <div className='profile-text'>
          <h1>Hi Mia Jensen</h1>
          <p>Welcome back!</p>
        </div>
      </div>
    </Container>
  );
};