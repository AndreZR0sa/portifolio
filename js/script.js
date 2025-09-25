function contrate(){
    window.open("https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20seus%20servi%C3%A7os.", "_blank");
}

function baixar(){
    window.open("https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9i0j", "_blank");
}

function  enviar(){
    if(document.getElementById("nome").value === "" || document.getElementById("email").value === "" || document.getElementById("mensagem").value === ""){
        alert("Por favor, preencha todos os campos.");
    }
    else{
        alert("Mensagem enviada com sucesso!");
    }
}

function scrollToTarget() {
    const home = document.getElementById('home');
    home.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function scrollToSobre() {
    const sobre = document.getElementById('sobre');
    sobre.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function scrollToTrabalho() {
    const trabalho = document.getElementById('trabalho');
    trabalho.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function scrollToContato() {
    const contato = document.getElementById('contato');
    contato.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function face(){
    window.open("https://www.facebook.com/seuusuario", "_blank");
}

function insta(){
    window.open("https://www.instagram.com/seuusuario", "_blank");
}

function linke(){
    window.open("https://www.linkedin.com/in/seuusuario", "_blank");
}

function git(){
    window.open("https://www.github.com/AndreZR0sa", "_blank");
}

function whats(){
    window.open("https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato.", "_blank");
}