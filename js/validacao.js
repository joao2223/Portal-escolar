export function valida(input) {
    mostraMensagemErro(input);
  }
  
  function mostraMensagemErro(input) {
    input.addEventListener('invalid', () => {
      input.setCustomValidity("Por favor, digite o seu nome");
    });
  }

