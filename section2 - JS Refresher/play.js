const person = {
    name: "Ron",
    age: 26,
    greet() {
        console.log("Hi, I am " + this.name)
    }
}

const hobbies = ['Sports', 'Cooking']

// for( let hobby of hobbies) {
//     console.log(hobby)
// }

console.log(hobbies.map(hobby => 'Hobby:' + hobby ))
console.log(hobbies)

hobbies.push('Programming')
console.log(hobbies)

const copiedArray = [...hobbies]
console.log(hobbies)
console.log(copiedArray)

const person2 = {
    name: "Ron2",
    age: 26,
    greet() {
        console.log("Hi, I am " + this.name)
    }
}

const printName = (person) => {
    console.log(person.name)
}
const printName2 = ({ name }) => {
    console.log(name)
}

printName2(person2)

const { name, age } = person2
console.log(name, age)

const [h1, h2, h3, h4] = hobbies
console.log(h1, h2, h3, h4)