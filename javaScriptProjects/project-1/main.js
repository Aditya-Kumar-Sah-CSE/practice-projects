const inputfield = document.querySelector('#input');
const outputfield = document.querySelector('#output');
const eye= document.querySelector('#eye');

inputfield.addEventListener('input',function(){
    // console.log(inputfield.value);
    let password =inputfield.value ;

    if(password.length<8){
        outputfield.innerText = 'password is to short';
        outputfield.style.color = 'red';
    }
    // ! for [a,z]
    else
    {
        if(password.search(/[a-z]/)==-1){
    outputfield.innerText='password is missing a lowercase letter!',
    outputfield.style.color = 'red';
    }    
        // ! for [A-Z]
    else if(password.search(/[A-Z]/)==-1){
    outputfield.innerText='password is missing a uppercase letter!',
    outputfield.style.color = 'red';
    }     
        // ! for [1-9]
    else if(password.search(/[0-9]/)==-1){
    outputfield.innerText='password is missing a number!',
    outputfield.style.color = 'red';
    }
        // ! for [!@#$%^&*()_+{}|:?><';`]
    else if(password.search(/[/!/@/#/$/%/^/&/*/(/)/_/+/{/}/|/:/?/>/</'/;/`]/) == -1){
    outputfield.innerText='password is missing a special number !'
    outputfield.style.color = 'red';
        }
        else { 
            outputfield.style.color = 'green' ;
            outputfield.innerText='strong password';
            
        }
    }
});
 eye.addEventListener('click',()=>{
   const typeValue= inputfield.getAttribute("type");
   if(typeValue === "password"){
    inputfield.setAttribute('type',"text");
   }
   else
   inputfield.setAttribute('type',"password");
 })