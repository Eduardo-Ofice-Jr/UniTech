const buttonSubmit = document.querySelector('#button_submeter')
const inputNomeStudent = document.querySelector('#input_nomeestudante')
const inputSobrenome = document.querySelector('#input_sobrenome')
const inputSexo = document.querySelector('#input_sexo')
const inputNascimento = document.querySelector('#input_nascimento')
const inputMorada = document.querySelector('#input_morada')
const inputContacto = document.querySelector('#input_contacto')
const inputNumberBi = document.querySelector('#input_number_bi')
const inputCurso = document.querySelector('#input_curso')
const inputDataInscricao = document.querySelector('#input_data_inscricao')
const inputUser = document.querySelector('#input_user')
const inputSenha = document.querySelector('#input_senha')
const inputSenhaRepetida = document.querySelector('#input_senha_repetida')


buttonSubmit.addEventListener('click', async (event) => {
    event.preventDefault();
    const nomestudent = inputNomeStudent.value
    const sobrenomestudent = inputSobrenome.value
    const sexo = inputSexo.value
    const datanascimento = inputNascimento.value
    const morada = inputMorada.value
    const contact = inputContacto.value
    const numberbi = inputNumberBi.value
    const curso = inputCurso.value
    const inscricao = inputDataInscricao.value
    const username = inputUser.value
    const senha = inputSenha.value
    const repeatsenha = inputSenhaRepetida.value

    if (nomestudent === '' || sobrenomestudent === '' || sexo === '' || datanascimento === '' || morada === '' || contact === '' || numberbi === '' || curso === '' || inscricao === '' || username === '' || senha === '' || repeatsenha === '') {
        notie.alert({ text: 'Por favor, preencha todos os campos primeiro' });
        return;
    }


})

