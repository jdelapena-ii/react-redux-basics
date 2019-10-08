import React from 'react'
import CarList from './CarList'
import CarModel  from './CarModel'


const App = () => {
    return (
    <div className="ui container grid" style={{marginTop: '20px'}}>
        <div className="column eight wide">
            <CarList />
        </div>
        <div className="column eight wide">
            <CarModel />
        </div>
    </div>
    )
}

export default App