import React from "react";
import Cards from "../components/PetCard/Pets";
import Testimonials from "../components/Testimanials/Testimonials";
import KakoUdomitiLjubimca from "../components/KakoUdomitiLjubimca/KakoUdomitiLjubimca";
import BlogCard from "../components/Blog/BlogCard";
import HomepageImage from "../components/homepageImage/HomepageImage";
import vetBg from "../assets/vethero.png";



const HomePage = ({ podaci, like, blogPosts }) => {
  return (
    <div className="container">
      <h4>Udomi ljubimce</h4>

      <HomepageImage background={vetBg}/>

      <Cards ljubimci={podaci} isLike={like} />

      <Testimonials />

      <KakoUdomitiLjubimca />

      <h1>Blog</h1>
      <div className="flex flex--space-between flex-wrap">
        {blogPosts.slice(0, 3).map((item) => (
          <BlogCard
            key={item.title}
            title={item.title}
            desc={item.desc}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
