const cars = require('../model/cars');

function filterCars(data, { brand, model, type}) {
    let result = data; 

    if( brand) {
        result = result.filter(c => c.brand === brand)
    }

    if (model) {
        result =  result.filter(c => c.model === model)
    }

    if (type) {
        type = result.type(c => c.type === type)
    }

    return result
}


module.exports = { filterCars}