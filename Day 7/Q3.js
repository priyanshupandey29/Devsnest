/* Write a JavaScript program to get the length of a JavaScript object.
Sample object: var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
 */
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
var arr = Object.values(student);
console.log(arr[2]);
