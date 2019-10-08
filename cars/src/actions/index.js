// const CAR_SELECTED = 'CAR_SELECTED'


export const selectCar = (car) => {
    return {
        type: 'CAR_SELECTED',
        payload: car
    }
}