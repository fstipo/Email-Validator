const changeInput = () => {
    document.querySelector('.email').addEventListener('keyup', emailValidate);
}

const emailValidate = () => {
    const msg = document.querySelector('.message');
    const icon = document.querySelector('.icon');
    const emailValue = document.querySelector('.email').value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;

    if (emailValue.match(emailRegex)) {
        msg.classList.add('valid')
        msg.classList.remove('invalid');
        msg.innerHTML = 'Valid Email';
        icon.classList.remove('fa-envelope');
        icon.classList.remove("fa-exclamation-circle");
        icon.classList.add("fa-check-circle");



    } else {
        msg.classList.add('invalid')
        msg.classList.remove('valid');
        msg.innerHTML = 'Email is not valid';
        icon.classList.remove('fa-envelope');
        icon.classList.add("fa-exclamation-circle");
        icon.classList.remove("fa-check-circle");

    };

    if (emailValue === "") {
        msg.innerHTML = "";
        icon.classList.add('fa-envelope');
        icon.classList.remove("fa-exclamation-circle");


    } else {
        icon.classList.remove('fa-envelope');
    }

}

changeInput();

document.onloadedmetadata