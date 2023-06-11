const person = {
    name: "Stew",
    age: 54
}
function sayHello(company) {
    console.log(` ${person.name} ${person.age}  ${company}`);
}

sayHello.call(person, "Apple" )
//apply() method
console.log("apply()");
sayHello.apply(person, ["Apple" , "CEO"] );

//bind
console.log("bind()");
let funRef = sayHello.bind(person);

funRef("Apple" , "CEO" );