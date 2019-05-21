const todos=[
{
    id:1,
    text:'Take out Trash',
    isCompleted:true
},
{
    id:2,
    text:'Meeting with boss',
    isCompleted:true
},
{ 
    id:3,
    text:'Dentist Appointment',
    isCompleted:false
}
];
const todoJSON=JSON.stringify(todos);
console.log(todoJSON);
// console.log(todos);
// console.log(todos[1].text);