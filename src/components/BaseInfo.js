import React , { Component } from 'react';
import SmallCard from './SmallCard';
import PropTypes from 'prop-types';

class BaseInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            metricas: []
        }
    }

    componentDidMount(){
        let promises = [
            fetch("http://localhost:3003/users").then(result => result.json()),
            fetch("http://localhost:3003/products").then(result => result.json())
        ];

        Promise.all(promises)
        .then(result => {
            let products = result[0].meta;
            let users = result[1].meta
            

                this.setState({metricas: [
                    {
                    title: "Total de productos",
                    valor: products.count
                    },
                    {
                    title: "Total de categorias",
                    valor: 5
                    },
                    {
                    title: "Total de usuarios",
                    valor: users.count
                    }
                ]
            });
            console.log(this.state.metricas);
        })
    }



    render()
    {
        return(
            <React.Fragment>
                <div className ="row">
            {this.state.metricas.length ? this.state.metricas.map((dato,index) => 
                <SmallCard  {...dato} key = {index} />
            ) 
            :
            <p>Cargando Cartas..</p>
            }
            </div>
            </React.Fragment>
          

            
        )
    }

}



export default BaseInfo;












/*

let moviesInDB = {
    title: 'Productos en base de datos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}


let totalAwards = {
    title:' Total categorias', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}


let actorsQuantity = {
    title:'Usuarios' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}


*/



