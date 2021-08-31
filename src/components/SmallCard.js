import React from 'react';
import PropTypes from 'prop-types';

function SmallCard(props){
    return(
        <div className="col-md-4 mb-4">
            <div className={`card border-left-blue shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-blue text-uppercase mb-1`}> {props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.valor}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCard.defaultProps = {
    title: 'No Title',
    valir: "x"

}

/* PROPTYPES */

SmallCard.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        valor: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
    })
}



export default SmallCard;