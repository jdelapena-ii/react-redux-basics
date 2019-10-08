import { combineReducers } from 'redux'


const carsReducer = () => {
    return [
        { company: 'Toyota', model: 'Camry' },
        { company: 'Honda', model: 'Accord' },
        { company: 'Lexus', model: 'LX 570' },
        { company: 'Tesla', model: 'Model 3' },
        { company: 'Bently', model: 'Configurator' }
    ]
}

const carDetailReducer = (carSelected=null, action) => {
    if (action.type === 'CAR_SELECTED' ) {
        return action.payload
    }
    return carSelected
}

export default combineReducers({
    carsList: carsReducer,
    carSelected: carDetailReducer
})

