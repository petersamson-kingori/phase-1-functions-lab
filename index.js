

function distanceFromHqInBlocks(pickup){
    
    
if (pickup > 42){
    return pickup - 42;
}else if (pickup < 42){
    return 42 - pickup;
}
}
distanceFromHqInBlocks();




function distanceFromHqInFeet(pickup) {
    pickup;
    if (distanceFromHqInBlocks(pickup)){
        return (distanceFromHqInBlocks(pickup)) * 264;
    }


}

function distanceTravelledInFeet(start, destination) {

    if (start > destination){
        return (start - destination) * 264;
    }else if (start < destination){
        return (destination - start) * 264;
    }
    


}

function calculatesFarePrice(start, destination) {
 
if (distanceTravelledInFeet(start,destination) <= 400){
    return 0
}else if (distanceTravelledInFeet(start, destination) <= 2000){
    return ((distanceTravelledInFeet(34 , 32)) - 400) * 0.02
}else if (distanceTravelledInFeet(start, destination) >= 2500){
    return 'cannot travel that far'
}

else if (distanceTravelledInFeet(start, destination) >= 2001){
    return 25
}
    
}