import { React } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.svg";
import "./blogCard.css";

const BlogCard = ({ title, desc, url }) => {
  return (
    <div className="flex blog-card" data-collapse="tablet">
      <div className="blog-card-image">
        <img src={placeholder} alt={title} />
      </div>
      <div className="blog-card-info flex flex--justify-center flex--align-center flex-column">
        <h4 className="blog-card-title title-underline" title={title}>
          {title.length > 50 ? title.substr(0, 50 - 1) + "..." : title}
        </h4>
        <p className="blog-card-desc">
          {desc.length > 100 ? desc.substr(0, 100 - 1) + "..." : desc}
        </p>
        <div className="blog-card-meta flex">
          <span>10. januar 2021.</span>
          <span className="blog-card-divider"> | </span>
          <span>Ime i prezime </span>
        </div>
        <Link to={`/blog/${url}`} className="blog-card-link">
          Pročitaj više
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
