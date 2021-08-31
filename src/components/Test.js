import React from "react";

function Test() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Marcas en Base de datos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          {this.state.metricas.length ? 
            this.state.metricas.map((data,index) => 

            <div className="card bg-dark text-white shadow">
              <div className = "card-body">
              {data.name} {data.amount == null ? 0 : data.amount }
            </div>               
            </div>
          
            )
            :
            <p>Cargando la info...</p>
            }
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;