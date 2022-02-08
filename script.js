document.addEventListener('DOMContentLoaded', function () {

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let mail = document.getElementById("email");
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    let button = document.getElementById("button");
    let regularMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    let regularPass = /(?=.*[a-z])(?=.*[A-Z])/;

    button.addEventListener('click', () => {
        const valid = {
            firstName: '2222',
            lastName: false,
            mail: false,
            password1: false,
            password2: false
        }
        console.log(valid)

       const func = (name, string, bool, qqq) => {
           valid[string] = bool;
           name.classList[qqq]("error");
       }

        const check = (condition, name, string) => condition
            ? func(name, string, false, 'add')
            : func(name, string, true, 'remove')

        check(firstName.value.length < 5, firstName, 'firstName')
        check(lastName.value.length < 5, lastName, 'lastName')
        check(regularMail.test(mail.value) == false, mail, 'mail')
        check(regularPass.test(password1.value) == false, password1, 'password1')
        check(password2.value !== password1.value, password2, 'password2')

        // if(firstName.value.length < 5) {
        //     valid.firstName = false;
        //     firstName.classList.add("error");
        // } else {
        //     valid.firstName = true;
        //     firstName.classList.remove("error");
        // }

        // if(lastName.value.length < 5) {
        //     valid.lastName = false;
        //     lastName.classList.add("error");
        // } else {
        //     valid.lastName = true;
        //     lastName.classList.remove("error");
        // }

        // if(regularMail.test(mail.value) == false) {
        //     valid.mail = false;
        //     mail.classList.add("error");
        // } else {
        //     valid.mail = true;
        //     mail.classList.remove("error");
        // }

        // if(regularPass.test(password1.value) == false) {
        //     valid.password1 = false;
        //     password1.classList.add("error");
        // } else {
        //     valid.password1 = true;
        //     password1.classList.remove("error");
        // }
        //
        // if(password2.value !== password1.value) {
        //     valid.password2 = false;
        //     password2.classList.add("error");
        // } else {
        //     valid.password2 = true;
        //     password2.classList.remove("error");
        // }

        if(!Object.values(valid).includes(false)) {
            document.getElementById("first-name").innerHTML = firstName.value;
            document.getElementById("last-name").innerHTML = lastName.value;
            document.getElementById("mail").innerHTML = mail.value;
            document.getElementById("password").innerHTML = password1.value;
        } else {
            document.getElementById("first-name").innerHTML = "";
            document.getElementById("last-name").innerHTML = "";
            document.getElementById("mail").innerHTML = "";
            document.getElementById("password").innerHTML = "";
        }
    });

})
