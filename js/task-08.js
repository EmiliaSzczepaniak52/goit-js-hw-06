const form = document.querySelector(".login-form");
const inputEmail = document.querySelector('input[type="email"');
const inputPassword= document.querySelector('input[type="password"');

const verification = (a) =>{
    a.preventDefault()
    if (inputEmail.value && inputPassword.value ==="")
    {alert("Uzupełnij wszystkie pola");
}
else
{
    let obj ={
        email: inputEmail.value,
        password: inputPassword.value
    };
    console.log(obj)
}
a.currentTarget.reset();
}

form.addEventListener("submit", verification);
