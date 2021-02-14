import React, { Component } from "react";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./reducers";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

// export const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

class App extends Component {
  render() {
    return (
    //   <Provider store={store}>
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
    //   </Provider>
    );
  }
}

export default App;
