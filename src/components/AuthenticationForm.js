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
    MantineProvider,
    Grid,
    GridCol,
  } from '@mantine/core';

  import classes from '../styles/AuthenticationTitle.module.css';
  
  export function AuthenticationForm() {
    return (
      <MantineProvider
      // theme={{
      //     colors: {
      //         grape: ["#FBB040", "#00163B", "#EEBEFA", "#E599F7", "#DA77F2", "#CC5DE8", "#BE4BDB", "#AE3EC9", "#9C36B5", "#862E9C",],
      //     },
      // }}
      // styles={{
      //     Paper: (theme) => ({
      //         root: {
      //             backgroundColor: theme.colors.grape[1]
      //         }
      //     })
      // }}
      >
        <Grid justify='center' align='center'>

          <GridCol span="auto">

            <h1>Lorte Mantine</h1>

          </GridCol>



          <GridCol span="auto">
            <Container size={420}>
              <Title ta="center" className={classes.title}>
                Welcome back!
              </Title>
              <Text c="dimmed" size="sm" ta="center" mt={5}>
                Do not have an account yet?{" "}
                <Anchor size="sm" component="button">
                  Create account
                </Anchor>
              </Text>

              <Paper withBorder shadow="md" p={30} mt={30} radius="md">
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
                <Button fullWidth mt="xl">
                  Sign in
                </Button>
              </Paper>
            </Container>
          </GridCol>

        </Grid>
      </MantineProvider>
    )
  }