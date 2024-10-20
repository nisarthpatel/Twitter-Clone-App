import { CssBaseline, Box, IconButton, Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function SideBar() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "250px",
          height: "100vh",
          p: 2,
          bgcolor: "#ffffff",
          borderRight: "2px solid #ddd",
        }}
      >
        <IconButton sx={{ p: 1 }}>
          <XIcon color="primary" fontSize="large" />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <IconButton sx={{ p: 1 }}>
            <HomeIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Home
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <IconButton sx={{ p: 1 }}>
            <SearchIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Explore
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <IconButton sx={{ p: 1 }}>
            <NotificationsNoneIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Notifications
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <IconButton sx={{ p: 1 }}>
            <MailOutlineIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Messages
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <IconButton sx={{ p: 1 }}>
            <BookmarkBorderIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Bookmarks
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <IconButton sx={{ p: 1 }}>
            <ListAltIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Lists
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <IconButton sx={{ p: 1 }}>
            <PersonOutlineIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Profile
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <IconButton sx={{ p: 1 }}>
            <MoreHorizIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            More
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SideBar;
