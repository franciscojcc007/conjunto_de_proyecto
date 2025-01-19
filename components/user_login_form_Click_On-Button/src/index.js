const validusername = "admin";
const validpassword = "1234";
const d = document;

const form = d.getElementById('user-login');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = d.getElementById('username').value;
  const password = d.getElementById('password').value;

  const openLogin =  username === validusername && password === validpassword ?
  window.location.href = "http://192.168.32.49:5500/components/user_login_form_Click_On-Button/pag_bienvenida.html" : alert("Usuario o contraseña incorrectos");

});
  