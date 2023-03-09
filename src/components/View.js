import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Article from "./Article";
import EditForm from "./EditForm";
import articleService from "../services/articleServices";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';

const View = (props) => {
  const [articles, setArticles] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState();

  // when component mounts or whenever articles changes, run articleService() by passing articles state setter as an argument
  useEffect(() => {
    articleService(setArticles);
  }, []);

  // delete articles by ID and then setArticles with new list of articles.  should return all articles except deleted one.
  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/articles/${id}`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("ERROR: COULD NOT DELETE ARTICLE!", error);
      });
  };

  // 
  const handleEdit = (article) => {
    axiosWithAuth()
      .put(`http://localhost:5000/api/articles/${editId}`, article)
      .then((response) => {
        setEditing(false);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("ERROR: COULD NOT EDIT ARTICLE!", error);
      });
  };

  const handleEditConfirm = (id) => {
    setEditing(true);
    setEditId(id);
  };

  const handleEditCancel = () => {
    setEditing(false);
  };

  return (
    <ComponentContainer>
      <HeaderContainer>
        <HeaderContainerDiv className="headerContainerDiv">
          <div>View Articles</div>
          <Button>
            <Link to="/create">Create New Article</Link>
          </Button>
        </HeaderContainerDiv>
      </HeaderContainer>
      <ContentContainer flexDirection="row">
        <ArticleContainer>
          {articles.map((article) => {
            return (
              <ArticleDivider key={article.id}>
                <Article
                  key={article.id}
                  article={article}
                  handleDelete={handleDelete}
                  handleEditConfirm={handleEditConfirm}
                />
              </ArticleDivider>
            );
          })}
        </ArticleContainer>

        {editing && (
          <EditForm
            editId={editId}
            handleEdit={handleEdit}
            handleEditCancel={handleEditCancel}
          />
        )}
      </ContentContainer>
    </ComponentContainer>
  );
};

export default View;

const Container = styled.div`
  padding: 0.5em;
`;

const HeaderContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = styled.h1`
  border-bottom: solid black 2px;
  padding: 1em;
  margin: 0;
  font-size: 1.5em;
  background: black;
  color: white;
`;

const ArticleDivider = styled.div`
  border-bottom: 1px solid black;
  padding: 1em;
`;

const ComponentContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;

const ArticleContainer = styled.div`
  background: grey;
`;

const Button = styled.button`
  width: 200px;
  padding: .5em;
  margin-top: 1em;
  margin-right: 1%;
  text-transform: capitalize;
  text-align: center;
  a {
            text-decoration: none;
            color: black;
            font-size: 1em;
        }
`;