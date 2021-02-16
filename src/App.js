import React, { Component } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => {
                return <Redirect to={"/gallery"} />;
              }}
            />
            <Route exact path={"/gallery"} component={Gallery} />
            <Route exact path={"/details/:id"} component={ProductDetails} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
