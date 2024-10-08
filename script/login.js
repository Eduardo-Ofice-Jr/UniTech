const submitButton = document.querySelector('#submit_btn');
const inputUser = document.querySelector('#input_username');
const inputPassword = document.querySelector('#input_password');

submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = inputUser.value;
    const password = inputPassword.value;
    if (username === '' || password === '') {
        notie.alert({ text: 'Por favor, preencha todos os campos'});
        return;
    }


    
})