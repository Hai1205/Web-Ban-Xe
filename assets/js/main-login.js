const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const showPasswordCheckbox = document.getElementById('showPassword');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const iconshowpassword = document.getElementById('btn-show-password');

    iconshowpassword.onclick = () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
    };



    function checkPasswordMatch() {
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const matchMessage = document.getElementById('matchMessage');

        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password === confirmPassword) {
            matchMessage.innerHTML = 'Mật khẩu khớp!';
            matchMessage.style.color = 'green';
        } else {
            matchMessage.innerHTML = 'Mật khẩu không khớp!';
            matchMessage.style.color = 'red';
        }
    }

