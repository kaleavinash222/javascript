function stringHandsOn() {
    var givenString="  Hey you are doing good, keep it up   ";
    console.log("Given String is = ",givenString);    

    var totalLength=givenString.length;
    console.log("Before Trim Total Length of string = ",totalLength);
    
    var trimtotalLength=givenString.trim();
    console.log("After Trimmed string is =",trimtotalLength);
    console.log("After trimmed length is = ",trimtotalLength.length);
    console.log("Total spaces in given string is = ",totalLength-trimtotalLength.length);
    console.log("after trimmed string 1st char is = ",trimtotalLength.charAt(0));
    console.log("after trimmed string last char is = ",trimtotalLength.charAt(trimtotalLength.length-1int));
}
stringHandsOn();

