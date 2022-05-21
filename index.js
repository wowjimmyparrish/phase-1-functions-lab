function distanceFromHqInBlocks(pickUp) {
    const headQuarters = 42
    if (pickUp > headQuarters) {
        return pickUp - headQuarters
    }
    if (pickUp < headQuarters) {
        return headQuarters - pickUp
    }
}
function distanceFromHqInFeet(inFeet) {
    return distanceFromHqInBlocks(inFeet) * 264
}
function distanceTravelledInFeet(start, destination){
     if (start > destination){
        return (start - destination) * 264
     }
     if (start < destination){
         return (destination - start) * 264
     }
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0
    }
    else if (distance > 400 && distance <= 2000){
        return 0.02 * (distance - 400)
    }
    else if (distance > 2000 && distance <= 2500){
        return 25
    }
    else (distance > 2500)
        return 'cannot travel that far'
    }
