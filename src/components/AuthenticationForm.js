import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Center,
} from '@mantine/core';

import classes from '../styles/AuthenticationTitle.module.css';
import { supabase } from '../lib/helper/supabaseClient.js';
import React, { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { useFavicon } from '@mantine/hooks';

export function AuthenticationForm() {

 const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();

    setUser(session?.user)

    const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				switch (event) {
					case "SIGNED_IN":
						setUser(session?.user);
						break;
					case "SIGNED_OUT":
						setUser(null);
						break;
					default:
				}
			}
		);
		return () => {
			authListener.subscription.unsubscribe();
		};
  });

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  const logout = async () => {
		await supabase.auth.signOut();
	};
  
  return (
          <Container h='{430}' pt={30} className='form-bg'>
            <Center>
              <div className='logo'>
                <span className='logo-left'></span>
                <span className='logo-right'></span>
                <span className='logo-top'></span>
                <span className='logo-bottom'></span>
              </div>
            </Center>

            {/* CPH Business teksten */}
            <p className='logo-text'><span className='logo-first-text'>cph</span>business</p>
            
            <div>
            {user ? (
				<div>
					<h1>hallo virk nu for satan</h1>
					<button onClick={logout}>Logout</button>
				</div>
			) : (
				<div>
          <Title ta="center" className={classes.title}>
              Velkommen tilbage! 
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
              Har du ikke en bruger endnu?{" "}
              <Anchor size="sm" component="button">
                Opret bruger
              </Anchor>
            </Text>
            <button onClick={login}>Login med Github</button>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md" className='form-border'>
              <TextInput
                label="Email"
                name='email'
                placeholder="cph-xxXXX@cphbusiness.dk"
                required
              />
              <PasswordInput
                label="Adgangskode"
                name='password'
                placeholder="Din adgangskode"
                required
                mt="md"
              />
              <Group justify="space-between" mt="lg">
                <Checkbox label="Husk mig" />
                <Anchor component="button" size="sm">
                  Glemt adgangskode?
                </Anchor>
              </Group>
              <Button fullWidth mt="xl" className='sign-in' >
                Login
              </Button>
            </Paper>
        </div>
			)}
            </div>
            
            
          </Container>
  )
}