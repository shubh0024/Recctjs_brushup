import React, { useState } from "react";
import axios from "axios";

function FetchAllData() {
  const [dataList, setDataList] = useState([]); // Store all fetched data
  const [loading, setLoading] = useState(false); // Track loading state

  const fetchData = async () => {
    setLoading(true); // Start loading
    const apiEndpoints = [
      "https://jsonplaceholder.typicode.com/posts/1",
      "https://jsonplaceholder.typicode.com/posts/2",
      "https://jsonplaceholder.typicode.com/posts/3",
    ];

    try {
      const responses = await Promise.all(
        apiEndpoints.map((url) => axios.get(url))
      );
      const allData = responses.map((res) => res.data); // Extract data from responses
      setDataList(allData); // Set all fetched data
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <h1>Fetch Data from Multiple APIs</h1>
      <button
       style={{color:'seagreen',border:'none' ,borderRadius:'2px ' ,background:'orange', width:'100px', height:'20px' ,cursor:'pointer'}}
       onClick={fetchData}>Fetch All Data</button>

      {loading && <p style={{color:'green'}}>Loading...</p>}

      {/* Render all fetched data */}
      <div>
        {dataList.length > 0 ? (
          dataList.map((data, index) => (
            <div
              key={index}
              style={{
                border: "1px solid gray",
                margin: "10px",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h2 style={{ color: "blue" }}>Title: {data.title}</h2>
              <p>Body: {data.body}</p>
              <p>
                <strong style={{color:'green'}}>ID:</strong> {data.id}
              </p>
            </div>
          ))
        ) : (
          <p style={{color:'red'}}>No data loaded yet !</p>
        )}
      </div>
    </div>
  );
}

export default FetchAllData;
