// Test away

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
import "@testing-library/jest-dom/extend-expect";

describe("Dashboard", () => {
  it("renders correctly", () => {
    const wrapper = render(<Dashboard />);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
