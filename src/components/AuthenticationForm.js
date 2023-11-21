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
  Loader,
} from "@mantine/core";

import classes from "../styles/AuthenticationTitle.module.css";
import { supabase } from "../pages/lib/helper/supabaseClient.js";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useFavicon } from "@mantine/hooks";
import { useRouter } from "next/router";
import setLoading from "@/pages/testingenviorement/loader";

export function AuthenticationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { user, session, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      router.replace("/home");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container h="{430}" pt={30} className="form-bg">
      <Center>
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
          <Title ta="center" className={classes.title}>
            Velkommen tilbage!
          </Title>
          <Text
            c="dimmed"
            size="sm"
            ta="center"
            mt={5}
            onClick={() => router.push("/signup")}
          >
            Har du ikke en bruger endnu?
            <Anchor size="sm" component="button" ml={5}>
              Opret bruger
            </Anchor>
          </Text>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              type="email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
