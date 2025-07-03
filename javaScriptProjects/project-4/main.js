const lengthp = document.querySelector(`#input-length`);
const upper = document.querySelector('#input-uppercase');
const lower = document.querySelector('#input-lowercase');
const number = document.querySelector('#input-number');
const symbol = document.querySelector('#input-symbol');
const input = document.querySelector('#input');


const copy = document.querySelector('#copy');
const generate = document.querySelector('#generate');

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+,./<>'

generate.addEventListener('click',()=>
{
    let str = '';
    if(upper.checked){
        str +=uppercasestr;
    }
     if(lower.checked){
        str+=lowercasestr;
    }
     if(number.checked){
        str+=numberstr;
    }
     if(symbol.checked){
        str+=symbolstr;
    }
    let password ='';
    console.log(str,"str");
    for(let i=0;i<lengthp.value;i++){
console.log(str.length);
let index = Math.floor(Math.random()*str.length);
console.log(index,'index');
console.log('math',Math.random());
password+=str[index];
    }
input.value = password;
});

copy.addEventListener('click',() => {
if (input.value === null) {
    alert('please generate a password first');
} else {
    const newele = document.createElement('textarea');
    newele.value = input.value;
    document.body.appendChild(newele);
    newele.select();
 
    document.execCommand('copy');
    alert('Password Copied to Clipboard');
    newele.remove();
}
});