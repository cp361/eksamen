import {
  Anchor,
  Title,
  Text,
  Container,
  Center,
} from "@mantine/core";

import classes from "../../styles/AuthenticationTitle.module.css";
import { supabase } from "../../pages/lib/helper/supabaseClient.js";
import React, { useState } from "react";
import { useRouter } from "next/router";

export function AuthenticationForm() {
  //! Bruger useState-hook til at oprette lokale statevariabler for email og password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //! Henter router-objektet fra Next.js til håndtering af navigation
  const router = useRouter();

  //! Opretter en handleSubmit-funktion, der håndterer formularindsendelse
  const handleSubmit = async (e) => {
    
    //! Forhindrer standardformularindsendelse
    e.preventDefault();

    try {
      //! Forsøger at logge ind ved hjælp af Supabase-authentication
      const { user, session, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      //! Håndterer eventuelle fejl under login-processen
      if (error) throw error;

      //! Hvis login er vellykket, naviger til hjemmesiden
      router.replace("/home");

    } catch (error) {
      //! Viser en fejlmeddelelse, hvis der opstår en fejl under login
      alert('You have entered the wrong email or password.');
    }
  };

  //! Returnerer JSX med Mantine Container, logo, tekst og loginformular
  return (
    <Container h={556.8} w={505.08} pt={30} className="form-bg">

      <Center>
        {/* Viser et enkelt logo */}
        <div className="logo">
          <span className="logo-left"></span>
          <span className="logo-right"></span>
          <span className="logo-top"></span>
          <span className="logo-bottom"></span>
        </div>
      </Center>

      {/* CPH Business teksten */}
      <p className="logo-text">
        <span className="logo-first-text">cph</span>business
      </p>

      <div>

        <div>
          {/* Velkomsttekst og link til at oprette en konto */}
          <Title ta="center" className={classes.title}>
            Welcome Back!
          </Title>
          <Text
            c="dimmed"
            size="sm"
            ta="center"
            mt={5}
          >
            Don't have an account?
            <Anchor
              size="sm"
              component="button"
              onClick={() => router.push("/signup")}
              ml={5}
            >
              Create Account
            </Anchor>
          </Text>
        </div>


        <div>
          {/* Formular til login med e-mail og adgangskode */}
          <form onSubmit={handleSubmit} className="form">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="cph-xxYYY@cphbusiness.dk"
              type="email"
            />
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              type="password"
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </Container>
  );
}