const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    // console.log(nameInput);
    // //To get a value
    // console.log(nameInput.value);
    if(nameInput.value===''||emailInput===''){
        //For adding error with a style
    msg.classList.add('error');
    msg.innerHTML='Please enter all fields';
    //To set a particular time
    setTimeout(()=>msg.remove(),3000);
    }else{
      //console.log('Success');
      const li=document.createElement('li');
      li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
      //Append to ul
      userList.appendChild(li);
      //Clear fields
      nameInput.value='';
      emailInput.value='';
    }
}