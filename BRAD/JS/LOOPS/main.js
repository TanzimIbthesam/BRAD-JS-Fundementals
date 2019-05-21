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
    //forloop
    // for(let i=0;i<10;i++){
    //     // console.log(i);
    //     console.log('For Loop number'+i+'variable');
    // }
    //for(let i=0;i<todos.length;i++){
        // console.log(i);
        // console.log('For Loop number'+i+'variable');
        //console.log(todos[i].text);
    //}
    // for (let todo of todos){
    //      console.log(todo);
    //      console.log(todo.id);
    // }
    //while loop
    // let i=0;
    // while(i<10){
    //     console.log('Your loop is'+i);
    //     i++;
    // }
    //High order array methods
    //Foreach,map,filter
    //Foreach
    // todos.forEach(function(todo){
    //  console.log(todo.text);
    // });
    //Map
    // const todoText=todos.map(function(todo){
    //     return todo.text;
    // });
    // console.log(todoText);
    //Filter
    const todoCompleted=todos.filter(function(todo){
        return todo.isCompleted===true;
    }).map(function(todo){
        return todo.text;
    })
    console.log(todoCompleted);