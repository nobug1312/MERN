import AddCardIcon from "@mui/icons-material/AddCard";
import Cloud from "@mui/icons-material/Cloud";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentPaste from "@mui/icons-material/ContentPaste";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import theme from "~/theme";
import GroupIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";

const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: theme.trello.boardContentHeight,
        display: "flex",
        p: "10px 0",
      }}
    >
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar-track": { m: 2 },
        }}
      >
        {/* box column */}
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            height: "fit-content",
            maxHeight: `calc(${
              theme.trello.boardContentHeight
            } - ${theme.spacing(5)})`,
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
          }}
        >
          {/* header */}
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
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
              Column Title
            </Typography>
            <Box>
              <Tooltip>
                <ExpandMoreIcon
                  id="basic-column-dropdown"
                  aria-controls={
                    open ? "basic-menu-column-dropdown" : undefined
                  }
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
          {/* list card */}
          <Box
            sx={{
              p: "0 5px",
              m: "0 5px",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: `calc(${
                theme.trello.boardContentHeight
              } - ${theme.spacing(
                5
              )} - ${COLUMN_FOOTER_HEIGHT} - ${COLUMN_HEADER_HEIGHT})`,
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ced0da",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#bfc2cf",
              },
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://gamek.mediacdn.vn/133514250583805952/2020/6/9/yumenoaika826928126232222189855196971868180806647558000n-15916880730441978328046.jpg"
                title="aika yumeno chan ~"
              />
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>NEW movie</Typography>
              </CardContent>
              <CardActions sx={{ p: "0 4px 8px 4px" }}>
                <Button size="small" startIcon={<GroupIcon></GroupIcon>}>
                  20
                </Button>
                <Button size="small" startIcon={<CommentIcon></CommentIcon>}>
                  15
                </Button>
                <Button
                  size="small"
                  startIcon={<AttachmentIcon></AttachmentIcon>}
                >
                  10
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>SSIS-501</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* footer */}
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button startIcon={<AddCardIcon></AddCardIcon>}>
              Add new card
            </Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: "pointer" }}></DragHandleIcon>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BoardContent;
