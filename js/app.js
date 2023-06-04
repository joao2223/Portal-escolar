const botao_enviar = document.querySelector("#botao_enviar");
const botao_limpar = document.querySelector("#botao_limpar");
const campo_nome = document.querySelector("#campo_nome");
const campo_email = document.querySelector("#campo_email");
const campo_assunto = document.querySelector("#campo_assunto");
const campo_departamento = document.querySelector("#campo_departamento");
const campo_mensagem = document.querySelector("#campo_mensagem");


campo_nome.addEventListener('invalid', () => {
    campo_nome.setCustomValidity("Por favor, digite o seu nome");
});

campo_email.addEventListener('invalid', () => {
    campo_email.setCustomValidity("Por favor, digite o seu email");
});

campo_assunto.addEventListener('invalid', () => {
    campo_assunto.setCustomValidity("Por favor, digite o seu assunto");
});

campo_departamento.addEventListener('invalid', () => {
    campo_departamento.setCustomValidity("Por favor, escolha o departamento");
});

campo_mensagem.addEventListener('invalid', () => {
    campo_mensagem.setCustomValidity("Por favor, digite a mensagem");
});

botao_enviar.addEventListener('click', (evento) => {
    if (campo_nome.value != '',
        campo_email.value != '',
        campo_assunto.value != '',
        campo_departamento.value != '',
        campo_mensagem.value != '') {
        alert('Mensagem enviada"')
    }
});

botao_limpar.addEventListener('click', (evento) => {
    evento.preventDefault();
    campo_nome.value = '';
    campo_email.value = '';
    campo_assunto.value = '';
    campo_departamento.value = '';
    campo_mensagem.value = '';
});