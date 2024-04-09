import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  console.log("attributes", attributes)

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className="h-12 bg-green-900 px-12">
      {props.children}
    </button>
  );
}