import React, { useState } from "react";
import InfiniteList from "./InfiniteList";
import mock_fetch from "./mock_data";

const App = props => {
  const [rows, setRows] = useState([]);

  const fetchData = (offset, limit) =>
    mock_fetch(offset, limit).then(data => {
      setRows([...rows, ...data]);
    });

  return (
    <InfiniteList rows={rows} fetchData={fetchData} limit={10}>
      {row => <div>
        {row.name}
      </div>}
    </InfiniteList>
  );
};

export default App;
