import React from "react";

// Assets
import vetBg from "../assets/vethero.png";

// Components
import Blog from "../components/Blog/Blog";

const VetPage = ({page, posts, title, desc}) => {
    return <Blog page={page} posts={posts} title={title} desc={desc} background={vetBg} />
}

export default VetPage;