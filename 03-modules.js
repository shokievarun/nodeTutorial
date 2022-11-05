// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const john="john";
const peter="peter"
const sayHi = (name) => {
    console.log(`Hello there ${name}`)
  }
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)


const names=require("./04-names")
const sayHi=require("./05-utils")
const data=require("./06-alternative-flavor")
require("./07-mind-grenade")
console.log(data)
sayHi(data.items[0])
sayHi(data.singlePerson.name)
sayHi(names.john)
sayHi(names.peter)