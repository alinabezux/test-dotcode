import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const Block = ({ id, style, onResize, onDelete, onBringToFront, onStop }) => {
    const blockRef = useRef(null);

    const handleButtonClick = (e) => {
        e.stopPropagation();
        onDelete(id);
    };

    return (
        <Draggable
            grid={[25, 25]}
            nodeRef={blockRef}
            position={{ x: style.x, y: style.y }}
            onStop={(e, data) => onStop(id, { x: data.x, y: data.y })}
            handle=".drag-handle"
        >
            <div
                ref={blockRef}
                style={{
                    ...style,
                    position: 'absolute',
                    border: '1px solid #000',
                    zIndex: style.zIndex
                }}
                onClick={() => onBringToFront(id)}
            >
                <ResizableBox
                    width={style.width}
                    height={style.height}
                    minConstraints={[50, 50]}
                    onResize={(e, data) => onResize(id, data.size)}
                    resizeHandles={['s', 'e']}
                  
                >
                    <div >
                        <div className="drag-handle" style={{
                            position: 'relative',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            cursor: 'move',

                        }}>
                            <button className="delete-button" onClick={handleButtonClick}>-</button>
                            <p style={{ padding: "3px", margin: "0" }}>Title {id}</p>
                        </div>
                    </div>
                </ResizableBox>
            </div>
        </Draggable>
    );
};

export default Block;
