const loginForm = document.querySelector(".login-form");
const successContainer = document.querySelector(".success");
const userContainer = document.querySelector(".user");
const passContainer = document.querySelector(".pass");
const roContainer = document.querySelector(".ro");

let cleanedUsername, cleanedPassword, role;

const validateInput = (inputObj) => {
  cleanedUsername = inputObj.username.replace(/\s/g, "").trim();
  cleanedPassword = inputObj.password.replace(/\s/g, "").trim();
  role = inputObj.role;

  const isNotEmpty = (value) => value.trim() !== "";
  const isUsernameValid = (username) => username.trim().length >= 4;
  const isPasswordValid = (password) => password.trim().length >= 4 && /\d/.test(password) && /[a-zA-Z]/.test(password);

  const usernameEmpty = !isNotEmpty(cleanedUsername);
  const passwordEmpty = !isNotEmpty(cleanedPassword);
  const roleEmpty = !isNotEmpty(role);
  const usernameInvalid = !isUsernameValid(cleanedUsername);
  const passwordInvalid = !isPasswordValid(cleanedPassword);

  const setInputError = (inputId, showError, errorMessage) => {
    const inputElement = loginForm.elements[inputId];
    if (showError) {
      inputElement.classList.add("input-error");
      inputElement.setAttribute("placeholder", errorMessage);
    } else {
      inputElement.classList.remove("input-error");
      inputElement.removeAttribute("placeholder");
    }
  };

  setInputError("username", usernameEmpty || usernameInvalid, "ต้องมีตัวอักษรอย่างน้อย 4 ตัว");
  setInputError("password", passwordEmpty || passwordInvalid, "ต้องมีตัวเลขและตัวอักษร และมีความยาวอย่างน้อย 4 ตัว");
  setInputError("role", roleEmpty, "เลือกบทบาท");

  if (!usernameEmpty && !usernameInvalid && !passwordEmpty && !passwordInvalid && !roleEmpty) {
    successContainer.textContent = "Login successful";
    userContainer.textContent = "Username: " + cleanedUsername;
    passContainer.textContent = "Password: " + cleanedPassword;
    roContainer.textContent = "Role: " + role;

    setTimeout(function () {
      window.location.href = "https://www.example.com";
    }, 1500);
  }
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
