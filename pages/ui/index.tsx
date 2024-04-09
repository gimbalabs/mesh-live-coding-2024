import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";

export default function UiPage() {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState(null);

  const slts = [1011, 1012, 1013, 1014];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <h1>Example</h1>
      <p>current index: {currentIndex}</p>
      <DndContext onDragEnd={handleDragEnd}>
        {slts.map((slt) => (
          <Draggable key={slt} id={slt}>{slt}</Draggable>
        ))}

        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            {"Drop here"}
          </Droppable>
        ))}
      </DndContext>
    </div>
  );

  function handleDragEnd(event) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
    setCurrentIndex(over.id);
  }
}
