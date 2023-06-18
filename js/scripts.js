function logar(){
    var login = document.getElementById('input-usuario').value;
    var senha = document.getElementById('input-password').value;

    if(login == "admin" && senha == "admin"){
        alert('Em construção');
    }if(login == "aluno" && senha =="aluno"){
        alert('Sucesso')
        location.href="pages/home.html"
    }
    else{
        alert('usuario ou senha errado')
    }


}