const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (Event) => {
event.preventDefault();

//Verifica se o nome está vazio
if(nameInput.value === "") {
    alert("Por favor, preencha o seu nome");
return

}

// Verifique se o e-mail está preechido e se é válido

if(emailInput.value === "" || lisEmailValid(emailInput.value)) {
    alert("Por favor, preecha seu emai");
    return;
}

//Verificar se a senha está preenchida
if(!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa ter no mínimo 8 dígitos.");
    return;
}

//Verifica se a situação foi selecionada
if( jobSelect.value === "") {
    alert("Por favor selecione a su siuação");

    return; 
}

// verifica se a mensagem está preenchid
if(messageTextarea.value === ""){
    alert("Por favor, escreva uma mensagem");
    return;
}

// Se todos os campos estiverem corretamente preenchidos, envie o formulário.
form.submit();
});

// função que valida e-mail
function isEmailValid(email){

    //Criar uma regex para validar email
    const emailRegex = new RegExp(
      /^ [a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }
    
    return false;
}
    // Função que valida a senha
    function validatePassword(password, minDigits){
     if(password.length >= minDigits){
       // Senha válida
       return true;

     }
    // Senha inválida
    return false

    }

