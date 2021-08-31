import React, { Component } from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';

class ContentRowCenter extends Component{

    constructor(props){
        super(props);
        this.state = {
            caracteristicas: {}
        }
    }

    componentDidMount()
    {
        fetch("http://localhost:3003/products")
        .then(result => result.json())
        .then(data => {
            console.log(data);
            let lastProduct = data.productsResponse[data.meta.count-1]            
            let caracteristicas = {
                marca: lastProduct.brand,
                modelo: lastProduct.model,
                desc: lastProduct.desc,
                precio: lastProduct.price,
                stock: lastProduct.stock,
                imagen: lastProduct.image
            }
            this.setState({
                caracteristicas: caracteristicas
            })

            console.log(this.state.caracteristicas);
        
        })
    }




    render(){
    return (
        <div className="row">
            

            <LastProductInDb {...this.state.caracteristicas} />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriesInDb />

            

        </div>
    )
    }
}

export default ContentRowCenter;