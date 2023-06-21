// function logar(){
//     var login = document.getElementById('input-usuario').value;
//     var senha = document.getElementById('input-password').value;

//     if(login == "admin" && senha == "admin"){
//         location.href="pages/admin.html"
//     }else if(login == "aluno" && senha =="aluno"){
        
//         location.href="pages/home.html"
//     }
//     else{
//         alert('usuario ou senha errado')
//     }


// }


const usuarios = [
    {
        login: 'gregori_monteiro',
        pass: 'y1$K6'
    },
    {
        login: 'pedro_sarmento',
        pass: '$M701'
    },
    {
        login: 'natan_bays',
        pass: 'lK742'
    }
] 

let botao = document.getElementById('button-login');

botao.addEventListener('click', function logar(){
    let pegaUsuario = document.getElementById('input-usuario').value
    let pegaSenha = document.getElementById('input-senha').value


    for(let i in usuarios){
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            location.href="index.html"
        }else if(login == "admin" && senha == "admin"){
            location.href="admin.html"
        }else{
            alert("USUARIO OU SENHA INCORRETA!")
        }
    }
})
    

