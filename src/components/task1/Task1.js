import React, { useState, useEffect } from 'react';

import Block from './Block';
import './Task1.css'


const DEFAULT_BLOCKS = [
  { id: 1, width: 200, height: 100, x: 10, y: 10, backgroundColor: "yellow", zIndex: 1 },
  { id: 2, width: 200, height: 100, x: 320, y: 10, backgroundColor: "blue", zIndex: 2 },
  { id: 3, width: 200, height: 100, x: 630, y: 10, backgroundColor: "red", zIndex: 3 },
  { id: 4, width: 200, height: 100, x: 940, y: 10, backgroundColor: "green", zIndex: 4 },
  { id: 5, width: 200, height: 100, x: 1250, y: 10, backgroundColor: "pink", zIndex: 5 }
];

const Task1 = () => {
  const [blocks, setBlocks] = useState(DEFAULT_BLOCKS);

  useEffect(() => {
    const savedBlocks = JSON.parse(localStorage.getItem('blocks'));
    if (savedBlocks) {
      setBlocks(savedBlocks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blocks', JSON.stringify(blocks));
  }, [blocks]);

  const handleResize = (id, newSize) => {
    setBlocks(blocks.map(block =>
      block.id === id ? { ...block, ...newSize } : block
    ));
  };

  const handleStop = (id, newPosition) => {
    setBlocks(blocks.map(block =>
      block.id === id ? { ...block, ...newPosition } : block
    ))
  }

  const handleDelete = (id) => {
    setBlocks(blocks.filter(block => block.id !== id))
  };

  const handleBringToFront = (id) => {
    setBlocks(blocks.map(block => block.id === id ?
      { ...block, zIndex: Math.max(...blocks.map(item => item.zIndex)) + 1 }
      : block))
  };

  const resetBlocks = () => {
    setBlocks(DEFAULT_BLOCKS);
  };

  return (
    <div className="background">
      <button className="reset-button" onClick={resetBlocks}>Reset to Default</button>
      {blocks.map(block => (
        <Block
          key={block.id}
          id={block.id}
          style={{ ...block, zIndex: block.zIndex }}
          onResize={handleResize}
          onStop={handleStop}
          onDelete={handleDelete}
          onBringToFront={handleBringToFront}
        />
      ))}
    </div>
  );
};

export default Task1;
