class Vehicle {
  ownerName;
  fuelName;
  modelName;
  engineNo;
  vehicleAge;

  constructor(ownerName, fuelName, modelName, engineNo, vehicleAge) {
    this.ownerName = ownerName;
    this.fuelName = fuelName;
    this.modelName = modelName;
    this.engineNo = engineNo;
    this.vehicleAge = vehicleAge;
  }
}
const maruti = new Vehicle( "Ramesh","Petrol","Ertiga","HA56JDBRWSF","5 Years");
const mahindra = new Vehicle("Nilesh","Desel","Scorpio","HA57JDHRWJF","7 Years");
const tata = new Vehicle("Rohit", "Petrol", "Safari", "LA56HFBRWSF", "2 Years");
const toyota = new Vehicle("Mohit","Desel","Corolla","KA56JDBRWSF","4 Years");
const suzuki = new Vehicle("Ram", "Petrol", "Shift", "MS56JVBRWSF", "6 Years");

const arrayOfVehicle = [maruti, mahindra, tata, toyota, suzuki];

for (const Vehicle of arrayOfVehicle) {
    console.log(`Vehicle Details is -> OwnerName : ${maruti.ownerName}, MuelName : ${maruti.fuelName}, ModelName : ${maruti.modelName}, EngineNo : ${maruti.engineNo}, VehicleAge : ${maruti.vehicleAge}`);
    console.log(`Vehicle Details is -> OwnerName : ${mahindra.ownerName}, MuelName : ${mahindra.fuelName}, ModelName : ${mahindra.modelName}, EngineNo : ${mahindra.engineNo}, VehicleAge : ${mahindra.vehicleAge}`);
    console.log(`Vehicle Details is -> OwnerName : ${tata.ownerName}, MuelName : ${tata.fuelName}, ModelName : ${tata.modelName}, EngineNo : ${tata.engineNo}, VehicleAge : ${tata.vehicleAge}`);
    console.log(`Vehicle Details is -> OwnerName : ${toyota.ownerName}, MuelName : ${toyota.fuelName}, ModelName : ${toyota.modelName}, EngineNo : ${toyota.engineNo}, VehicleAge : ${toyota.vehicleAge}`);
    console.log(`Vehicle Details is -> OwnerName : ${suzuki.ownerName}, MuelName : ${suzuki.fuelName}, ModelName : ${suzuki.modelName}, EngineNo : ${suzuki.engineNo}, VehicleAge : ${suzuki.vehicleAge}`);
}


console.log(`_____________________________________________________________________`);
console.log(`2.Define class collage must be contain.`);

class Collage{
    collageName
    established
    collagePrinciple
    city

    constructor(collageName,established,collagePrinciple,city){
        this.collageName=collageName;
        this.established=established;
        this.collagePrinciple=collagePrinciple;
        this.city=city;
    }
}
const collage1=new Collage("KC Collage","2001","S.K Patil","Mumbai");
const collage2=new Collage("Balbhim collage","1990","dr.R.V Shikhade","Beed");
const collage3=new Collage("New Arts Collage","1970","dr.B.H.Zaware","A.Nagar");
const collage4=new Collage("dr.Ambedkar collage","1964","dr.G.R.P","Nagpur");

     const arrayCollage=[collage1,collage2,collage3,collage4];

     for (const collage of arrayCollage) {
        console.log(`Collage Details -> CollageName: ${collage1.collageName}, Established : ${collage1.established}, CollagePrinciple : ${collage1.collagePrinciple}, City : ${collage1.city}`);
        console.log(`Collage Details -> CollageName: ${collage2.collageName}, Established : ${collage2.established}, CollagePrinciple : ${collage2.collagePrinciple}, City : ${collage2.city}`);
        console.log(`Collage Details -> CollageName: ${collage3.collageName}, Established : ${collage3.established}, CollagePrinciple : ${collage3.collagePrinciple}, City : ${collage3.city}`);
        console.log(`Collage Details -> CollageName: ${collage4.collageName}, Established : ${collage4.established}, CollagePrinciple : ${collage4.collagePrinciple}, City : ${collage4.city}`);

     }
    


