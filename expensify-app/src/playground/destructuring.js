// const person = {
//     name: 'Alex',
//     age: 20,
//     location: {
//         city: "Sydney",
//         temp: 23
//     }
// }

// const { name = "Anonymous", age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: "ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const { name: publisherName = "Self-Published"} = book.publisher
// console.log(publisherName);

const address = ['1299 South Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', "$2.00", "$2.50", "$2.75"]

const [coffee, ,mediumCoffee, ] = item;

console.log(`A medium ${coffee} costs ${mediumCoffee}`)