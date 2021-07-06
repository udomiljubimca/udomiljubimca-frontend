import Cards from "./Cards/Cards";
import Blog from "./Blog/Blog";
import Testimanials from "./Testimanials/Testimonials";
import KakoUdomitiLjubimca from "./KakoUdomitiLjubimca/KakoUdomitiLjubimca";
import Popup from "./Popup/Popup";

import styled from "styled-components";

import BlogCard from "./Blog/BlogCard";

const DivContainer = styled.div`
  margin: auto;
  width: 1183px;
  position: relative;
`;
const UdomiH4 = styled.h4`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 25px;
  color: #000000;
  margin: 20px 0 15px 0;
`;

const Content = ({ podaci, like, isTrigger, removeTrigger, sendData, blogPosts }) => {
  console.log(podaci);
  return (
    <DivContainer>
      <Popup
        trigger={isTrigger}
        triggerOff={removeTrigger}
        pickUpData={sendData}
      />
      <UdomiH4>Udomi ljubimce</UdomiH4>
      <Cards ljubimci={podaci} isLike={like} trigger={isTrigger} />

      <Testimanials />

      <KakoUdomitiLjubimca />

      <h1>Blog</h1>
      <div className="flex flex--space-between flex-wrap">
        {blogPosts.slice(0, 3).map((item) => (
          <BlogCard title={item.title} desc={item.desc} url={item.url} />
        ))}
      </div>

    </DivContainer>
  );
};

export default Content;
