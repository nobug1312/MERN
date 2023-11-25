import { Box } from "@mui/material";
import theme from "~/theme";
import ListColumn from "./ListColumn/ListColumn";

function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: theme.trello.boardContentHeight,
        p: "10px 0",
      }}
    >
      <ListColumn></ListColumn>
    </Box>
  );
}

export default BoardContent;
