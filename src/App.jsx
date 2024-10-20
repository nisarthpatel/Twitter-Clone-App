import MidBar from "./components/MidBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import { Box } from "@mui/material";

function App() {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <SideBar />
      <MidBar />
      <RightBar />
    </Box>
  );
}

export default App;
