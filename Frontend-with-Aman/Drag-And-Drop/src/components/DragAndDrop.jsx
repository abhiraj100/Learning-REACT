import React, { useRef, useState } from "react";

const DragAndDrop = ({ initialState }) => {
  const [data, setData] = useState(initialState);
//   console.log(data);
  const dragItem = useRef();
  const dragContainer = useRef();

  const handleDragStart = (e, item, container) => {
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
  }

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  }

  const handleDrop = (e, targetContainer) => {
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    setData((prev) => {
        const newData = {...prev};
        newData[sourceContainer] = newData[sourceContainer].filter((i) => i !== item);
        newData[targetContainer] = [...newData[targetContainer], item];
        return newData;
    });
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <h2 style={{ textAlign: "center", color: "lavender", marginTop: "50px", fontSize: "40px", textDecoration: "underline"}}>Drag-and-Drop</h2>

    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "60px",
      }}
    >
      {Object.keys(data).map((container, index) => {
        return (
          <div
            key={index}
            onDrop={(e) => handleDrop(e, container)}
            onDragOver={(e) => handleDragOver(e)}
            style={{
              background: "#f0f0f0",
              padding: "1rem",
              marginBottom: "5px",
              width: "250px",
              minHeight: "300px",
            }}
          >
            <h2 style={{ textAlign: "center" }}>{container}</h2>
            {data[container].map((item, idx) => {
              return (
                <div
                  onDragStart={(e) => handleDragStart(e, item, container)}
                  onDragEnd={(e) => handleDragEnd(e)}
                  draggable={true}
                  style={{
                    userSelect: "none",
                    padding: 16,
                    margin: "0 0 8px 0",
                    backgroundColor: "white",
                    cursor: "move",
                  }}
                  key={idx}
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
    <h2 style={{ textAlign: "center", color: "lavender", marginTop: "50px", textDecoration: "underline"}}>Created By Abhiraj Yadav</h2>
    </>
  );
};

export default DragAndDrop;
