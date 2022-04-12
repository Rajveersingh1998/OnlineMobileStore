import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { url } from "../common/constants";
import "./Orderconfirm.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../actions/cartActions";
import {send} from 'emailjs-com';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Orderconfirm = () => {

  const history = useHistory();
  const isSignin = useSelector((state) => state.isSignin);
  const location = useLocation()
  const productId = location.state.productId
  const dispatch = useDispatch();
  const goToHome = () => {
    history.push("/");
  };
 const onMail = () => {

    let msg = 'Order Placed Sucessfully injoyyyyyyyyyyy..';

    let tosend = {
            from_name: 'MobiGO',
            to_name: isSignin.user.fname,
            message: msg,   
            reply_to: isSignin.user.email,
            }
    send(
        'service_wbpbsv5',
        'template_35fcgli',
        tosend,
         'OImreNVelIryGeR_f'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Mail Sent Successfully...🙂',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
}

  useEffect(() => {
    onMail();
    removeCartItems();
  }, [])

         
    const removeCartItems = () => {
      console.log(productId)
      axios.delete(url + "/customer/cart/" + productId).then((response) => {
        const res = response.data;
        if (res.status === "OK") {
          
          dispatch(removeFromCartAction(productId));
        } else {
          toast.error('Failed to Remove Product....!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
        }
      });
  }
 
  return (
    <div class="container">
      <div class="row"> 
        <div class="col-md-6 mx-auto mt-5">
          <div class="payment">
            <div class="payment_header">
              <div class="check">
                <i class="bi bi-check">
                  <b class="tick-mark">✓</b>
                </i>
              </div>
            </div>
            <div class="content">
              <p> </p>
              <p></p>
               
              <h2>Order Confirm !</h2>
              <h3>{isSignin.user.fname}</h3>
              <p></p>
              <p>
                <i>Thank You For order! Your order on it's way.. </i>
              </p>
            </div>
            <button
              onClick={() => {
                goToHome();
              }}
              className="btn btn-success back-btn"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderconfirm;

