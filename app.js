//OBJECT LITERAL-------------
const person = {
    firstName: 'Henri',
    lastName: 'Doe',
    age: 20,
    hobbies: ['music', 'movies', 'Soccer'],
    address: {
        street: '50 main st',
        city: 'Monroeville',
        state: 'PA'
    }
}

// console.log(person);
// console.log(person.firstName);
// console.log(person.firstName, person.lastName);

// console.log(person.hobbies[1]);
// console.log(person.address.city);

//to create variable

// const { firstName, lastName } = person;
// console.log(firstName, lastName);

const { firstName, lastName, address: {city}} = person;

person.email = 'henri@gmail.com'
console.log(person);


