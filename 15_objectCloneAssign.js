
const arrayNumbers=[20, 3, 4, 56, 90, 400, 49];
const cloneArray=arrayNumbers;
cloneArray.push(56,66);
console.log(`1.Shallow clone array with value.`);
console.log(`Original Array              : [${arrayNumbers}]`);
console.log(`Updated shallowClone Array  : [${cloneArray}]`);
console.log(``);

console.log(`2.Deep clone array using spread operator.`);
const spreadArray=[...arrayNumbers];
spreadArray.push(10,25);
console.log(`Orignal Array           : [${arrayNumbers}]`);
console.log(`Updated deepClone Array : [${spreadArray}]`);
console.log(``);

console.log(`3.concta array using spread operator.`);
const arrayEven=[2,30,14,8];
const concatArray = [...arrayNumbers];
const twoArrayConcat=arrayEven.concat(concatArray);
console.log(`Before conctat array : [${arrayNumbers}]`);
console.log(`After Concat Array : [${twoArrayConcat}]`);
console.log(``);

console.log(`4.Employe_Info Object.`);

const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli,431202",
    },
    city:"Mumbai",
    state:"Maharashtra",
    country:"India"            
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91- 9096 5678 77"]
}

console.log(`5.Employee Details`);
  console.log(`Colony : ${employee_info.address.locality.colony}`);
  console.log(`Street : ${employee_info.address.locality.street}`);
  console.log(`State  : ${employee_info.address.state}`);
  console.log(`City   : ${employee_info.address.city}`);
  console.log(`Country: ${employee_info.address.country}`);
  console.log(`Mobile : ${employee_info.mobiles}`);
  console.log(``);


  console.log(`6.deep copy using JSON stringfy()`);
  const deepCloneEmpInfo=JSON.parse(JSON.stringify(employee_info));
  deepCloneEmpInfo.salary.july_month="80,0000INR";//update sallary

  console.log(`Given Sallary  : ${employee_info.salary.july_month}`);
  console.log(`Updated Sallary : ${deepCloneEmpInfo.salary.july_month}`);
  console.log(``);

  console.log(`Before Updated country : ${employee_info.address.country}`);
  employee_info.address.country="United Kingdom";
  console.log(`After updated country  : ${employee_info.address.country}`);


