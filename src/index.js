// var first = {name: "Hamish"};
// var second = first;
// first.name // Manish
// second.name = "Evan";
// first.name // Cygnet

// console.log(first.name)


// //This is an empty object initialized using the object literal
// var companyInfo = {};

// //This is an object with 3 items, again using object literal 
// var companyInfo = {
//     name: "Cygnet Infotech",
//     code: "0606",
//     city: "Ahmedabad",
//     getCode: function()
//     { 
//         return this.code; 
//  } 
// }


// var companyInfo = new Object(); //Initialize empty object

// //Assign the properties to above object
// companyInfo.name = "Cygnet Infotech";
// companyInfo.code = "0606";
// companyInfo.city = "Ahmedabad";
// companyInfo.getCode = function() 
// {
//     return this.code
// }

// console.log(companyInfo)


// // My own student id card from NMIT
// var studentCard = new Object();

// studentCard.firstName = "Joseph"
// studentCard.lastName = "Cruel"
// studentCard.idNum = "13525376"
// studentCard.expdate = "31 December 2023"
// studentCard.semester = "first"

// console.log(studentCard.)


// function Book(name, year)
// {
//     this.name = name;
//     this.year = year;
// }

// var firstBook = new Book("ReactJS Ebook", 2016);
// var secondBook = new Book("JavaScript Ebook", 2017);

// console.log(firstBook.name, firstBook.year);
// console.log(secondBook.name, secondBook.year);

// firstBook instanceof Book // True
// secondBook instanceof Book // True


// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);
  
//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // Inherited properties can be overwritten
  
//   me.printIntroduction();
//   // Expected output: "My name is Matthew. Am I human? true"




//Write a fuction that transfors an array into a mirror array 
// mirrorArray([1,2,3,4]) -> ([1,2,3,4,3,2,1])
  
function mirrorArray(arr) {
  for(let i = arr.length - 2; i >= 0; i--) {
    arr.push(arr[i])
  }
  return arr 
}


console.log(mirrorArray([1,2,3,4,5,6]))

