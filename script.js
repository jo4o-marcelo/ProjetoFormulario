const form = document.getElementById("form");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confSenha = document.getElementById("confsenha");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});
email.addEventListener("blur", () => {
  checkInputEmail();
});
usuario.addEventListener("blur", () => {
  checkInputUsuario();
});
senha.addEventListener("blur", () => {
  checkInputSenha();
});
confSenha.addEventListener("blur", () => {
  checkInputConfSenha();
});

function checkInputUsuario() {
  const usuarioValue = usuario.value;

  if (usuarioValue === "") {
    erroInput(usuario, "Digite o usuário!");
  } else {
    const formItem = usuario.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    erroInput(email, "Digite o Email para prosseguir!");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}
function checkInputSenha() {
  const senhaValue = senha.value;

  if (senhaValue === "") {
    erroInput(senha, "É preciso criar uma senha!");
  } else if (senhaValue.length < 8) {
    erroInput(senha, "A senha deve ter no mínimo 8 dígitos.");
  } else {
    const formItem = senha.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputConfSenha() {
  const senhaValue = senha.value;
  const confSenhaValue = confSenha.value;

  if (confSenhaValue === "") {
    erroInput(confSenha, "Confirme sua senha....");
  } else if (confSenhaValue !== senhaValue) {
    erroInput(confSenha, "As senhas não coincidem...Digite novamente.");
  } else {
    const formItem = confSenha.parentElement;
    formItem.className = "form-content";
  }
}
function checkForm() {
  checkInputUsuario();
  checkInputEmail();
  checkInputSenha();
  checkInputConfSenha();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    alert("Cadastro Concluído!");
  }
  console.log(isValid);
}
function erroInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;
  formItem.className = "form-content erro";
}
