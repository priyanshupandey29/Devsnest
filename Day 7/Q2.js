/* Write a JavaScript program to delete the rollno property from the following object.
Also print the object before or after deleting the property.
Sample object: var student = { name: "David Rayy", sclass: "VI", rollno: 12 }; 
*/

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log("Before Deleting" + " " + Object.values(student));
delete student.rollno;
console.log("After Deleting" + " " + Object.values(student));
