import React, { useState } from 'react';
import { Card, CardContent, TextField, Button } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleRegister = () => {
    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSubmit = () => {
    if (isSignIn) {
      handleSignIn();
    } else {
      handleRegister();
    }
  };

  const handleToggleMode = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <CardContent>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            style={styles.input}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            style={styles.input}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
            style={styles.submitButton}
          >
            <strong>SUBMIT</strong>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleToggleMode}
            fullWidth
            style={styles.regButton}
          >
            <strong>{isSignIn ? 'REGISTER' : 'SIGNIN'}</strong>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '35px',
  },
  card: {
    width: 300,
    padding: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'transparent',
    color: 'green',
    marginBottom: 10,
  },
  regButton: {
    color: 'red',
    backgroundColor: 'transparent',
  }
};

export default LoginPage;
