// Modal de Login
const btnLogin = document.getElementById('btnLogin');
const btnFechar = document.getElementById('btnFechar');
const loginModal = document.getElementById('loginModal');

btnLogin.onclick = function () {
    loginModal.showModal();
}

btnFechar.onclick = function () {
    loginModal.close();
}

// Login
const formLogin = document.querySelector('#loginModal form');

// Criando usuários para teste
let dadosUsuarios = [
    { nome: "user", email: "email@email.com", senha: "123" },
    { nome: "aluno", email: "aluno@email.com", senha: "aluno" },
    { nome: "root", email: "root@email.com", senha: "root" },
];

formLogin.addEventListener('submit', evento => {
    evento.preventDefault();

    let msgErro = document.querySelector('.erro');
    if (msgErro) loginModal.removeChild(msgErro);

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    const usuario = dadosUsuarios.find(user => user.email === email && user.senha === senha);

    if (usuario) {
        sessionStorage.setItem('usuarioLogado', true);
        sessionStorage.setItem('nomeUsuario', usuario.nome);
        window.location.href = "./admin/index.html";
    } else {
        let erro = document.createElement('p');
        erro.classList.add("erro");
        erro.innerText = "Login ou senha inválidos!";
        loginModal.insertBefore(erro, formLogin);
        formLogin.reset();
    }
});
