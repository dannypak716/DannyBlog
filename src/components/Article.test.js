import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import moment from "moment";
import "@testing-library/jest-dom";

import Article from "./Article";

const testArticle = {
  id: 7,
  headline: "Test Article",
  createdOn: Date.now(),
  author: "Author",
  image: 134,
  summary: "Summary of Test Article",
  body: "Informative sentences about the test article.",
};

test("renders component", () => {
  render(<Article article={testArticle} />);
});

test("renders headline and author", () => {
  render(<Article article={testArticle} />);
  screen.getByText("Test Article");
  screen.getByText("By Author");
  screen.getByText("Summary of Test Article");
  screen.getByText("Informative sentences about the test article.");
});

test('renders "Associated Press" if no author', () => {
  const noAuthor = {
    ...testArticle,
    author: "",
  };

  render(<Article article={noAuthor} />);
  screen.getByText("By Associated Press");
});

test("delete button deletes article", () => {
  const handleDeleteTest = jest.fn();
  render(<Article article={testArticle} handleDelete={handleDeleteTest} />);
  const deleteButton = screen.getByTestId("deleteButton");
  userEvent.click(deleteButton);
  expect(handleDeleteTest).toBeCalled();
});
