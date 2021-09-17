import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// router

import Error from "./components/Error/Error";
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost";
import PetProfile from "./components/PetProfile/PetProfile";
import RegisterUserPage from "./pages/RegisterUserPage";
import RegisterOrgPage from "./pages/RegisterOrgPage";
import LoginPage from "./pages/LoginPage";

// fake blog data import, it is just for preview and demo
import blogData from "./fakeBlogPostData";
import animals from "./data/pets";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [pets, setPets] = useState(animals);
  const [blogPosts, setBlogPosts] = useState(blogData);

  const isLike = (id) => {
    setPets(
      pets.map((petData) =>
        petData.id === id ? { ...petData, isLike: !petData.isLike } : petData
      )
    );
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage podaci={pets} like={isLike} blogPosts={blogPosts} />
          </Route>

          <Route exact path="/blog">
            <Blog blogPosts={blogPosts} />
          </Route>
          <Route exact path="/blog/:id">
            <BlogPost blogPosts={blogPosts} />
          </Route>
          <Route path="/prijavi-se" component={LoginPage} />
          <Route exact path="/registracija-korisnika">
            <RegisterUserPage />
          </Route>
          <Route exact path="/registracija-udruzenja">
            <RegisterOrgPage />
          </Route>
          <Route path="/ljubimac">
            <PetProfile />
          </Route>
          <Route component={Error} />

          {/* <Route exact path='/filtriranjePsa'>
            <FiltriranjePsi
              podaci={podaciLjubimci}
              like={isLike}
              isTrigger={popup}
            />
          </Route> */}
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
