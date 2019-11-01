const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55,1));

const user = {
    name: 'Alex',
    city: ['Sydney', 'London', 'New York'],
    printPlacesLived() {
        return this.city.map((city) => this.name + ' has lived in ' + city);
    }
}
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());