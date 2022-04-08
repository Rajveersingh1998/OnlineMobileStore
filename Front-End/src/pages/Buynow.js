import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Buynow.css";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Buynow = () => {
  const isSignin = useSelector((state) => state.isSignin);
  const history = useHistory();

  const placeorder = (data) => {
    console.log(isSignin.status);
    if (isSignin.status === false) {
      toast.error('Plz Login first...!!',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
      history.push("/login");
    } else {
      console.log(data);
      history.push('/odetails', { order: data });
    }
  };

  const cancelOrder = () => {
    history.push('/');
  };

  const location = useLocation();
  const data = location.state.selectedmobile;

  //console.log(data)
  return (
    <div className="style">
      <div className="row g-0">
        <div className="col-md-4">
        <img
            src={'/images/'+data.mthumb}
            className="buynowimage"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-text">Product Details:</h4>
            <h6 className="card-text">Product Name:{data.mname}</h6>
            <h6 className="card-text">Quantity :{data.productQty==0?data.productQty=1:data.productQty}</h6>
            <h6 className="card-text">RAM:{data.RAM}</h6>
            <h6 className="card-text">Storage:{data.Storage}</h6>
            <h6 className="card-text">Product Price: Rs. {data.total}/-</h6>
            <h6 className="card-text">CGST:9%</h6>
            <h6 className="card-text">
              Final Amount: Rs. {(data.total* data.productQty )+ 0.09 * data.total}/-
            </h6>
             <div className = "buttonstyle">
            <button
              onClick={() => {
                placeorder(data);
              }}
              type="button"
              className="btn btn-success"
            >
              Place Order
            </button>
            &emsp;
            <button
              onClick={() => {
                cancelOrder();
              }}
              type="button"
              className="btn btn-warning"
            >
              Cancel
            </button>
            </div> 
          </div>
        </div>
      </div>
    </div>

  );
};

export default Buynow;
