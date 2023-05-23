import React from "react";
import ArticlesPreview from "./ArticlesPreview";

const Articles = () => {
  const articles = [
    { key: 1, 
        title: "The Role of Alcohol and Water Safety in Ireland's History: Before Tea and Coffee", imageUrl: "/IrelandFlag.jpg", 
        link: "/Articles/ArticlesContent/Ireland" },
    
  ];

  return (
    <div className="articles">
      {articles.map((article) => (
        <ArticlesPreview key={article.key} title={article.title} imageUrl={article.imageUrl} link={article.link} />
      ))}
    </div>
  );
};

export default Articles;

