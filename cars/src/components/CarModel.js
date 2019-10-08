import React from 'react'
import { connect } from 'react-redux'


const CarModel = ({car}) => {
    if(!car) {
        return <div>
            <h3>Select a car company</h3>
        </div>
    }
    return (
        <div>
            <h3>Your free car is:</h3>
            <h4>{car.company} {car.model}</h4>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { car: state.carSelected }
}

export default connect(mapStateToProps)(CarModel)