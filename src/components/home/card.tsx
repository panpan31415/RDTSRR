import * as React from "react";

const Card:React.SFC = ()=>{
    return ( 
        <div className="col col-sm-6 col-md-4 col-lg-3">
        <div className="card">
        <span className="icon ">&#xf0c0;</span>
            <h1 className="total"><span>18</span> Users</h1>
        </div>
        </div>
     );
}
export default Card;