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
            let info = this.state.tableRows;
            data.productsResponse.forEach((product) => {
                info.push({
                    marca: product.brand,
                    modelo: product.model,
                    precio: product.price,
                    stock: product.stock
                })
                console.log("info" + info);
            })
            this.setState({
                tableRows: info
            })
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
                                <th>Marca</th>
                                <th>Model</th>
                                <th>Precio</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tableRows.length ? this.state.tableRows.map((row,index) => {
                                    <ChartRow {...row[1]} key = {index} />
                            }) :
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