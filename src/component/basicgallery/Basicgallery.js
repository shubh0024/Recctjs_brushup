import React, { useReducer } from "react";

// Initial state for the reducer
const initialState = {
  currentImageIndex: 0,
};

// Reducer function to handle navigation
const imagereducer = (state, action) => {
  switch (action.type) {
    case "NEXT": {
      return {
        ...state,
        currentImageIndex:
          (state.currentImageIndex + 1) % images.length, // Loop back to the first image
      };
    }
    case "PREV": {
      return {
        ...state,
        currentImageIndex:
          (state.currentImageIndex - 1 + images.length) % images.length, // Loop back to the last image
      };
    }
    default:
      return state;
  }
};

// Direct image links
const images = [
  "https://via.placeholder.com/200?text=Image+1",
  "https://via.placeholder.com/200?text=Image+2",
  "https://via.placeholder.com/200?text=Image+3",
  "https://via.placeholder.com/200?text=Image+4",
  "https://via.placeholder.com/200?text=Image+5",
];

function BasicGallery() {
  const [state, dispatch] = useReducer(imagereducer, initialState);

  const currentImage = images[state.currentImageIndex];

  return (
    <div>
      <h1>Image Gallery</h1>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid black",
          margin: "10px",
        }}
      >
        {/* Display the current image */}
        <img
          src={currentImage}
          alt="Current"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <button onClick={() => dispatch({ type: "PREV" })}>Previous</button>
      <button onClick={() => dispatch({ type: "NEXT" })}>Next</button>
    </div>
  );
}

export default BasicGallery;
