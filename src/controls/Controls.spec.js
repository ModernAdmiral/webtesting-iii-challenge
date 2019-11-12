// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";
import "@testing-library/jest-dom/extend-expect";

describe("Controls", () => {
  it("renders correctly", () => {
    const wrapper = render(<Controls />);
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("provides buttons to toggle the closed and locked states.", () => {
    const { getByText } = render(<Controls />);
    getByText(/Lock/i);
    getByText(/Close/i);
  });

  it("uttons' text changes to reflect the state the door will be in if clicked", () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    getByText(/Unlock/i);
    getByText(/Open/i);
  });

  it("the closed toggle button is disabled if the gate is locked", () => {
    const { getByText } = render(<Controls locked={true} />);
    expect(getByText(/Close/i).closest("button")).toHaveAttribute("disabled");
  });
  it("the closed toggle button is disabled if the gate is locked", () => {
    const { getByText } = render(<Controls />);
    expect(getByText(/Lock/i).closest("button")).toHaveAttribute("disabled");
  });
});
