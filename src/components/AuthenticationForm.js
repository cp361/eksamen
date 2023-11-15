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
  
  export function AuthenticationForm() {
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
              
              <Title ta="center" className={classes.title}>
                Welcome back!
              </Title>
              <Text c="dimmed" size="sm" ta="center" mt={5}>
                Do not have an account yet?{" "}
                <Anchor size="sm" component="button">
                  Create account
                </Anchor>
              </Text>

              <Paper withBorder shadow="md" p={30} mt={30} radius="md" className='form-border'>
                <TextInput
                  label="Email"
                  placeholder="you@mantine.dev"
                  required
                />
                <PasswordInput
                  label="Password"
                  placeholder="Your password"
                  required
                  mt="md"
                />
                <Group justify="space-between" mt="lg">
                  <Checkbox label="Remember me" />
                  <Anchor component="button" size="sm">
                    Forgot password?
                  </Anchor>
                </Group>
                <Button fullWidth mt="xl" className='sign-in' >
                  Sign in
                </Button>
              </Paper>
            </Container>
    )
  }