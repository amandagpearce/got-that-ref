import React, { useState } from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }

    // Clear any previous error messages
    setError(null);

    onSubmit({
      login: {
        email,
        password,
      },
    });
  };

  return (
    <Sheet
      sx={{
        width: 400,
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 4,
        borderRadius: 'sm',
        boxShadow: 'md',
      }}
      variant="outlined"
    >
      <div>
        <Typography level="h4" component="h1">
          <b>Login</b>
        </Typography>
        <Typography level="body-sm">Sign in to continue.</Typography>
      </div>

      <form onSubmit={submitHandler}>
        <FormControl sx={{ my: 2 }}>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ my: 2 }}>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          sx={{ mt: 1 /* margin top */, background: '#0d3769' }}
        >
          Log in
        </Button>
      </form>
    </Sheet>
  );
};

export default LoginForm;
