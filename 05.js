// Guess the ouptut & explain

//Que-1
// Promise.resolve().then(() => console.log(1));
// setTimeout(() => console.log(2), 0)
// console.log(3)
// new Promise(() => console.log(4));
// (async() => console.log(5))()

//Que-2
async function greetUser() {
  const initialText = "Hello"
  const {userName} = await getUser();
  const result = `${initialText} ${userName}`;
 
  console.log(result);
}

greetUser();