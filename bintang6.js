let n = 5; 

// External loop
for (let i = 0; i < n; i++) {  
    let string = "";
  // printing spaces
  for (let j = 0; j < i; j++) { 
    string += "#";
  }
  // printing star
  for (let k = 0; k <(n-i) * 2 - 1; k++) { 
    string += "*";
  } 
console.log(string);
}

// let n = 5

// for (let i = 5; i > 0 ; i--) {

//   let str = '#'.repeat((n - i));

//   let str2 = '*'.repeat(i * 2 -1)



//   console.log(str + str2 );

// }

