let form = document.getElementById('Form'),
     fullname = document.getElementById('fullname'), 
     email = document.getElementById('email'), 
     phone = document.getElementById('phone'), 
     affair = document.getElementById('affair'); 

form.addEventListener("submit", (e)=>{
    e.preventDefault();

// Revisar si cada campo está completo
if (fullname.value.lenght == 0 || email.value.length == 0 || phone.value.lenght == 0 || affair.value.lenght == 0 ){
    alert ('Error: Debes completar todos los campos.')
    return;
}

// Revisar si el e-mail es válido
if (!validateEmail(email.value)){
    alert('Error: el formato del e-mail no es válido.')
    return;
}

// Envío exitoso
alert ('Gracias por tu mensaje. Nos comunicaremos en breve.')
})

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
