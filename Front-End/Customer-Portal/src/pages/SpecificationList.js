import { useLocation } from "react-router";
import "../components/HorizontalSlider.css";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../actions/cartActions";
import { url } from "../common/constants";
import "./SpecificationList.css";
import axios from "axios";
import Counter from "./../components/Counter";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import React, { Component } from "react";
import Swal from "sweetalert2";
// import { ToastContainer, toast } from 'react-toastify';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

// import img1 from '../images/OnePlus_1.jpg'
// import img2 from '../images/OnePlus_2.jpg'
// import img3 from '../images/OnePlus_3.jpg'
// import img4 from '../images/OnePlus_4.jpg'
// import img5 from '../images/OnePlus_5.jpg'

const SpecificationList = () => {
  const isSignin = useSelector((state) => state.isSignin);
  const location = useLocation();
  const [spec, setSpec] = useState('')
  const selectedMobileId = location.state.mobile
  const dispatch = useDispatch();
  const history = useHistory();
  const [quantity, setQtyCount] = useState(1);


  const Buynow = (product) => {
    console.log(product);
    let data = {
      bid: product.mobile.chosenBrand.id,
      mid: product.mobile.id,
      total: product.mobile.mprice,
      mthumb: product.mobile.mobImage,
      RAM: product.ram,
      Storage: product.rom,
      mname: product.mobile.mname,
      productQty: quantity
    };
    console.log(data)
    history.push("/buynow", { selectedmobile: data });
  };

  const addToCart = (product) => {
    console.log(isSignin.status);
    if (isSignin.status === false) {
      toast.error('Plz Login first...!!',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
      history.push("/login");
    } else {
      console.log(product);
      //call the API to add the product to the cart
      //send data in json format
      //let total = specsCount * location.state.mprice;
      // console.log(specsCount);
      let data = {
        bid: product.mobile.chosenBrand.id,
        mid: product.mobile.id,
        qty: quantity,
        ram: product.ram,
        storage: product.rom,
        amount: product.mobile.mprice,
        uid: isSignin.user.id,
      };
      console.log(data)
      //  if (quantity > 0) {
      //    // send user info to the API
      axios.post(url + "/customer/addToCart", data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          toast.success('Mobile Added to cart..!!  😀',
          { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
          //history.push('/login')
          dispatch(addToCartAction(product));
        } else {
          console.log(result.error);
          toast.error('Something went wrong ...🤔',
          { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
        }
      });
      //   } else {
      //     alert("please select quantity!");
      //   }
    }
  };
  useEffect(() => {
    console.log(`specificationlist component got loaded`)
    getSpecs()
  }, [])

  const getSpecs = () => {
    console.log(selectedMobileId.id)
    axios.get(url + '/specs/' + selectedMobileId.id).then((response) => {
      const res = response.data
      console.log(res.result);
      console.log(res.result.mobile);
      if (res.status === 'OK') {

        setSpec(res.result)
        console.log(spec)
      }
      else {
        toast.error('Something went wrong ...🤔',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
      }
    })
  }

  const getCounter = (count) => {
    if (count >= 0) {
      console.log(count);
      setQtyCount(count);
    }
  };

  return (
    <div>


      {

        spec !== '' ? (

          <div>
            <div className="style">
              <div className="row g-0">
                <div className="col-md-4">
{/* 
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                      <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                      <li data-target="#carouselExampleIndicators" data-slide-to={4} />
                      <li data-target="#carouselExampleIndicators" data-slide-to={5} />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={img2} alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={img1} alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={img4} alt="Fourth slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={img5} alt="Fivth slide" />
                      </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                   */}
                  <img
                    src={'/images/' + spec.mobile.mobImage}
                    className="mobimage mrgn"
                    alt="..."
                  />
                  <div className="row g-0">
                    <h4 className="card-title text">{spec.mobile.mname}</h4>
                    <h3 className="card-title text">
                      Price: {spec.mobile.mprice} /-
                    </h3>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-text">Specifications:</h4>
                    <h6 className="card-text">Sid:{spec.id}</h6>
                    <h6 className="card-text">RAM:{spec.ram}</h6>
                    <h6 className="card-text">Storage:{spec.rom}</h6>
                    <h6 className="card-text">Screen Size:{spec.ssize}</h6>
                    <h6 className="card-text">Battery:{spec.battery}</h6>
                    <h6 className="card-text">Operating System:{spec.os}</h6>
                    <h6 className="card-text">Network:{spec.network}</h6>
                    <h6 className="card-text">Sim:{spec.sim}</h6>
                    <h6 className="card-text">Rear Camera:{spec.rcam}</h6>
                    <h6 className="card-text">Front Camera:{spec.fcam}</h6>
                    <h6 className="card-text">Dimensions:{spec.dim}</h6>
                    <div className="bstyle">
                      <Counter onItemSelect={getCounter} />
                      <br />
                      <button
                        onClick={() => {
                          addToCart(spec);
                        }}
                        type="button"
                        class="btn btn-success"
                      >
                        Add To Cart
                      </button>
                      &emsp;
                      <button
                        onClick={() => {
                          Buynow(spec);
                        }}
                        type="button"
                        class="btn btn-success"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        ) : ''

      }

    </div>
  )
}

export default SpecificationList;
