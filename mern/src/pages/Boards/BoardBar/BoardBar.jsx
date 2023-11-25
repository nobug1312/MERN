import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";
import theme from "~/theme";
const MENU_STYLE = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

function BoardBar() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        "&::-webkit-scrollbar-track": { m: 2 },
      }}
    >
      {/* Right item */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          clickable
          label="Kvi Stack Board"
          sx={MENU_STYLE}
        />
        <Chip
          icon={<VpnLockIcon />}
          clickable
          label="Public/Private workspace"
          sx={MENU_STYLE}
        />
        <Chip
          icon={<AddToDriveIcon />}
          clickable
          label="Add to Google Drive"
          sx={MENU_STYLE}
        />
        <Chip
          icon={<BoltIcon />}
          clickable
          label="Automation"
          sx={MENU_STYLE}
        />
        <Chip
          icon={<FilterListIcon />}
          clickable
          label="Filter"
          sx={MENU_STYLE}
        />
      </Box>

      {/* Left item */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": { borderColor: "white" },
          }}
        >
          {" "}
          Invite
        </Button>
        <AvatarGroup
          max={3}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": { bgcolor: "#a4b0be" },
            },
          }}
        >
          <Tooltip title="Aika Yumeno">
            <Avatar
              alt="Remy Sharp"
              src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8554daf4-9027-4d67-a0e0-6162f078f581/width=768/aikayumeno_loha.jpeg"
            />
          </Tooltip>
          <Tooltip title="Asahi Mizuno">
            <Avatar
              alt="Remy Sharp"
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zGK40C1hqIOE9pjCiIeWgXFLtzv.jpg"
            />
          </Tooltip>
          <Tooltip title="Meguri Fujiura">
            <Avatar
              alt="Remy Sharp"
              src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8d9cfd09-aee7-4639-9b6a-fea3677868ae/width=700/00000-chomni_471871544.jpeg"
            />
          </Tooltip>
          <Tooltip title="Yua Mikami">
            <Avatar
              alt="Remy Sharp"
              src="https://gamek.mediacdn.vn/133514250583805952/2021/6/9/photo-1-16232229002241474687644.jpg"
            />
          </Tooltip>
          <Tooltip title="rei kamiki">
            <Avatar
              alt="Remy Sharp"
              src="https://img.soccersuck.com/images/2022/11/29/02c93db722b847e28a17ca1579b4d072_317221870_130239523187096_4497601803287071563_n.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
