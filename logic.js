const USER_NAME_ID = "user_name";
const USER_IMAGE_ID = "user_image";
const HIDDEN_CLASS = "hidden";
const PAGINA_INICIAL = "index.html";
const PAGINA_PERFIL = "perfil.html"
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
  if(userName && userAvatar){
    if (!logado()) {
      userName.innerText = "Usuário não autenticado";
      userAvatar.classList.add(HIDDEN_CLASS);
    } else {
      userName.innerText = getUser().login;
      userAvatar.classList.remove(HIDDEN_CLASS);
    }
  }
  
};

if(form){ 
form.addEventListener('submit', (event) => {
  event.preventDefault()
   
  const user = {
    login: loginInput.value,
    password: passwordInput.value
  }
  if(!user.login || !user.login){
    window.alert("Informe os dados de autenticação")
    return;   
  }
  saveUser(user)
  GerenciaAvatar()
  vaiParaPaginaInicial()
})
}


function vaiParaPaginaInicial() {
  window.location.href = PAGINA_INICIAL;
}


function vaiParaPerfil() {
  window.location.href = PAGINA_PERFIL;
}

GerenciaAvatar();
