class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}


const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finnce",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finnce",45000,"Infy");
const emp_monika=new Employee(77,"Anil","IT",40000,"Wiprow");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

let array_employee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`1.All Employee working on TCS.`);
for (const employee of array_employee) {
    if (employee.emp_company=="TCS") {
        console.log(`EmpName : ${employee.emp_name}      EmpCompany : ${employee.emp_company}`);
    }
}

console.log(``);
console.log(`2.Find the "Finance" dept employees.`);
for (const employee of array_employee) {
    if (employee.emp_dept=="Finnce") {
        console.log(`EmpDept : ${employee.emp_dept}       EmpName: ${employee.emp_name}`);
    }
}

console.log(``);
console.log(`3.find the emploees whose name with start "R"and complate emp details.`);
for (const employee of array_employee) {
    if (employee.emp_name.startsWith("R")) {
        console.log(employee);
    }
}

console.log(``);
console.log(`4.find the employees whose salary > 75000 & log name,company,salary.`);
for (const employee of array_employee) {
    if (employee.emp_salary>75000) {
        console.log(`EmpName : ${employee.emp_name}     Company : ${employee.emp_company}    Salary : ${employee.emp_salary}`);
    }
    
}
console.log(``);
console.log(`5.find employees whose salary >=50000 & dept "IT" log complate details.`);
for (const employee of array_employee) {
    if (employee.emp_salary>=50000 && employee.emp_dept=="IT") {
        console.log(employee); 
    }
}

console.log(``);
console.log(`6.find all the employees company=Infy & log compalte details.`);
for (const employee of array_employee) {
    if (employee.emp_company=="Infy") {
        console.log(employee);
    }
}


    

   

