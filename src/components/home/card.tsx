import * as React from "react";

const Card:React.SFC <any>= (props)=>{
    return ( 
        <div className="col col-sm-6 col-md-4 col-lg-3">
        <div className="card">
        <span className="icon ">&#xf0c0;</span>
            <h1 className="total"><span>{props.total}</span> {props.type}</h1>
        </div>
        </div>
     );
}
export default Card;