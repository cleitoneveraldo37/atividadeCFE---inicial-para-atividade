//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:"smooth"
        }
    )
}
//Validação de Login
function Login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == "cleiton" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0){
        alerta("Dados incorretos. Acesso negado");
    }

}

//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
    }

