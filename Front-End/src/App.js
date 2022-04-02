import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Users from "./pages/Users";
import Mobiles from "./pages/Mobiles";
import Brands from "./pages/Brands";
import AddMobile from "./pages/AddMobile";
import AddBrand from "./pages/AddBrand";
import UpdateBrand from "./pages/UpdateBrand";
import UpdateMobile from "./pages/UpdateMobile";
import AddSpecifications from "./pages/AddSpecifications";
import Specifications from "./pages/Specifications";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import HomePageNavBar from "./pages/HomePageNavBar";

import Rating from "./pages/Rating";

// toastify 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function App() {
  return (
    <div>
      <BrowserRouter>   
        <HomePageNavBar/>       
        <div className="container">
          <Switch>   
            <Route path="/" exact component={Home} />              
            <Route path="/users" component={Users} />
            <Route path="/signin" component={Login} />
            <Route path="/mobiles" component={Mobiles} />
            <Route path="/addmobile" component={AddMobile} />
            <Route path="/brands" component={Brands} />
            <Route path="/addbrand" component={AddBrand} />
            <Route path="/specs" component={Specifications} />
            <Route path="/addspecifications" component={AddSpecifications} />
            <Route path="/updatebrand" component={UpdateBrand} />
            <Route path="/updatemobile" component={UpdateMobile} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/rating" component={Rating} />
          </Switch>
        </div>
        
      </BrowserRouter>
     
    </div>
);
 
}

export default App;

