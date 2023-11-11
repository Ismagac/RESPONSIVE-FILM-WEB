const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('login-password');

togglePassword.addEventListener('click', function () {
  if (passwordInput.getAttribute('type') === 'password') {
    passwordInput.setAttribute('type', 'text');
    this.setAttribute('src', 'img/ojoabierto.png');
    this.setAttribute('alt', '.');
  } else {
    passwordInput.setAttribute('type', 'password');
    this.setAttribute('src', 'img/ojocerrado.png');
    this.setAttribute('alt', '.');
  }
});

var registeredUsers = [
  {
    username: "111",
    realname: "Ismael García",
    birthdate: "1990-01-01",
    email: "user1@example.com",
    password: "111"
  },
  {
    username: "222",
    realname: "Irene",
    birthdate: "1995-05-10",
    email: "user2@example.com",
    password: "222"
  },
];

function validateLogin(event) {
  event.preventDefault();

  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  var isValid = checkCredentials(username, password);

  if (isValid) {
    window.location.href = "menu.html";
  } else {
    document.getElementById("login-error").textContent =
      "Usuario o contraseña incorrectos";
  }
}

function checkCredentials(username, password) {
  for (var i = 0; i < registeredUsers.length; i++) {
    var user = registeredUsers[i];
    if (user.username === username && user.password === password) {
      return true;
    }
  }

  return false;
}

function validateRegistration(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var realname = document.getElementById("realname").value;
  var birthdate = document.getElementById("birthdate").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var agreeCheckbox = document.getElementById("agree-checkbox").checked;
  var agreeTermsCheckbox = document.getElementById("agree-terms-checkbox").checked;

  var isValid = validateFields(username, realname, birthdate, email, password, confirmPassword, agreeCheckbox, agreeTermsCheckbox);

  if (isValid) {
    var user = {
      username: username,
      realname: realname,
      birthdate: birthdate,
      email: email,
      password: password
    };
    registeredUsers.push(user);

    window.location.href = "menu.html";
  } else {
    document.getElementById("registration-error").textContent =
      "Por favor, complete todos los campos correctamente";
  }
}

function validateFields(username, realname, birthdate, email, password, confirmPassword, agreeCheckbox, agreeTermsCheckbox) {
  if (
    username === "" ||
    realname === "" ||
    birthdate === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === "" ||
    !agreeCheckbox ||
    !agreeTermsCheckbox
  ) {
    return false;
  }

  for (var i = 0; i < registeredUsers.length; i++) {
    if (registeredUsers[i].username === username) {
      return false;
    }
  }

  if (password !== confirmPassword) {
    return false;
  }

  var birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!birthdate.match(birthdateRegex)) {
    return false;
  }


  return true;
}

var loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", validateLogin);

var registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", validateRegistration);
