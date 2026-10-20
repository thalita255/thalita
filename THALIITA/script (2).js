const formulario = document.getElementById("formulario-login");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const usuarioCorreto = "aluno";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {

        alert("login realizado com sucesso!");


    } else {

        alert("Usuário ou senha incorretas!");

    }

});