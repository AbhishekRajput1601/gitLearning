
let person = {
    name : "abhishek",
    age : 20,
    city : "delhi",
    greet : () => {
        console.log("Hello, my name is " + this.name);
    }
}

console.log(person.greet()); 