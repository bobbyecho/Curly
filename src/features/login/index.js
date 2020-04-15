import React from 'react';
import { Container, TextInput, Button } from '_ui';

function Login(props) {
  return (
    <Container>
      <TextInput label="Email" />
      <TextInput label="Password" />
      <Button>Submit</Button>
    </Container>
  );
}

export default Login;
