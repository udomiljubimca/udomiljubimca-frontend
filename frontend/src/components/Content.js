import React from "react";
import Cards from "./PetCard/Pets";
import Testimanials from "./Testimanials/Testimonials";
import KakoUdomitiLjubimca from "./KakoUdomitiLjubimca/KakoUdomitiLjubimca";
import Popup from "./Popup/Popup";
import BlogCard from "./Blog/BlogCard";

const Content = ({
  podaci,
  like,
  isTrigger,
  removeTrigger,
  sendData,
  blogPosts,
}) => {
  return (
    <div className="container">
      <Popup
        trigger={isTrigger}
        triggerOff={removeTrigger}
        pickUpData={sendData}
      />
      <h4>Udomi ljubimce</h4>
      <Cards ljubimci={podaci} isLike={like} trigger={isTrigger} />

      <Testimanials />

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

export default Content;
