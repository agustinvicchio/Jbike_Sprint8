import React from "react";


function Category(props)
{
    return(
        <div className="card bg-dark text-white shadow">
        <div className="card-body">{props.data.name} {props.data.amount}</div>
        </div>
    )





}


export default Category;