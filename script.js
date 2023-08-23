const inputbox = document.querySelector('.input2');
const length=12;
const ucase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lcase='abcdefghijklmnopqrstuvwxyz'
const symbols='@#$%^&*()_+~|{}[]></-='
const numbers='0123456789'
const mix= ucase+lcase+symbols+numbers

function password(){
  let password=''
   password+=ucase[Math.floor(Math.random()*ucase.length)]
   password+=lcase[Math.floor(Math.random()*lcase.length)]
   password+=symbols[Math.floor(Math.random()*symbols.length)]
   password+=numbers[Math.floor(Math.random()*numbers.length)]
  while(password.length<length){
   password+=mix[Math.floor(Math.random()*mix.length)]
  }
  inputbox.value=password
}
function copy(){
  inputbox.select()
  document.execCommand('copy')
}


