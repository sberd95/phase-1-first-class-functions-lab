// Code your solution in this file!
const returnFirstTwoDrivers = function(x) {
    return [x[0], x[1]]
}
const returnLastTwoDrivers = function(x) {
    return [x[x.length-2], x[x.length-1]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {return fare * int}
}

const dubs = createFareMultiplier(2)
function fareDoubler(fare) {return dubs(fare)}

const trips = createFareMultiplier(3)
function fareTripler(fare) {return trips(fare)}

function selectDifferentDrivers(drivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}