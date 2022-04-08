import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import "./Orderdetails.css";
import { url } from "../common/constants";
import { format } from "date-fns";

import Swal from "sweetalert2";
// import { ToastContainer, toast } from 'react-toastify';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Orderdetails = () => {
  const history = useHistory();

  const location = useLocation();
  const isSignin = useSelector((state) => state.isSignin);
  const order = location.state.order;
  console.log(order);
  const d = new Date();
  var formattedDate = format(d, "yyyy-MM-dd");
  // const date = d.toLocaleDateString() + ''
  var ddate = new Date(formattedDate);
  let ddelivery = new Date(ddate.setDate(ddate.getDate() + 7));
  var formattedddate = format(ddelivery, "yyyy-MM-dd");

  const confirmOrder = (ordereditem) => {
    console.log(ordereditem)
    let data = {
      mid: ordereditem.mid,
      orderdate: formattedDate,
      deliverydate: formattedddate,
      // id: order.cid
      //prodId:ordereditem.productId
    };
    console.log(data)
  var totalAmount = (order.total*order.productQty) + 0.09 * order.total
  console.log(totalAmount)
    history.push('/payment', { odata: data, totalAmount:totalAmount});
  };

  const cancelOrder = () =>{
    history.push('/')
  }

  return (
    <div>
      <h2 className="page-title">Order Details</h2>

      <div className="style">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={'/images/'+order.mthumb}
              
              className="orderimage"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-text">Product Name:{order.mname}</h6>
              <h6 className="card-text">RAM:{order.RAM}</h6>
              <h6 className="card-text">Storage:{order.Storage}</h6>
              <h6 className="card-text">
                Final Amount: Rs. {(order.total*order.productQty) + 0.09 * order.total}/-
              </h6>
              <h4 className="card-text">Delivery Address:</h4>
              <h6 className="card-text">landmark-{isSignin.user.address.ulocality} </h6>
              <h6 className="card-text">City-{isSignin.user.address.ucity} </h6>
              <h6 className="card-text">State-{isSignin.user.address.ustate} </h6>
              <h6 className="card-text">Contact No.-{isSignin.user.umob} </h6>
              <h6 className="card-text">Pincode.-{isSignin.user.address.upin} </h6>
              <h6 className="card-text">Order Date-{formattedDate} </h6>
              <h6 className="card-text">Estimated Delivery Date-{formattedddate} </h6>
              <div>
                <div className="buttonstyle">
                  <button
                    onClick={() => {
                      console.log(order)
                      confirmOrder(order);
                    }}
                    className="btn btn-success"
                  >
                    Confirm Order
                  </button>
                  &emsp;
                  <button 
                   onClick={() => {
                    cancelOrder();
                  }}
                  className="btn btn-warning">Cancel Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;
