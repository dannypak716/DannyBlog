import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";
import View from "./View";
import articleService from "./../services/articleServices.js";

jest.mock("./../services/articleServices.js");

test("renders no articles", async () => {
  articleService.mockResolvedValueOnce([]);
  render(<View />);
});

test("renders three articles", async () => {
  articleService.mockResolvedValueOnce([
    {
      id: 7,
      headline: "Test Article",
      createdOn: Date.now(),
      author: "Author",
      image: 134,
      summary: "Summary of Test Article",
      body: "Informative sentences about the test article.",
    },
    {
      id: 77,
      headline: "Test Article 2",
      createdOn: Date.now(),
      author: "Author 2",
      image: 456,
      summary: "Summary of Test Article 2",
      body: "Informative sentences about the second test article.",
    },
    {
      id: 3,
      headline: "The Third Headline",
      createdOn: Date.now(),
      author: "",
      image: 789,
      summary: "Summary of Test Article 3",
      body: "Informative sentences about the third test article.",
    },
  ]);
  
  render(<View />);
});