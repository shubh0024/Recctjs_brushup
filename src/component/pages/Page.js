//Build a pagiantioin using the useReducer to manage the current page and the number of the itemds per pages 
import React, { useEffect, useReducer } from 'react';

// Number of items per page
const itemsPerPage = 5;

// Reducer function to manage pagination state
const paginationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOTAL_ITEMS':
      return {
        ...state,
        totalItems: action.payload,
        totalPages: Math.ceil(action.payload / itemsPerPage),
      };

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

function Page() {
  const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`); // Dynamically creating 25 items

  // Initial state for pagination
  const initialState = {
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
  };

  // Use useReducer with the reducer function and initial state
  const [paginationState, dispatch] = useReducer(paginationReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_TOTAL_ITEMS', payload: data.length }); // Set total items on component mount
  }, [data]);

  // Calculate indices for the current page
  const startIndex = (paginationState.currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get items for the current page
  const currentItems = data.slice(startIndex, endIndex);

  // Handle page changes
  const handlePageChange = (page) => {
    if (page >= 1 && page <= paginationState.totalPages) {
      dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
    }
  };

  return (
    <div>
      <h1>Pagination is best way to serve data !</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => handlePageChange(paginationState.currentPage - 1)}
          disabled={paginationState.currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {paginationState.currentPage} of {paginationState.totalPages}
        </span>

        <button
          onClick={() => handlePageChange(paginationState.currentPage + 1)}
          disabled={paginationState.currentPage === paginationState.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Page;
