import React from "react";
import { render, screen } from "@testing-library/react";
import CardWrapper from "../components/CardWrapper";

describe("CardWrapper tests", () => {
  let grerender = null; // to store rerender to use in card variant tests
  beforeEach(() => {
    const { rerender } = render(
      <CardWrapper variant="normal" testId="testid">
        <p>test passed</p>
      </CardWrapper>
    );
    grerender = rerender;
  });
  test("Renders proper passed testid", () => {
    expect(screen.getByTestId("testid")).toBeTruthy();
  });
  test("Renders children", () => {
    expect(screen.getByText("test passed")).toBeInTheDocument();
  });
  test("Renders normal card", () => {
    expect(screen.getByTestId("testid").classList).toContain("sm:col-span-1");
  });
  test("Renders large card", () => {
    grerender(
      <CardWrapper variant="large" testId="testid">
        <p>test passed</p>
      </CardWrapper>
    );
    expect(screen.getByTestId("testid").className).toContain(
      "sm:col-span-2 sm:row-span-2"
    );
  });
  test("Renders wide card", () => {
    grerender(
      <CardWrapper variant="wide" testId="testid">
        <p>test passed</p>
      </CardWrapper>
    );
    expect(screen.getByTestId("testid").className).toContain("sm:col-span-2");
  });
  test("Renders tall card", () => {
    grerender(
      <CardWrapper variant="tall" testId="testid">
        <p>test passed</p>
      </CardWrapper>
    );
    expect(screen.getByTestId("testid").className).toContain(
      "sm:col-span-1 row-span-2"
    );
  });
});
