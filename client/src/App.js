import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initializeThunkApp } from "./redux/AppReducer";
import {connect } from "react-redux";





//PAGES

import ChangepassPage from "./components/Pages/ChangepassPage/ChangepassPage";
import CheckoutPage from "./components/Pages/CheckoutPage/CheckoutPage";
import HelpPage from "./components/Pages/HelpPage/HelpPage";
import ReturnPage from "./components/Pages/ReturnPage/ReturnPage";
import NavContainer from "./components/Nav/NavContainer";
import CatalogPageContainer from "./components/Pages/CatalogPage/CatalogPageContainer";
import SignPage from "./components/Pages/SignPage/SignPage";
import Preloader from "./components/common/Preloader";
import FrontPage from './components/Pages/FrontPage/FrontPage'
import CardPageContainer from "./components/Pages/CardPage/CardPageContainer";
import FeedbackContainer from "./components/Pages/FeedbackPage/FeedbackContainer";
import OrdersPageContainer from "./components/Pages/OrdersPage/OrdersPageContainer";
import Checkout from "./components/Forms/Checkout/Checkout";
import Order from "./components/Pages/OrdersPage/UnloginOrderPage"
import InformContainer from "./components/Pages/InformPage/InformContainer";
import ForgotChangePassword from './components/Forms/ForgotPassword/ForgotChangePassword'
import ForgotPassword from "./components/Forms/ForgotPassword/ForgotPassword";
import DetailsContainer from './components/Pages/DetailsPage/DetailsContainer'
// const DetailsContainer = React.lazy(() =>
// import("./components/Pages/DetailsPage/DetailsContainer")
// );
// const FrontPage = React.lazy(() =>
//   import('../src/components/Pages/FrontPage/FrontPage')
// );

import Modal from './components/common/Modal/Modal'
import NotFound from "./components/Pages/NotFound/NotFound";
import FooterContainer from "./components/Footer/FooterContainer";
class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunkApp();

  }
 
  render() {
    if (!this.props.isInitialized) {
      return <Preloader />;
    } else {
      return (
        <Router>
          <Suspense fallback={<div>Загрузка...</div>}>
          <NavContainer/>
         
            <Switch>
         
                  <Route exact path="/" component={FrontPage} />
                  <Route path="/catalog" component={CatalogPageContainer} />
                  <Route path="/details/:id?" component={DetailsContainer} />
                  <Route path="/card" component={CardPageContainer} />
                  <Route path="/changepass" component={ChangepassPage} />
                  <Route path="/checkout" component={CheckoutPage} />
                  <Route  path="/feedback/:id?" component={FeedbackContainer} />
                  <Route path="/help" component={HelpPage} />
                  <Route path="/inform" component={InformContainer} />
                  <Route path="/orders" component={OrdersPageContainer} />
                  <Route path="/return" component={ReturnPage} />
                  <Route path="/sign" component={SignPage} />
                  <Route path="/forgotpassword" component={ForgotPassword}/>
                  <Route path="/forgotchangepass/:token?" component={ForgotChangePassword}/>
                  <Route path="/buy" component={Checkout}/>
                  <Route path="/order" component={Order}/>
                   <Route  component={NotFound}/>
            </Switch>
            <Modal />
            <FooterContainer />    
          </Suspense>
        </Router>
      );
    }
  }
}
const mapStateToProps = (state) => {

  return {
    isInitialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeThunkApp })(App);
