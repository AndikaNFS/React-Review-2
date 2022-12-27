// import logo from './logo.svg';
// import './App.css';
import { Box, ThemeProvider } from "@mui/material";
import theme from "./themes/themes";
// import { Routes, Route, Link } from 'react-router-dom';

import { Button, Typography } from "@mui/material";

// Import ListMovie (Data JSON)
// import ListMovies from "./containers/ListMovies";

// Import ListMovies (Data TMDB)
import ListMovies from "./containers/ListMoviesReal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <h1>React Router</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          
        </Routes> */}
        <header className="App-header">
          <Box p={2}>
            <Typography variant="h5">React List dan Axios</Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              display: "flex",
              gap: 2,
            }}
          >
            <Button variant="contained" color="primary">
              Warna Hijau
            </Button>

            <Button variant="contained" color="secondary">
              Warna Biru
            </Button>
          </Box>
        </header>
        {/* ListMovie */}
        {/* <section style={{ paddingLeft: 16, paddingRight: 16 }}>
          <ListMovies />
        </section> */}
        <section style={{ paddingLeft: 16, paddingRight: 16 }}>
          <ListMovies />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
