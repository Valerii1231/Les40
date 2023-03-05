import React from "react";

function ArticleAuthor(props) {
  const { author, published } = props;
  return (
      <div className="article__author">      
        <p className="article__author--name">{props.author}</p>
        <p className="article__author--date">{props.published}</p>        
        <p className="article__author--theme">{props.theme}</p>
      </div>
    );
  }
export default ArticleAuthor;
