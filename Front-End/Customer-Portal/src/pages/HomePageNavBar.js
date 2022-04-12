
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './Navbar.css';
import logoFinal5 from "../images/logoFinal5.png"

import { useHistory } from 'react-router-dom'

import Swal from "sweetalert2";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

import Feedback from "./Feedback";





const Logout = () => {

    // get the history object
    const history = useHistory()

    Swal.fire({
        title: 'Log-Out?',
        text: "Are you Sure!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })

    history.push('/login');

}

const HomePageNavBar = () => {


    // get the history object
    const history = useHistory()

    const logout = () => {


        Swal.fire({
            title: 'Log-Out?',
            text: "Are you Sure!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Logged out Successfully',
                    'success'
                )
                history.push('/');
            }
        })

        

    }



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

                            <Link className="nav-link" to={{ pathname: "/brands" }}><b>Brands</b></Link>

                            <Link className="nav-link" to={{ pathname: "/feedback" }}>
                                <i className="fa fa-comments">
                                </i>
                                <span style={{ marginLeft: "10px" }}>
                                    <b>Reviews</b>
                                </span>
                            </Link>


                            {/* <li className="navbar-nav ml-auto"><input
              style={{marginTop:"20px"}}
              class="form-control me-2" id="myInput" type="search" placeholder="Search" aria-label="Search" /><i  style={{marginTop:"20px"}} className="fa fa-search"></i> </li>
                 */}
                            {/* // <a href="#" className="nav-item nav-link active">Home</a>
            // <a href="#" className="nav-item nav-link">Profile</a>
            // <a href="#" className="nav-item nav-link">Messages</a>
            // <a href="#" className="nav-item nav-link disabled" tabIndex={-1}>Reports</a> */}




                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <Link className="nav-link" to={{ pathname: "/login" }}>
                                <i className="fa fa-user">
                                </i>
                                <span style={{ marginLeft: "10px" }}>
                                    <b>Login</b>
                                </span>
                            </Link>

                            <Link className="nav-link" to={{ pathname: "/signup" }}>
                                <i className="fa fa-user-plus">
                                </i>

                            </Link>

                            <Link className="nav-link" to={{ pathname: "/cart" }}>
                                {/* <span className="fa-stack fa-2x has-badge" data-count="5">
                                    <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                                    <i style="" className="fa fa-shopping-cart fa-stack-2x red-cart"></i>
                                </span> */}
                                {/* <span className="fa-stack fa-2x has-badge" data-count="5"> */}
                                {/* <i className="fas fa-shopping-cart">
                                </i> */}
                                <span>
                                    <i class="fa badge fa-lg" value="3">&#xf07a;</i>
                                </span>

                                {/* <i className="fa fa-circle fa-stack-2x fa-inverse"></i> */}
                                {/* <i style="" className="fa fa-shopping-cart fa-stack-2x red-cart"></i> */}
                                {/* </span> */}
                                {/* <span style={{ marginLeft: "10px" }}>
                                    <b>Cart</b>
                                </span> */}
                            </Link>

                            {/* <Link className="nav-link" to={{ pathname: "/cart" }}>
                                <span class="fa-stack fa-2x has-badge" data-count="5">
                                    <i class="fa fa-circle fa-stack-2x fa-inverse"></i>
                                    <i style="" class="fa fa-shopping-cart fa-stack-2x red-cart"></i>
                                </span>
                            </Link> */}


                            {/* LogOut  */}
                            <Link className="nav-link"
                                onClick={logout}
                            // to={{ pathname: "/login" }}
                            >
                                <i className="fa fa-times">
                                </i>

                            </Link>


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

    );
};

export default HomePageNavBar;

// { <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//               <b>
//                 <i>MobileStore</i>
//               </b>
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//               <li className="nav-item">
//                   <Link className="nav-link" to={
//                   /* this object inside the  tag */
//                    {
//                    pathname: '/'
//                    }
//                  } >
//                     <b>Home</b>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={
//                   /* this object inside the  tag */
//                    {
//                    pathname: '/brands'
//                    }
//                  } >
//                     <b>Brands</b>
//                   </Link>
//                 </li>
//               </ul>
//               <div class="d-flex" >
//                 <input
//                   class="form-control me-2"
//                   id="myinput"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                 <button class="btn btn-outline-success" type="submit">
//                   Search
//                 </button>
//               </div>
//             </div>
//             <div
//               class="collapse navbar-collapse  justify-content-end"
//               id="navbarNav"
//             >
//               <ul class="navbar-nav">
//               <li className="nav-item">
//                   <Link className="nav-link" to={
//                   /* this object inside the  tag */
//                    {
//                    pathname: '/signup'
//                    }
//                  } >
//                     <b><img src = "/images/images.png" alt= "signup" className ="appimg" /></b>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={
//                   /* this object inside the  tag */
//                    {
//                    pathname: '/login'
//                    }
//                  } >
//                     <b><img src = "/images/home.jpg" alt="" className="appimg" /></b>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={
//                   /* this object inside the  tag */
//                    {
//                    pathname: '/cart'
//                    }
//                  } >
//                     <b> <img src = "/images/cart.jpg" alt="cart" className="appimg" />   {  cartItems.length+items.length}
//                     </b>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav> */}