
//class contato

class contato {
    constructor(nome, email, telefone, tipo, mensagem, terms, newsletter){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.mensagem = mensagem;
        this.terms = terms;
        this.newsletter = newsletter;
    }
    
}

function submitValidation(){
    const terms = document.getElementById("terms-checkbox");
    const submit = document.getElementById("submit-button");
    submit.disabled = !terms.checked

}

function Post(form) {
    const terms = document.getElementById("terms-checkbox");
    const newsletter = document.getElementById("news-letter-checkbox");

    if(!terms.checked){
        alert("Por favor, aceite os Termos e Condições para enviar o formulário.");
    }
    let data = new contato(
            form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("tipo").value,
            form.elements.namedItem("mensagem").value,
            terms.checked,
            newsletter.checked
        );

    console.log("Dados do fomrulário: ", data);
    alert(`Obrigado ${data.nome}! Sua mensagem do tipo ${data.tipo} foi enviada com sucesso.`)
    
    terms.checked = false;
    newsletter.checked = false;
    
    submitValidation()

    form.reset()
}

document.addEventListener("DOMContentLoaded", () => {
    submitValidation()
})