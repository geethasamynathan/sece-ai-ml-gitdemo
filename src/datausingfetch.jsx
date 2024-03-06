import React, { useState, useEffect } from "react";

export default function DataUsingFetch() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>using JavaScript in-built FETCH API</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "25em",
                backgroundColor:"#82E0AA",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'black' }}>
                {dataObj.name}</p>
                <p style={{ fontSize: 20, color: 'black' }}>
                {dataObj.email}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}
