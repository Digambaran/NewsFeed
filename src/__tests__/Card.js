import React from "react";
import { render, screen } from "@testing-library/react";
import NewsCard from "../components/NewsCard";

test("NewsCard called with no or null prop renders skeleton with animation", () => {
  render(<NewsCard />);
  const SkeletonCard = screen.getByTestId("skeleton_card");
  expect(SkeletonCard).toBeInTheDocument();
  expect(SkeletonCard.children[0].classList.contains("animate-pulse")).toBe(
    true
  );
});

describe("NewsCard called with data renders news card", () => {
  const data = {
    title: "A news title",
    author: "Arjun",
    url: "www.google.com",
    publishedAt: "time",
    source: { id: "source id", name: "source name" },
  };
  test("Shows news card", () => {
    const { getByTestId } = render(<NewsCard data={data} />);
    const newsCard = getByTestId("news_card");
    expect(newsCard).toBeInTheDocument();
  });
  test("Shows title", () => {
    const { getByText } = render(<NewsCard data={data} />);
    expect(getByText(/a news title/i)).toBeInTheDocument();
  });
  test("Shows title as a link to article", () => {
    const { getByText } = render(<NewsCard data={data} />);
    expect(getByText(/a news title/i).parentElement).toHaveAttribute(
      "href",
      data.url
    );
  });
  test("Shows source", () => {
    const { getByText } = render(<NewsCard data={data} />);
    expect(getByText(/source name/i)).toBeInTheDocument();
  });
  test("Shows author", () => {
    const { getByText } = render(<NewsCard data={data} />);
    expect(getByText(/arjun/i)).toBeInTheDocument();
  });
  //   test("Shows image", () => {
  //     const { getBy } = render(<Card data={data} />);
  //     expect(getByAltText(/arjun/i)).toBeInTheDocument();
  //   });
});
