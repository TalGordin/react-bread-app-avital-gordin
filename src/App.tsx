import { Box, Grid } from "@mui/material";
import CreatorLogo from './assets/CreatorLogo.avif';

function App() {
  return (
    <Box sx={{flexGrow:1}}>
      <Grid
        container
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"} 
      >
        <Grid size="auto">
          <Box
            component="img"
            src={CreatorLogo}
            alt="Creator Logo"
            sx={{ width: "35px", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;