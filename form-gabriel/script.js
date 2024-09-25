const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

function validaForm() {
    return Number(campoB.value) > Number(campoA.value);
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    if (validaForm()) {
        mensagem.textContent = 'Formulário validado com sucesso!';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'O Campo B deve ser maior que o Campo A.';
        mensagem.style.color = 'red';
    }

    campoA.value = '';
    campoB.value = '';

    setTimeout(() => {
        mensagem.textContent = '';
    }, 3000);
});
