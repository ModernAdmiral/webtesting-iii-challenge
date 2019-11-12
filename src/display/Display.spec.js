// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";
import { getByText } from "react-testing-library";

describe("Display", () => {
  it("renders correctly", () => {
    const wrapper = render(<Display />);
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("defaults to unlocked and open", () => {
    const { getByText } = render(<Display />);

    getByText(/open/i);
    getByText(/unlocked/i);
  });

  it("displays if gate is open/closed and if it is locked/unlocked", () => {
    const { getByText } = render(<Display />);
    getByText(/open/i) || getByText(/closed/i);
    getByText(/unlocked/i) || getByText(/locked/i);
  });

  it("displays 'closed' if the closed prop is true", () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/closed/i);
  });

  it("displays 'Locked' if the locked prop is true", () => {
    const { getByText } = render(<Display locked={true} />);
    getByText(/locked/i);
  });

  it("when locked or closed use the red-led class", () => {
    const { container } = render(
      <Display locked={true} closed={true || false} />
    );
    const red = container.querySelector(".red-led");
    expect(red).not.toBe(null);
  });

  it("when unlocked or open use the green-led class", () => {
    const { container } = render(
      <Display locked={false} closed={true || false} />
    );
    const green = container.querySelector(".green-led");
    expect(green).not.toBe(null);
  });
});
