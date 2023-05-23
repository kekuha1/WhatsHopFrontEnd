import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

interface ArticlePreviewProps {
  title: string;
  imageUrl: string;
  link: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ title, imageUrl, link }) => {
  return (
    <Card>
      <CardImg top src={imageUrl} alt={title} style={{ height: "200px", objectFit: "cover" }} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <Link className="articlelink" to={link}>Read More</Link>
      </CardBody>
    </Card>
  );
};

export default ArticlePreview;




