# react-infinite-list

A handy React component to render infinite, onScroll fetched, data lists.

Demo: https://react-infinite-list.netlify.com

![GitHub](https://img.shields.io/github/license/mdubourg001/react-infinite-list.svg)
![npm](https://img.shields.io/npm/v/@damnhotuser/react-infinite-list.svg)

---

### Install

```sh
$ npm install @damnhotuser/react-infinite-list
```

---

### Usage

`react-infinite-list` provides a single component, `InfiniteList`.

```jsx
import React, { useState } from "react";

import InfiniteList from "@damnhotuser/react-infinite-list";
import mock_fetch from "./mock_data"; // mocking an API service

const App = props => {
  const [rows, setRows] = useState([]);

  const fetchData = (offset, limit) =>
    mock_fetch(offset, limit).then(data => {
      setRows([...rows, ...data]);
    });

  return (
    /*
     * InfiniteList takes three needed arguments:
     * `rows` are data to display in the list
     * `fetchData` is called on rendering and when needed, on scroll
     * `limit` is the number of rows to fetch on each `fetchData` call
     *
     * InfiniteList's `children` must be a function, and has the row to render passed as an argument
     *
     * current `index` and `ref` will also be passed as arguments of your `children` function, it is IMPORTANT to pass ref to the rendered list element for the onScroll fetch to work
     */
    <InfiniteList rows={rows} fetchData={fetchData} limit={limit}>
      {(row, index, ref) => (
        <div key={index} ref={ref}>
          {row.name}
        </div>
      )}
    </InfiniteList>
  );
};
```

<br>

**⚠️ InfiniteList's `children` must be a function. The current row to render will be passed as an argument.**

**⚠️ current `index` and `ref` will also be passed as arguments of your `children` function, it is IMPORTANT to pass ref to the rendered list element for the onScroll fetch to work**

<br>

`InfiniteList` takes also 3 optionnal arguments:

- `containerClasses` are classes that will be passed as an argument to the `div` holding your list.
- `containerStyle` are style rules that will be passed as an argument to the `div` holding your list.
- `fetchThreshold` (number) is the number of element before the end of the displayed list to wait before calling `fetchData` again. i.e. if n elements are displayed on the list, and `fetchThreshold` is set to 3,`fetchData` will be called when the n-3<sup>th</sup> element of the list is scrolled into view. **The default value of `fetchthreshold` is 5**.
