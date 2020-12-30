// //Menggunakan 3 for

// let n = 5;

// // External loop
// for (let i = 1; i <= n; i++) {
//   let string = "";
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += "1";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   console.log(string);
// }




// //Menggunakan Repeat
// let n = 5

// for (let i = 1; i <= n; i++) {

//   let str = '#'.repeat(n - i);

//   let str2 = '*'.repeat(i * 2 - 1)



//   console.log(str + str2);

// }


// //Menggunakan if else

for (let i = 5; i >= 0; i--) {
  let a = "";
  for (let j = 0; j <= 10 - i; j++) {
    if (j >= i) {
      a += "*"
    } else {
      a += "#"
    }
  }

  console.log(a)
}