import AttachmentIcon from "@mui/icons-material/Attachment";
import CommentIcon from "@mui/icons-material/Comment";
import GroupIcon from "@mui/icons-material/Group";
import { Button, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Card as MuiCard } from "@mui/material";

function Card() {
  return (
    <MuiCard
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
        <Button size="small" startIcon={<AttachmentIcon></AttachmentIcon>}>
          10
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;
