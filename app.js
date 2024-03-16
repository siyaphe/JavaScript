const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Jordan',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appt',
        isCompleted: false
    }
];

// console.log(todos[1].text);
//JSON ------- to send data to the  server
const todoJSON =  JSON.stringify(todos);
console.log(todoJSON);


