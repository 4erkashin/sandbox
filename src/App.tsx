import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Typography variant="h1" gutterBottom>Very beginning</Typography>
        {/* eslint-disable react/no-unescaped-entities */}
        <Typography>So, even this 5 minute piece of shit could be called a working prototype of my
          blog.
          Yes, it's static. Yes, the content is only editable at the source code level. But this
          content can already be created and distributed - that's the point I'm interested in all
          this for.
        </Typography>
      </Container>
    </>
  );
}

export default App;
