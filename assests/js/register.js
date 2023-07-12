var registerBlock = document.querySelector("#register");
var registerNext = document.querySelector("#register__next");
var logIn = document.querySelector("#login");
var formLogIn = document.querySelector(".auth-form__container--login");
var btnLogInBlock = document.querySelector(".auth-form__side--has-acc-login");
var formRegister = document.querySelector(".auth-form__container");

btnLogInBlock.addEventListener("click", function (e) {
  e.preventDefault();
  formRegister.classList.add("hidden");
  formLogIn.classList.remove("hidden");
});

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var confirmPasswordInput = document.querySelector("#confirm-password");

function showError(input, message) {
  var parent = input.parentElement;
  var small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  var parent = input.parentElement;
  var small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  var isEmptyError = false;
  listInput.forEach(function (input) {
    input.value = input.value.trim();
    if (!input.value) {
      isEmptyError = true;
      showError(input, "không được để trống");
    } else {
      showSuccess(input);
    }
  });
  return isEmptyError;
}

function checkEmailError(input) {
  var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  var emailValue = input.value.trim();

  var isEmailError = !regexEmail.test(emailValue);

  if (regexEmail.test(emailValue)) {
    showSuccess(input);
  } else {
    showError(input, "Email không hợp lệ");
  }

  return isEmailError;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, "phải có ít nhất " + min + " ký tự");
    return true;
  }
  if (input.value.length > max) {
    showError(input, "không được quá " + max + " ký tự");
    return true;
  }
  return false;
}

function checkMatchPasswordError(passwordInput, cfpasswordInput) {
  passwordInput.value = passwordInput.value.trim();
  if (passwordInput.value !== cfpasswordInput.value) {
    showError(cfpasswordInput, "Mật khẩu không trùng khớp");
    return true;
  }
  return false;
}

registerBlock.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmptyError = checkEmptyError([emailInput]);
  let isEmailError = checkEmailError(emailInput);

  if (!isEmptyError && !isEmailError) {
    registerBlock.classList.add("hidden");
    registerNext.style.display = "block";
  } else {
    console.log("Có lỗi xảy ra trong quá trình xác thực form");
  }
});

registerNext.addEventListener("submit", function (e) {
  e.preventDefault();

  let isPasswordLengthError = checkLengthError(passwordInput, 3, 10);
  let isMatchError = checkMatchPasswordError(
    passwordInput,
    confirmPasswordInput
  );

  if (!isPasswordLengthError && !isMatchError) {
    window.location.href = "index.html";
  } else {
    console.log("Có lỗi xảy ra trong quá trình xác thực form");
  }
});

var email_logIn = document.querySelector('#email_login')
var password_logIn = document.querySelector('#password_login')

logIn.addEventListener('submit', function(e) {
    e.preventDefault();
  
    let isEmptyError = checkEmptyError([email_logIn]);
    let isEmailError = checkEmailError(email_logIn);
    let isPasswordLengthError = checkLengthError(password_logIn, 3, 10);
   
  
    if (!isEmptyError && !isEmailError && !isPasswordLengthError) {
        window.location.href = 'index.html';
    } else {
      console.log('Có lỗi xảy ra trong quá trình xác thực form');
    }
});

