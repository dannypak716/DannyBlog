import React, { useEffect, useState } from "react";
import styled from "styled-components";
import articleService from "../services/articleServices";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";


const { nanoid } = require("nanoid")
const moment = require("moment")

const Create = () => {

    const initialArticle = {
        id: nanoid(5),
        createdOn: moment().format(),
        headline: "",
        author: "",
        summary: "",
        body: "",
        image: Math.ceil(Math.random()*100),
      };

    const {push} = useHistory();

    const [article, setArticle] = useState(initialArticle);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        articleService(setArticles);
      }, []);

    const handleChange = (e) => {
        setArticle({
          ...article,
          [e.target.name]: e.target.value,
        });
    };

    const handleEdit = (article) => {
        axiosWithAuth()
          .post(`http://localhost:5000/api/articles/`, article)
          .then((response) => {
            setArticles(response.data);
          })
          .catch((error) => {
            console.error("ERROR: COULD NOT EDIT ARTICLE!", error);
          });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(article);
        push("/view");
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setArticle(initialArticle);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
      <h3>Edit Article</h3>
      <div>
        <label>Headline</label>
        <input
          value={article.headline}
          id="headline"
          name="headline"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Author</label>
        <input
          value={article.author}
          id="author"
          name="author"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Summary</label>
        <textarea
          rows="7" 
          cols="30"
          value={article.summary}
          id="summary"
          name="summary"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Body</label>
        <textarea
          rows="7" 
          cols="30"
          value={article.body}
          id="body"
          name="body"
          onChange={handleChange}
        />
      </div>
      <Button id="editButton" type="submit">Confirm</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </FormContainer>
    )
}

export default Create;

const FormContainer = styled.form`
  padding: 1em;
  width: 400px;
  background: white;
  label {
    margin-top: 0.5em;
  }
  input {
    padding: 0.5em;
  }
  div {
    margin: 0.5em 0;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: .5em;
  margin-top: 1em;
  margin-right: 3%;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
`;