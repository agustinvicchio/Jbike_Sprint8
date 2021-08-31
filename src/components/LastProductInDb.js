import React from 'react';
import imagenFondo from '../assets/images/stockBicis.jpg';
import { useEffect } from 'react';



function LastProductInDb(props){

    

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto en base de datos</h5>
                </div>
                
                <div className="card-body">
                <div>
                    <h2>{props.marca}, {props.modelo}</h2>
                </div>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Bicicletas stock "/>
                    </div>
                    <p>{props.desc}</p>
                    <div>
                        <p>
                            stock: {props.stock}
                        </p>
                        <br>
                        </br>
                        <p>precio: {props.precio}</p>
                    </div>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
