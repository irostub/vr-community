import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NewComponent from "./components/NewsComponent";
import VideoComponent from "./components/VideoComponent";
import GameInfoComponent from "./components/GameInfoComponent";
import CommunityComponent from "./components/CommunityComponent";
import ProductComponent from "./components/ProductComponent";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <NavigationComponent />
      <Switch>
        <Route path="/" exact component={NewComponent}></Route>
        <Route path="/news" component={NewComponent}></Route>
        <Route path="/video" component={VideoComponent}></Route>
        <Route path="/gameinfo" component={GameInfoComponent}></Route>
        <Route path="/Community" component={CommunityComponent}></Route>
        <Route path="/Product" component={ProductComponent}></Route>
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;
