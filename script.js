const container = document.getElementById('caixa-principal');
const btnRegistrar = document.getElementById('registrar');
const btnEntrar = document.getElementById('entrar');

btnRegistrar.addEventListener('click', () => {
    container.classList.add("ativo");
});

btnEntrar.addEventListener('click', () => {
    container.classList.remove("ativo");
});