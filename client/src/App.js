import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Header } from "./components/layouts/header-layout/header-layout";
import { PostsLayout } from "./components/layouts/posts-layout/posts-layout";
import { FullPostLayout } from "./components/layouts/full-post-layout/full-post-layout";
import { NotFoundLayout } from "./components/layouts/not-found-layout/not-found-layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="content">
            <Switch>
              <Route path="/" exact component={PostsLayout} />
              <Route exact path="/post/:id" component={FullPostLayout} />
              <Route path="*" component={NotFoundLayout} />
            </Switch>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
