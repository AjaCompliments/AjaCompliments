/* eslint-disable no-undef */
import React from 'react';
import { makeStyles } from "@mui/styles";
//import {useTheme} from '@mui/material/';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Button,Grid, Typography, Paper, Link } from '@mui/material/';
import { Email, Facebook, Google } from '@mui/icons-material';

const theme = createTheme("dark");

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: "#fdf7dd",
  },
  paper: {
    margin: 'auto',
    padding: 4,
    textAlign: 'center',
    maxWidth: 400,
    backgroundColor: "#fdf7dd",
  },
  logo: {
    marginBottom: "2vh",
  },
  button: {
    margin: "1vh",
  },
}));

const SignInPage = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center" alignItems="center" className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <img src="/your-logo.png" alt="Your Logo" className={classes.logo} />
          <Typography variant="h5" gutterBottom>
            Connexion
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Google />}
            onClick={() => signInWithGoogle()}
          >
            Connexion avec Google
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Facebook />}
            onClick={() => signInWithFacebook()}
          >
            Connexion avec Facebook
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Email />}
            onClick={() => signInWithEmail()}
          >
            Connexion avec Email
          </Button>
          <Typography variant="body2" gutterBottom>
            Vous n'avez pas de compte? <Link href="/inscription">Inscrivez-vous</Link>
          </Typography>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInPage;