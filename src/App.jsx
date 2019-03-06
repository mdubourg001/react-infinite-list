import React, { useState } from "react";
import InfiniteList from "./InfiniteList";
import mock_fetch from "./mock_data";

const App = () => {
  const [rows, setRows] = useState([]);
  const limit = 10;

  const fetchData = offset =>
    mock_fetch(offset, limit).then(data => {
      setRows([...rows, ...data]);
    });

  return (
    <InfiniteList rows={rows} fetchData={fetchData} limit={limit}>
      {(row, index, ref) => (
        <div key={index} ref={ref}>
          {row.name}
        </div>
      )}
    </InfiniteList>
  );
};

export default App;
