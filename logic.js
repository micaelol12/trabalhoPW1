const USER_NAME_ID = "user_name";
const USER_IMAGE_ID = "user_image";
const HIDDEN_CLASS = "hidden";
const PAGINA_INICIAL = "index.html";

const FORM_ID = 'form'
const LOGIN_ID = "login";
const PASSWORD_ID = 'password'

const loginInput = document.getElementById(LOGIN_ID);
const passwordInput = document.getElementById(PASSWORD_ID);
const form = document.getElementById(FORM_ID)

const userName = document.getElementById(USER_NAME_ID);
const userAvatar = document.getElementById(USER_IMAGE_ID);

const getUser = () => JSON.parse(localStorage.getItem("user"));

const logado = () => !!getUser();

const saveUser = (user) => localStorage.setItem('user',JSON.stringify(user))

const GerenciaAvatar = () => {
  if (!logado()) {
    userName.innerText = "Usuário não autenticado";
    userAvatar.classList.add(HIDDEN_CLASS);
  } else {
    userName.innerText = getUser().login;
    userAvatar.classList.remove(HIDDEN_CLASS);
  }
};


form.addEventListener('submit', (event) => {
  event.preventDefault()
  const user = {
    login: loginInput.value,
    password: passwordInput.value
  }
  saveUser(user)
  GerenciaAvatar()
})

function vaiParaPaginaInicial() {
  window.location.href = PAGINA_INICIAL;
}

GerenciaAvatar();
