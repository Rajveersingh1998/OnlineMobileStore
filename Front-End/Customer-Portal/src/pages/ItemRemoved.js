import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Orderconfirm.css";


const Orderconfirm = () => {

  const history = useHistory();
  const isSignin = useSelector((state) => state.isSignin);
  const goToCart = () => {
    history.push("/cart");
  };

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
               
              <h2>Item Removed Sucessfully !!</h2>
              <p></p>
              <p>
                <i>Don't Miss the Latest Collection.. </i>
              </p>
            </div>
            <button
              onClick={() => {
                goToCart();
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