
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './Navbar.css';
import logoFinal5 from "../homeimgs/logoFinal5.png"

const HomePageNavBar = () => {

  return (
    <div className="m-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img src={logoFinal5} height={55} alt="MobileShop" />
          </a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">

            <div className="navbar-nav">
              <Link className="nav-link" to={{ pathname: "/" }}><b>Home</b></Link>
              <Link className="nav-link" to={{ pathname: "/users" }}><b>Users</b></Link>
              <Link className="nav-link" to={{ pathname: "/mobiles" }}><b>Mobiles</b></Link>
              <Link className="nav-link" to={{ pathname: "/brands" }}><b>Brands</b></Link>
              <Link className="nav-link" to={{ pathname: "/specs" }}><b>Specifications</b></Link>
              <Link className="nav-link" to={{ pathname: "/feedback" }}>
              <i className="fa fa-comments">
                </i>
                <span style={{ marginLeft: "10px" }}>
                  <b>Reviews</b>
                </span>
              </Link>
              {/* // <a href="#" className="nav-item nav-link active">Home</a>
            // <a href="#" className="nav-item nav-link">Profile</a>
            // <a href="#" className="nav-item nav-link">Messages</a>
            // <a href="#" className="nav-item nav-link disabled" tabIndex={-1}>Reports</a> */}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
              
              
              <li class="nav-item"> <a class="nav-link" href="/signin">
                <i className="fa fa-sign-in">
                </i>
                <span style={{ marginLeft: "10px" }}>
                  <b>Login</b>
                </span>
                </a> </li>
                
              {/* <li class="nav-item"> <a class="nav-link" href="/rating">
                <i className="fa fa-sign-in">
                </i>
                <span style={{ marginLeft: "10px" }}>
                  <b>LogOut</b>
                </span>
                </a> </li> */}

            </div>
            {/* <div className="navbar-nav ms-auto">
            <a href="/signin" className="nav-item nav-link">Signin</a>
          </div> */}
          </div>
        </div>
      </nav>
    </div>
    // <div >
    // <nav class="navbar navbar-expand-lg navbar-light">
    //     <div class="container-fluid"> <a class="navbar-brand name" href="#"><h4>OnlineMobileShop</h4></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
    //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //                 <li class="nav-item"> <a class="nav-link" href=""></a><Link className="nav-link" to={ { pathname: "/"}}><b>Home</b></Link> </li>
    //                 <li class="nav-item"> <a class="nav-link" href=""></a><Link className="nav-link" to={ { pathname: "/users"}}><b>Users</b></Link> </li>
    //                 <li class="nav-item"> <a class="nav-link" href=""></a><Link className="nav-link" to={ { pathname: "/mobiles"}}><b>Mobiles</b></Link> </li>
    //                 <li class="nav-item"> <a class="nav-link" href=""></a><Link className="nav-link" to={ { pathname: "/brands"}}><b>Brands</b></Link> </li>
    //                 <li class="nav-item"> <a class="nav-link" href=""></a><Link className="nav-link" to={ { pathname: "/specs"}}><b>Specifications</b></Link> </li>
    //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                 <li class="nav-item"> <a class="nav-link" href="/signin">Signin</a> </li>
    //             </ul>
    //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //             <form class="d-flex searchitem"> <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> <i class="fa fa-search"></i> </form>
    //         </div>
    //     </div>
    // </nav>
    //  {/* <div class="d-flex justify-content-center align-items-center mt-5"> <h2>Welcome t</h2> </div> */}

    // </div>
  );
};

export default HomePageNavBar;