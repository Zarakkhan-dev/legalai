import React, { useEffect, useState } from 'react';
import axiosInstance from "@/Component/axiosInstance"
function Mycomponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Use axiosInstance to make an authenticated GET request
    axiosInstance
      .get('/api/token')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error making authenticated request', error);
      });
  }, []);

  return (
    <div>
        <h1>Running</h1>
      {/* Render the data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Mycomponent;