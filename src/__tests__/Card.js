import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

test("Card called with no or null prop renders skeleton with animation", () => {
  render(<Card />);
  const SkeletonCard = screen.getByTestId("skeleton_card");
  expect(SkeletonCard).toBeInTheDocument();
  expect(SkeletonCard.children[0].classList.contains("animate-pulse")).toBe(
    true
  );
});

describe("Card called with data renders news card", () => {
  const data = {
    title: "A news title",
    author: "Arjun",
    url: "www.google.com",
    publishedAt: "time",
    source: { id: "source id", name: "source name" },
  };
  test("Shows news card", () => {
    const { getByTestId } = render(<Card data={data} />);
    const NewsCard = getByTestId("news_card");
    expect(NewsCard).toBeInTheDocument();
  });
  test("Shows title", () => {
    const { getByText } = render(<Card data={data} />);
    expect(getByText(/a news title/i)).toBeInTheDocument();
  });
  test("Shows source", () => {
    const { getByText } = render(<Card data={data} />);
    expect(getByText(/source name/i)).toBeInTheDocument();
  });
  test("Shows author", () => {
    const { getByText } = render(<Card data={data} />);
    expect(getByText(/arjun/i)).toBeInTheDocument();
  });
  //   test("Shows image", () => {
  //     const { getBy } = render(<Card data={data} />);
  //     expect(getByAltText(/arjun/i)).toBeInTheDocument();
  //   });
});
