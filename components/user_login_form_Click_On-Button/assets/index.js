const validusername = "admin";
const validpassword = "123456";
const d = document;

const form = d.getElementById('user-login');

form.addEventListener('submit', function(e,w) {
  e.preventDefault();

  const username = d.getElementById('username').value;
  const password = d.getElementById('password').value;

  if(username === validusername && password === validpassword){
    w.location.href = "/components/user_login_form_Click_On-Button/pag_bienvenida.html";
  }else{
    alert("Usuario o contraseña incorrectos");
  }
}(window));
  