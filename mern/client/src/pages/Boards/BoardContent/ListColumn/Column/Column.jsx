import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import AddCardIcon from "@mui/icons-material/AddCard";
import Cloud from "@mui/icons-material/Cloud";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentPaste from "@mui/icons-material/ContentPaste";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import theme from "~/theme";
import { mapOrder } from "~/utils/sort";
import ListCard from "./ListCards/ListCard";

function Column({ column }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const orderedCard = mapOrder(column?.cards, column?.cardOrderIds, "_id");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: column._id, data: { ...column } });

  const dndKitColumnStyle = {
    transform: CSS.Translate.toString(transform), // nếu dùng CSS.Transform.toString(transform) sẽ bị lỗi scale theo chiều dọc
    transition,
  };

  return (
    <Box
      sx={{
        minWidth: "300px",
        maxWidth: "300px",
        height: "fit-content",
        maxHeight: `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
          5
        )})`,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
        ml: 2,
        borderRadius: "6px",
      }}
      ref={setNodeRef}
      style={dndKitColumnStyle}
      {...attributes}
      {...listeners}
    >
      {/* header */}
      <Box
        sx={{
          height: theme.trello.columnHeaderHeight,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", cursor: "pointer", fontSize: "1rem" }}
        >
          {column?.title}
        </Typography>
        <Box>
          <Tooltip>
            <ExpandMoreIcon
              id="basic-column-dropdown"
              aria-controls={open ? "basic-menu-column-dropdown" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ color: "text.primary", cursor: "pointer" }}
            />
          </Tooltip>

          <Menu
            id="basic-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* List card */}
      <ListCard cards={orderedCard}></ListCard>
      {/* footer */}
      <Box
        sx={{
          height: theme.trello.columnFooterHeight,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button startIcon={<AddCardIcon></AddCardIcon>}>Add new card</Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon sx={{ cursor: "pointer" }}></DragHandleIcon>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default Column;
