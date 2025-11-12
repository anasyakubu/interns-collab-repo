let name = "Nazir";
let age = 21;
let state = "Kano";
let career ="Web Dev"
name = "Walid";
age = 22;
function greet(name) {
  return `Hello, ${name}!`;
}

const sayHi = (name, age, state, career) => {
  console.log("Hi " + name, age, state, career);
};
//console.log ( "Hello am ",name,"i am a ",age,"years old ",career,"from ",state);

    console.log(sayHi(name, age, state, career))
    document.getElementById("title").innerText = "WELCOME!";