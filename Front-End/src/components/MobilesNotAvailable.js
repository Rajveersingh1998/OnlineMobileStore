
import { Link } from "react-router-dom";
const MobilesNotAvailable =()=>{

    return (
        <div>
             <div class="container text-center space-2 space-3--lg">
             <div class="w-md-80 w-lg-60 text-center mx-md-auto">
              <div class="mb-5">
            <span class="u-icon u-icon--secondary u-icon--lg rounded-circle mb-4">
              <span class="fa fa-shopping-bag u-icon__inner"></span>
            </span>
            <h1 class="h2">Currently No Mobile Available !!!   😓</h1>
            <p>You will find a lot of interesting Mobiles of Other Brands.</p>
          </div>
          <Link class="btn btn-primary btn-wide" to={ { pathname: "/"}}><b>Start Shopping</b></Link>
          </div>
         </div>
        </div>
    )
}

export default MobilesNotAvailable