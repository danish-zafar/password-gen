let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
let lowercase = "abcdefghijklmnopqrstuvwxyz".split('');
let numbers ="123456789".split('');
let sign ="!@#$%^&*()_+=-{}[]|\<>,./?".split('');
let password = uppercase.concat(lowercase,sign,numbers);
let genpassword="";
// password length
let increase = document.querySelector('.plus');
let decrease = document.querySelector('.minus');
let number = document.querySelector('.num');
let n=8;
increase.addEventListener('click',()=>{
    // n>20?n++:n=0;
    // n++;
    n<20?n++:n=8;
    number.textContent=n;
})
// decrease.addEventListener('click',()=>{
//     n>0?n--:n=0;
//     number.textContent=n;
// })

decrease.addEventListener('click',()=>{
    n>8?n--:n=20;
    number.textContent=n;
})

//main
function auto(){
    for(let i=1;i<n;i++){
        genpassword = genpassword + password[randomch()];
    }
    function randomch(){
        let random = Math.floor(Math.random()*password.length);
        return random;
    }
}
// password
let pword = document.querySelector('.password');
let button = document.getElementById('gen');
button.addEventListener('click',()=> {
    auto();
pword.textContent = genpassword;
genpassword="";
})



