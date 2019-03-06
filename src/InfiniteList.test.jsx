import React from "react";
import { render, cleanup } from "react-testing-library";

import InfiniteList from "./InfiniteList";
import mock_fetch from "./mock_data";

afterEach(cleanup);

it("should render properly and fetch on first render", async => {
    const { container, getByTagName } = render(<InfiniteList />);
});