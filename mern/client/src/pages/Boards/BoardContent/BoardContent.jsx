import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import theme from "~/theme";
import { mapOrder } from "~/utils/sort";
import ListColumn from "./ListColumn/ListColumn";
import Column from "./ListColumn/Column/Column";
import Card from "./ListColumn/Column/ListCards/Cards/Card";
import { cloneDeep } from "lodash";

const ACTIVE_DRAG_TYPE = {
  COLUMN: "ACTIVE_DRAG_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_TYPE_CARD",
};

function BoardContent({ board }) {
  const [orderedColumn, setOrderedColumn] = useState([]);
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);

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

  const findColumnByCardId = (cardId) => {
    return orderedColumn.find((column) =>
      column.cards.map((card) => card._id)?.includes(cardId)
    );
  };

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_TYPE.CARD
        : ACTIVE_DRAG_TYPE.COLUMN
    );
    setActiveDragItemData(event?.active?.data?.current);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (activeDragItemType === ACTIVE_DRAG_TYPE.COLUMN) {
      return;
    }

    if (!active || !over) return;
    //asign tên mới cho id, data, current, trong destructuring
    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;

    const { id: overCardId } = over;
    const activeCol = findColumnByCardId(activeDraggingCardId);
    const overCol = findColumnByCardId(overCardId);
    if (!activeCol || !overCol) return;

    if (activeCol._id != overCol._id) {
      let newCardIndex;
      setOrderedColumn((prevCol) => {
        const overCardIndex = overCol?.cards?.findIndex(
          (card) => card._id === overCardId
        );

        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;

        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overCol?.cards?.length + 1;
        //clone mảng orderedColumnsState cũ ra một cái mới để xử lý data rồi return
        const nextCols = cloneDeep(prevCol);
        const nextActiveCol = nextCols.find((col) => col._id === activeCol._id);
        const nextOverCol = nextCols.find((col) => col._id === overCol._id);

        if (nextActiveCol) {
          // xoá card
          nextActiveCol.cards = nextActiveCol.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );
          //cập nhật
          nextActiveCol.cardOderIds = nextActiveCol.cards.map(
            (card) => card._id
          );
        }

        if (nextOverCol) {
          // kiểm tra card đang kéo nó có tồn tại trong overCol mới hay chưa, nếu có rồi thì xoá
          nextActiveCol.cards = nextActiveCol.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );

          //add vào overCol, hàm toSpliced trả về 1 mảng mới, còn splice là modify mảng cũ và trả về mảng cũ
          nextOverCol.cards = nextOverCol.cards.toSpliced(
            newCardIndex,
            0,
            activeDraggingCardData
          );

          //cập nhật
          nextOverCol.cardOderIds = nextOverCol.cards.map((card) => card._id);
        }
        console.log(nextCols);
        return nextCols;
      });
    }
  };

  const handleDragEnd = (event) => {
    console.log("On Drag End:", event);
    const { active, over } = event;

    if (activeDragItemType === ACTIVE_DRAG_TYPE.CARD) {
      return;
    }

    if (!active || !over) return;

    if (active.id != over.id) {
      const oldIndex = orderedColumn.findIndex((c) => c._id === active.id);
      const newIndex = orderedColumn.findIndex((c) => c._id === over.id);

      const orderedColumnAfterMoved = arrayMove(
        orderedColumn,
        oldIndex,
        newIndex
      );
      setOrderedColumn(orderedColumnAfterMoved);
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <DndContext
      sensors={mySensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
    >
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
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_TYPE.COLUMN && (
            <Column column={activeDragItemData}></Column>
          )}
          {activeDragItemType === ACTIVE_DRAG_TYPE.CARD && (
            <Card card={activeDragItemData}></Card>
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
