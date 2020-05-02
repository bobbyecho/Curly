import React from 'react';
import { Container, TextInput, Button } from '@ui';

function Login() {
  return (
    <Container>
      <TextInput label="Email" />
      <TextInput label="Password" />
      <Button>Submit</Button>
    </Container>
  );
}

export default Login;
