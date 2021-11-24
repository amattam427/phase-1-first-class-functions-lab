// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){
    const fareMultiplier = function(price){
        return (number*price);
    }
    return fareMultiplier;
}

function fareDoubler(number){
    const double = createFareMultiplier(number);
    return double(2);
}

function fareTripler(number){
    const triple = createFareMultiplier(number);
    return triple(3);
}

function selectDifferentDrivers(drivers, parameter2){
    return parameter2(drivers);
}

