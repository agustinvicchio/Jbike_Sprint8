import React, {Component} from "react";
import Category from "./Category";


class CategoriesInDb extends Component {

  constructor(props) {
    super(props);
    this.state = {
      metricas: []
    }
  }


  componentDidMount()
  {
    fetch("http://localhost:3003/products")
    .then(result => result.json())
    .then(data => {
      let categorias = data.categoryCount;
      this.setState({
        metricas: categorias
      })
      console.log("Las Metricas");
      console.log(this.state.metricas);
    })
    .catch(e => {
      console.log("hay error");
      console.log(e);
    })
  }
  





  render(){
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
                <p>{data.name}</p> <p>{data.amount == null ? 0 : data.amount }</p>
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
}

export default CategoriesInDb;
