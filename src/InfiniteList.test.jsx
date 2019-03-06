import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import InfiniteList from "./InfiniteList";
import mock_fetch from "./mock_data";

let rows = [];
const limit = 10;

afterEach(cleanup);

it("should fetch on first render", () => {
  const fetchData = jest.fn(offset => {
    mock_fetch(offset, limit).then(data => {
      rows = [...rows, ...data];
      expect(rows.length).toBe(limit);
    });
  });

  const { container } = render(
    <InfiniteList rows={rows} fetchData={fetchData} limit={limit}>
      {row => <div>{row.name}</div>}
    </InfiniteList>
  );

  // should have been called since row was empty on render
  expect(fetchData).toHaveBeenCalledTimes(1);

  const infiniteListWrapper = container.querySelector("#infinite-list-wrapper");

  fireEvent.scroll(infiniteListWrapper);
});

it("should fetch again onScroll", () => {
  rows = [];
  for (let i = 0; i < 7; i++) {
    rows.push({ name: `I'm row number ${i}` });
  }

  const fetchData = jest.fn();

  const { container } = render(
    <InfiniteList rows={rows} fetchData={fetchData} limit={limit}>
      {row => <div>{row.name}</div>}
    </InfiniteList>
  );

  // should not have been called yet since rows isn't empty
  expect(fetchData).toHaveBeenCalledTimes(0);

  const infiniteListWrapper = container.querySelector("#infinite-list-wrapper");
});
