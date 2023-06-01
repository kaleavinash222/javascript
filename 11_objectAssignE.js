 
 console.log(`1.Create an object sbiBank,AxisBank,YesBank with data member & propertie.`);
 let sbiBank={
    bankName:"SBI Bank",
    location:"Pune",
    accountNo:123456789123,
    ifsc:"SBIN0000454",
 
    showDetails: function(){
         console.log(`Bank Name : ${sbiBank.bankName}, Location : ${sbiBank.location}, Account No : ${this.accountNo}, IFSC: ${this.ifsc}`);
        }
 }
 sbiBank.showDetails();



let axisBank={
    bankName:"Axis Bank",
    location:"Mumbai",
    accountNo: 324578590435,
    ifsc:"UTIB0000004",

    showDetails:function(){
        console.log(`Bank Name : ${axisBank.bankName}, Location : ${axisBank.location}, Account No : ${axisBank.accountNo}, IFSC: ${axisBank.ifsc}`);
    
    }
}

axisBank.showDetails();


let yesBank={
    bankName:"Yes Bank",
    location:"Kolhapur",
    accountNo:984673892836,
    ifsc:"YESB0000043",

    showDetails:function(){
        console.log(`Bank Name : ${yesBank.bankName}, Location : ${yesBank.location}, Account No : ${yesBank.accountNo}, IFSC: ${yesBank.ifsc}`); 
    }
}
yesBank.showDetails();
