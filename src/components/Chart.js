import React , { Component } from 'react';
import ChartRow from './ChartRow';




class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            tableRows: []
        }
    }


    componentDidMount()
    {
        fetch("http://localhost:3003/products")
        .then(result => result.json())

        .then(data => {
            let info = [];
            let products = data.productsResponse
            console.log(products[0].id);
            products.map(product => {
                info.push({
                    id: product.id,
                    marca: product.brand,
                    modelo: product.model,
                    stock: product.stock,
                    precio: product.price
                })
                console.log(info);
            })
            this.setState({tableRows: info})
            console.log(this.state.tableRows[0].modelo);
                
        
            
        })
        .catch(e => {
            console.log("Hay errors");
            console.log(e);
        })
    }

    render()
    {
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Marca</th>
                                <th>Model</th>
                                <th>Precio</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tableRows.length ? this.state.tableRows.map((data,index) => 
                                    <ChartRow {...data} key = {index} />
                            ) :
                            <tr>
                                <th>
                            <p>Caragndo..</p>
                                </th>
                                <th>
                            <p>Caragndo..</p>
                                </th>
                                <th>
                            <p>Caragndo..</p>
                                </th>
                                <th>
                            <p>Caragndo..</p>
                                </th>
                            </tr>}
                        </tbody>
                  

                    </table>
                </div>
            </div>
        </div>

    )}
}

export default Chart;