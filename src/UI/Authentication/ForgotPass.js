import React from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import bgimg from '../img/bg-1.jpg';
import icon from '../img/icon-1.png';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const theme = createTheme();

export default function ForgotPass() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      OTP: data.get('OTP'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: 'auto', paddingBottom: '40px', backgroundImage: `url(${bgimg})` }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${icon})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '300px 300px',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} elevation={6} >
          <Box
            className="login-box-modal"
            component={Paper}
            sx={{
              backgroundColor: 'white',
              my: 13,
              mx: 4,
              py: 5,
              px: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: '12px',

            }}
          >
            <Typography component="h5" variant="h5" style={{ color: 'black' }}>
            Maical Doe
            </Typography>
            <Typography component="p" variant="p" style={{ marginTop: '10px', fontSize: '15px' }}>
              Enter the OTP sent to your number
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="OTP"
                label="OTP"
                name="OTP"
                autoComplete="OTP"
                autoFocus
                size="small"
              />

              <Stack direction="row" spacing={5} sx={{ justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ fontSize: '0.875rem', color: 'white', backgroundColor: '#00D0FF' }}>
                 VERIFY
                </Button>
              </Stack>

              <Typography style={{ textAlign: 'center', fontSize: '0.875rem',marginBottom: '10px'}} >
                -   Or  -
              </Typography>
              <Typography style={{ textAlign: 'center', fontSize: '0.875rem' }} >
                <Link href="/" variant="body2" underline="none" style={{ fontSize: '0.875rem', marginLeft: '5px', color: '#ffa800' }} >
                  Sign In
                </Link> as a Different User
              </Typography>
            </Box>
          </Box>

        </Grid>
      </Grid>
    </ThemeProvider>
  );
}