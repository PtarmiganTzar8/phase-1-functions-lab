function distanceFromHqInBlocks(number){
    const distanceFromHqInBlocks = number - 42
    if (distanceFromHqInBlocks < 0) {
        return distanceFromHqInBlocks * -1
    }
    return distanceFromHqInBlocks
}

function distanceFromHqInFeet(number){
    const distanceFromHqInFeet = distanceFromHqInBlocks(number) * 264
    return distanceFromHqInFeet
}

function distanceTravelledInFeet(start, destination){
    const distanceTravelledInFeet = (destination-start) * 264
    if (distanceTravelledInFeet < 0){
        return distanceTravelledInFeet * -1
    }
    return distanceTravelledInFeet
}

function calculatesFarePrice(start, destination){
    const calculatesFarePrice = distanceTravelledInFeet(start, destination)
    if (calculatesFarePrice <= 400){
        return 0
    }
    else if (calculatesFarePrice > 400 && 2000 > calculatesFarePrice){
        return (calculatesFarePrice - 400) * .02
    }
    else if (calculatesFarePrice >= 2000 && 2500 >= calculatesFarePrice){
        return 25
    }
    else if (calculatesFarePrice > 2500){
        return 'cannot travel that far'
    }
}