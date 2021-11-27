import React from "react";

// Assets
import blogBg from "../assets/blog.png";

// Components
import Blog from "../components/Blog/Blog";

const BlogPage = ({page, posts, title, desc}) => {
    return <Blog page={page} posts={posts} title={title} desc={desc} background={blogBg} />
}

export default BlogPage;