class vehicle{
    constructor(fuel,wheelcount,landOrair){
        this.fuel = fuel
        this.wheelcount = wheelcount
        this.landOrair = landOrair
    }
}

class Car extends vehicle{
    constructor(model,country,fuel,wheelcount,landOrair){
        super (fuel,wheelcount,landOrair)
        this.model = model
        this.country = country
    }
}
class Plane extends Car{
    constructor(model,country,fuel,wheelcount,landOrair){
        super(model,country,fuel,wheelcount,landOrair)
    }
}

let plane1 = new Plane('Airbus A350','UK',6.03,3000,'Air')

console.log(plane1.country)
console.log(plane1.model)
console.log(plane1.fuel)
console.log(plane1.wheelcount)
console.log(plane1.landOrair)