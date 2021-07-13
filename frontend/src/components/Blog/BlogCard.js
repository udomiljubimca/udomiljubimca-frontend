import { React } from "react";
import { Link } from "react-router-dom";
import placeholder from "./assets/placeholder.svg";

const BlogCard = ({ title, desc, url }) => {
  return (
    <Link to={`/blog/${url}`} className="blog-card">
      <img src={placeholder} alt={title} />
      <h4 className="blog-card-title" title={title}>
        {title.length > 50 ? title.substr(0, 50 - 1) + "..." : title}
      </h4>
      <p className="blog-desc">
        {desc.length > 100 ? desc.substr(0, 100 - 1) + "..." : desc}
      </p>
    </Link>
  );
};

export default BlogCard;
