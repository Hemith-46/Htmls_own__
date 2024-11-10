let pswrd = document.querySelector('#myPassword');
let Show = document.querySelector('.show');

function Strength(password){
    let i = 0;
    if (password.length > 6){
        i++;
    }
    if (password.length >= 6){
        i++;
    }
    if (/[A-Z]/.test(password)){
        i++;
    }
    if (/[a-z]/.test(password)){
        i++;
    }
    if (/[0-9]/.test(password)){
        i++;
    }
    if (/[A-Za-z0-8]/.test(password)){
        i++;
    }
    return i;
}

let container = document.querySelector('.container');

document.addEventListener("keyup",function(e){
    let Password = document.querySelector('#myPassword').value;
    let strength = Strength(Password);
    if (strength <= 2){
        container.classList.remove('blank')
        container.classList.add('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
    }
    else if (strength >= 2 && strength <= 4){
        container.classList.remove('blank')
        container.classList.remove('weak');
        container.classList.add('medium');
        container.classList.remove('strong');
    }
    else if (strength > 4){
        container.classList.remove('blank')
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.add('strong');
    }
    else if (strength == 0){
        container.classList.add('blank')
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
    }

})

Show.onclick = function(){
    if (pswrd.type === 'password'){
        pswrd.setAttribute('type','text');
        Show.classList.add('hide');
    }
    else {
        pswrd.setAttribute('type','password');
        Show.classList.remove('hide');
    }
}