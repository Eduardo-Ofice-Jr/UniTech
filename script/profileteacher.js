const buttonSubmit = document.querySelector('#button_submeter')
const inputNomeTeacher = document.querySelector('#input_nometeacher')
const inputSobrenome = document.querySelector('#input_sobrenome')
const inputNascimento = document.querySelector('#input_nascimento')
const inputMorada = document.querySelector('#input_morada')
const inputContacto = document.querySelector('#input_contacto')
const inputUser = document.querySelector('#input_user')
const inputSenha = document.querySelector('#input_senha')


buttonSubmit.addEventListener('click', async (event) => {
    event.preventDefault();
    const nomeTeacher = inputNomeTeacher.value
    const sobrenomeTeacher = inputSobrenome.value
    const datanascimento = inputNascimento.value
    const morada = inputMorada.value
    const contact = inputContacto.value
    const username = inputUser.value
    const senha = inputSenha.value

    if (sobrenomeTeacher === '' || nomeTeacher === '' || sexo === '' || datanascimento === '' || morada === '' || contact === '' ||  username === '' || senha === '' ) {
        notie.alert({ text: 'Por favor, preencha todos os campos primeiro' });
        return;
    }


})