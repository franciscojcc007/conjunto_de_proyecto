const validusername = "admin";
const validpassword = "1234";
const d = document;

const form = d.getElementById('user-login');
const loginButton = d.querySelector('.login');
const closeButton = d.querySelector('.close');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = d.getElementById('username').value;
  const password = d.getElementById('password').value;

  (username === validusername && password === validpassword )
  ?window.location.href = "http://192.168.32.49:5500/app/components/user_login_form_Click_On-Button/pag_bienvenida.html" 
  : alert("Usuario o contraseña incorrectos");

});
  
loginButton.addEventListener('click', function() {
  form.style.display = 'block';
});


closeButton.addEventListener('click', function() {
  form.style.display = 'none';
});
