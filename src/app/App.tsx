import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './theme';

export const App = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Container fixed>
          <Typography variant="h1" gutterBottom>Very beginning</Typography>
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Typography variant="h2" gutterBottom>Home</Typography>
                  <Typography gutterBottom>
                    So, even this 5 minute piece of shit could be called a working prototype
                    of my blog. Yes, it's static. Yes, the content is only editable
                    at the source code level. But this content can already be created
                    and distributed - that's the point I'm interested in all this for.
                  </Typography>
                  <nav>
                    <Link to="/about">About</Link>
                  </nav>
                </>
            )}
            />
            <Route
              path="about"
              element={(
                <>
                  <Typography variant="h2" gutterBottom>Domain name</Typography>
                  <Typography gutterBottom>
                    First of all it's a string. String that using for application specific naming
                    and addressing purposes in various networking contexts within the Internet.
                  </Typography>
                  <Typography>
                    In general domain name identifies a network domain
                    or an Internet Protocol resource (IP).
                    It's often used to identify services provided through the Internet
                    such a websites, emails etc.
                  </Typography>
                  <nav>
                    <Link to="/">Home</Link>
                  </nav>
                </>
            )}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
