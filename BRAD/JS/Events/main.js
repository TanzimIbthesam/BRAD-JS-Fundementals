
const btn=document.querySelector('.btn');
//if Mouse is clicked
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    //console.log('click');
    //To find the actual target
    //console.log(e.target);
    //To get the class name
    //console.log(e.target.className);
    //To change the background
    document.querySelector('#my-form').style.background='yellowgreen';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
});
//If Mouse is hovered
// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault();
//     //console.log('click');
//     //To find the actual target
//     //console.log(e.target);
//     //To get the class name
//     //console.log(e.target.className);
//     //To change the background
//     document.querySelector('#my-form').style.background='yellowgreen';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
// });
// if Mouse exit
// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     //console.log('click');
//     //To find the actual target
//     //console.log(e.target);
//     //To get the class name
//     //console.log(e.target.className);
//     //To change the background
//     document.querySelector('#my-form').style.background='yellowgreen';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
// });