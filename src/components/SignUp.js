import { useState } from "react";
import { supabase } from "../pages/lib/helper/supabaseClient.js";
import { useRouter } from "next/router";
import { Center, Title } from "@mantine/core";
import { Container, Anchor, Text } from "@mantine/core";
import classes from "../styles/AuthenticationTitle.module.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Loading funktion//
      // setLoading(true);
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      router.push("/");
    } catch (error) {
      alert(error.message);
    } finally {
      //Loading funktion//
      // setLoading(false);
    }
  };
  return (
    <div className="bg">
      <Container h={556.8} w={505.8} pt={30} className="form-bg">
        <div>
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

          <Title ta="center" mt={20} mb={40} className={classes.title}>
            Create Account
          </Title>
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
              placeholder="Password"
              type="password"
            />
            <button type="submit">Create account</button>
          </form>
          <Text
            c="dimmed"
            size="sm"
            ta="center"
            mt={5}
            onClick={() => router.push("/")}
          >
            Already have an account?
            <Anchor size="sm" component="button" ml={5}>
              Login
            </Anchor>
          </Text>
        </div>
      </Container>
    </div>
  );
};

export default SignUpForm;
