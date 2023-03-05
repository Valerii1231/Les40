import React from "react";
import ArticleAuthor from "./ArticleAuthor";
import ArticleBody from "./ArticleBody";

function Article(props) {
 
    return (
    <>
      {props.children}   
      <ArticleBody show={props.show} text={props.text} className ={props.className}  />
      <ArticleAuthor author={props.text.author} published={props.text.published} theme={props.text.theme} />   
    </>
    );
  }
  export default Article;

