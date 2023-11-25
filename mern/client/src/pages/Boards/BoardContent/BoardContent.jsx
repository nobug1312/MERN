import {
  DndContext,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import theme from "~/theme";
import { mapOrder } from "~/utils/sort";
import ListColumn from "./ListColumn/ListColumn";

function BoardContent({ board }) {
  const [orderedColumn, setOrderedColumn] = useState([]);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: 10,
      delay: 250,
      tolerance: 500,
    },
  });

  const mySensors = useSensors(mouseSensor, touchSensor);
  useEffect(() => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const handleDragEnd = (event) => {
    console.log("On Drag End:", event);
    const { active, over } = event;

    if (!over) return;

    if (active.id != over.id) {
      const oldIndex = orderedColumn.findIndex((c) => c._id === active.id);
      const newIndex = orderedColumn.findIndex((c) => c._id === over.id);

      const orderedColumnAfterMoved = arrayMove(
        orderedColumn,
        oldIndex,
        newIndex
      );
      // const newColumnOrderIds = orderedColumnAfterMoved.map((x) => x._id);
      // console.log(newColumnOrderIds);
      setOrderedColumn(orderedColumnAfterMoved);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={mySensors}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          width: "100%",
          height: theme.trello.boardContentHeight,
          p: "10px 0",
        }}
      >
        <ListColumn columns={orderedColumn}></ListColumn>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
