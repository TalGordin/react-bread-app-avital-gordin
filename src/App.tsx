import { Box, Grid } from "@mui/material";
import CreatorLogo from './assets/CreatorLogo.avif';

function App() {
  return (
    <Box sx={{flexGrow:1}}>
      <Grid
        container
        justifyContent={"flex-start"}
        alignItems={"center"} 
        paddingBottom={"410px"}
        paddingLeft={"616px"}
      >
        <Grid size="auto">
          <Box
            component="img"
            src={CreatorLogo}
            alt="Creator Logo"
            sx={{ width: "32px", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;