import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");

  return (
    <Draggable>
      <div>
        {editMode ? (
          <input
            // Exit edit mode on blur
            onBlur={() => setEditMode(false)} 
            value={val}
            onChange={(e) => setVal(e.target.value)}
            // Optional: exit edit mode on Enter key press
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditMode(false);
              }
            }}
          />
        ) : (
          <h1
            // Use onDoubleClick to enter edit mode
            onDoubleClick={() => setEditMode(true)}
            style={{ cursor: 'pointer' }} // Change cursor to pointer for better UX
          >
            {val}
          </h1>
        )}
      </div>
    </Draggable>
  );
};

export default Text;





// import React, { useState } from "react";
// import Draggable from "react-draggable";

// const Text = () => {
//   const [editMode, setEditMode] = useState(false);
//   const [val, setVal] = useState("Double Click to Edit");

//   return (
//     <>
//       <Draggable>
//         { 
//             editMode ? (
//           <input
//             onDoubleClick={(e) => setEditMode(false)}
//             value={val}
//             onChange={(e) => setVal(e.target.value)}
//           />
//           ) : (
//             <h1 onDoubleClick={(e) => setEditMode(true)}>{val}</h1>
//         )
//         }
//       </Draggable>
//     </>
//   );
// };

// export default Text;
