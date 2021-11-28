import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// router
import Error from "./components/Error/Error";
import RegisterUserPage from "./pages/RegisterUserPage";
import RegisterOrgPage from "./pages/RegisterOrgPage";
import LoginPage from "./pages/LoginPage";
import PetProfilePage from "./pages/PetProfilePage";
import VetPage from "./pages/VetPage";
import VetPostPage from "./pages/VetPostPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import DonationsPage from "./pages/DonationsPage";
import PetProfileOrganizationPage from "./pages/PetProfileOrganizationPage";
import UserProfilePage from './pages/UserProfilePage';

//testing modals
import TestPage from "./pages/TestPage";

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
          <Route path="/prijavi-se" component={LoginPage} />
          <Route exact path="/registracija-korisnika">
            <RegisterUserPage />
          </Route>
          <Route exact path="/registracija-udruzenja">
            <RegisterOrgPage />
          </Route>
          <Route exact path="/donacije">
            <DonationsPage />
          </Route>
          <Route path="/ljubimac/:name">
            <PetProfilePage />
          </Route>
          <Route exact path="/udruzenje/:name">
            <PetProfileOrganizationPage />
          </Route>
          <Route exact path="/blog">
            <BlogPage
              page="blog"
              posts={blogPosts}
              title="BLOG"
              desc="Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam."
            />
          </Route>
          <Route exact path="/blog/:id">
            <BlogPostPage blogPosts={blogPosts} />
          </Route>
          <Route exact path="/veterinar">
            <VetPage
              page="veterinar"
              posts={blogPosts}
              title="VETERINAR"
              desc="Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies."
            />
          </Route>
          <Route exact path="/veterinar/:id">
            <VetPostPage blogPosts={blogPosts} />
          </Route>
          <Route exact path="/korisnici/profil-korisnika">
            <UserProfilePage isUser={false} isLike={isLike} />
          </Route>
          <Route exact path="/profil/:name">
            <UserProfilePage isUser={true} isLike={isLike} />
          </Route>
          {/* <Route exact path="/test">
            <TestPage />
          </Route> */}
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
