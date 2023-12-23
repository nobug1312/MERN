import { Box } from "@mui/material";
import theme from "~/theme";
import Card from "./Cards/Card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListCard({ cards }) {
  return (
    <SortableContext
      items={cards?.map((c) => c._id)}
      strategy={verticalListSortingStrategy}
    >
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
        {cards.map((card) => {
          return <Card key={card._id} card={card}></Card>;
        })}
      </Box>
    </SortableContext>
  );
}

export default ListCard;
