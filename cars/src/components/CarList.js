import React, {Component} from 'react'
import { connect } from 'react-redux'
import {selectCar} from '../actions'

class CarList extends Component {
    renderList(){
        return this.props.cars.map((car) => {
          return(
            <div className="item" key={car.company}>
              <div className="right floated content">
                <button 
                  className="ui button primary"
                  onClick={() => this.props.selectCar(car)}
                >    
                  Select
                </button>
              </div>
    
              <div className="content">
                {car.company}
              </div>
            </div>
          )
        })
      }

    render() {
        // console.log(this.props)
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state)
    return { cars: state.carsList }
} 

export default connect(mapStateToProps, {selectCar})(CarList)