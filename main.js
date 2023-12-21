const loginForm = document.querySelector(".login-form");
const successContainer = document.querySelector(".success");
const userContainer = document.querySelector(".user");
const passContainer = document.querySelector(".pass");
const roContainer = document.querySelector(".ro");

const validateInput = (inputObj) => {
  const cleanedUsername = inputObj.username.trim();
  const cleanedPassword = inputObj.password.trim();
  const role = inputObj.role;

  const isNotEmpty = (value) => value.trim() !== "";
  const isUsernameValid = (username) => username.trim().length >= 4 && !/^\d/.test(username);
  const isPasswordValid = (password) => password.trim().length >= 4;

  const usernameEmpty = !isNotEmpty(cleanedUsername);
  const passwordEmpty = !isNotEmpty(cleanedPassword);
  const roleEmpty = !isNotEmpty(role);
  const usernameInvalid = !isUsernameValid(cleanedUsername);
  const passwordInvalid = !isPasswordValid(cleanedPassword);

  const setInputError = (inputId) => {
    const inputElement = loginForm.elements[inputId];
    inputElement.classList.add("input-error");
  };

  if (usernameEmpty || usernameInvalid) {
    setInputError("username");
  } else {
    loginForm.elements.username.classList.remove("input-error");
  }

  if (passwordEmpty || passwordInvalid) {
    setInputError("password");
  } else {
    loginForm.elements.password.classList.remove("input-error");
  }

  if (roleEmpty) {
    setInputError("role");
  } else {
    loginForm.elements.role.classList.remove("input-error");
  }

  if (!usernameEmpty && !usernameInvalid && !passwordEmpty && !passwordInvalid && !roleEmpty) {
    if (cleanedUsername === "june" && cleanedPassword === "1234") {
      window.location.href = "https://www.example.com";
    } else {
      showResult();
    }
  }
};

const showResult = () => {
  successContainer.textContent = "Login unsuccessful";
  userContainer.textContent = "Username: " + cleanedUsername;
  passContainer.textContent = "Password: " + cleanedPassword;
  roContainer.textContent = "Role: " + role;
};

const handleLogin = (e) => {
  e.preventDefault();
  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener("submit", handleLogin);
