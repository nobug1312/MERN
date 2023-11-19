import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import {
  Badge,
  Box,
  Button,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SvgIcon from "@mui/material/SvgIcon";
import { useState } from "react";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import ModeSelect from "../ModeSelect";
import Profile from "./Menus/Profile";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Template from "./Menus/Template";
import Workspace from "./Menus/Workspace";

function AppBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
        "&::-webkit-scrollbar-track": { m: 2 },
      }}
    >
      {/* Right item */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            fontSize="small"
            inheritViewBox
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            fontWeight={500}
            sx={{ fontSize: "1.2rem", color: "white" }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Workspace />
          <Recent />
          <Starred />
          <Template />
          <Button
            sx={{
              color: "white",
              border: "none",
              "&:hover": { border: "none" },
            }}
            variant="outlined"
            startIcon={<LibraryAddCheckIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>

      {/* Left item */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                onClick={() => setSearchValue("")}
                sx={{
                  color: searchValue ? "white" : "transparent",
                  cursor: "pointer",
                }}
              />
            ),
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "170px",
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
              "&.Mui-focused fieldset": { borderColor: "white" },
            },
          }}
        />

        <ModeSelect />

        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
