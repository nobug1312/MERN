import { Box } from "@mui/material";
import theme from "~/theme";
import Card from "./Cards/Card";

function ListCard() {
  return (
    <Box
      sx={{
        p: "0 5px",
        m: "0 5px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
          5
        )} - ${theme.trello.columnFooterHeight} - ${
          theme.trello.columnHeaderHeight
        })`,
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ced0da",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#bfc2cf",
        },
      }}
    >
      <Card></Card>
    </Box>
  );
}

export default ListCard;
