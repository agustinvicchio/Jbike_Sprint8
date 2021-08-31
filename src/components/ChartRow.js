import React from 'react';
import PropTypes from 'prop-types';



function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.marca}</td>
                    <td>{props.modelo}</td>
                    <td>{props.precio}</td>
                    <td>{props.stock}</td>
                </tr>
            )
    }
    
        //de donde toma los datos esto??
        //de props



        ChartRow.defaultProps = {
            marca: 'No hay data',
            modelo: "No hay data",
            precio: "No hay data",
            stock: "No hay data",

        
        }
        
        /* PROPTYPES */
        
        ChartRow.propTypes = {
            marca: PropTypes.string,
            modelo: PropTypes.string,
            precio: PropTypes.string,
            stock: PropTypes.string,
        }

export default ChartRow;