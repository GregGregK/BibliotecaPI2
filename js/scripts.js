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
        login: 'teste',
        pass: 'teste'
    },
    {
        login: 'natan_bays',
        pass: 'lK742'
    }
] 

let botao = document.getElementById('button-login');




function logar() {
    let pegaUsuario = document.getElementById('input-usuario').value;
    let pegaSenha = document.getElementById('input-password').value;
    let validaLogin = false;

    for (let i in usuarios) {
        if (pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass) {
            location.href = "public/pages/home.html";
            validaLogin = true;
            break;
        } else if (pegaUsuario == "admin" && pegaSenha == "admin") {
            location.href = "public/pages/admin.html";
            validaLogin = true;
            break;
        }
    }

    let senhaInput = document.getElementById('input-password');

    senhaInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        logar();
    }
    });

    if (validaLogin) {
        alert('Bem-vindo!');
    } else {
        alert('Usuário ou senha incorreta');
    }
}
// ...
