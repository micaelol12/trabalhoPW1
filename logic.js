const USER_NAME_ID = "user_name";
const USER_IMAGE_ID = "user_image";
const HIDDEN_CLASS = "hidden";
const PAGINA_INICIAL = "index.html";

const userName = document.getElementById(USER_NAME_ID);
const userAvatar = document.getElementById(USER_IMAGE_ID);

const getUserName = () => localStorage.getItem("user_name");

const logado = () => !!getUserName();

const GerenciaAvatar = () => {
  if (!logado()) {
    userName.innerText = "Usuário não autenticado";
    userAvatar.classList.add(HIDDEN_CLASS);
  } else {
    userName.innerText = getUserName();
    userAvatar.classList.remove(HIDDEN_CLASS);
  }
};

function vaiParaPaginaInicial() {
  window.location.href = PAGINA_INICIAL;
}

GerenciaAvatar();
