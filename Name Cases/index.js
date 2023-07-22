/*This Line of Code convert the text in the lower case
to upper case in typescrip*/
//Declare the string
var firstName;
var lastName;
//Initialze the string
firstName = "Muhammad Bin";
lastName = "SALMAN Al SAUD";
//Print the Name before converting into UpperCase
console.log("\nFirst Namr Before Converting into the UpperCase:", firstName, "\n");
//Print thhe Name After Converting into the UpperCase 
console.log("First Name After Converting into the UpperCase:", firstName.toUpperCase(), "\n");
//Conversion of text from upper case to lower Case
console.log("\n\n\t\tConversion of Text From Upper Case To Lower Case!!\n\n");
//Print the Name before converting into LowerCase
console.log("\nLast Namr Before Converting into the LowerCase:", lastName, "\n");
//Print the Name After Converting into the LowerCase 
console.log("Last Name After Converting into the LowerCase:", lastName.toLowerCase(), "\n");
//Title Case
console.log("\n\n\t\tTitle Case!!\n\n");
//Creating the String
var tileCasename = firstName + lastName;
//Split te words of string 
var words = tileCasename.split(" ");
//Create the variable tat store the title case string
var tCaseName = " ";
//Initialize the for loop for changing the srting into title case
for (var i = 0; i < words.length; i++) {
    tCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
//Print the Titlecase string
console.log(tCaseName);
