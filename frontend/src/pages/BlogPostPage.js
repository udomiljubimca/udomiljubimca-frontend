import React from "react";

// Components
import BlogPost from "../components/Blog/BlogPost";

const BlogPagePage = ({blogPosts}) => {
    return <BlogPost blogPosts={blogPosts} />
}

export default BlogPagePage;