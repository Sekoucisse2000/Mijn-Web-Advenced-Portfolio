'user strict'
const mijnhoofttittle = document.getElementById("mijn-hooft-tittle");
mijnhoofttittle.style.backgroundColor = " rgb(57, 135, 135)";
mijnhoofttittle.style.textAlign = " center";
mijnhoofttittle.style.fontFamily = "Georgia, Times, 'Times New Roman', serif"
mijnhoofttittle.innerText = " Mijn Portfolio van Web Advenced "

//------------------------------------------------------------------------------------

const mijnvraag = document.querySelector(".klik-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const antwoord = document.querySelector("p");

mijnvraag.addEventListener("click", () => {

});

btn1.addEventListener("click", () => {
    antwoord.classList.add("show-antwoord");
    antwoord.style.visibility = "visible";
    antwoord.style.background = "green";
});
btn2.addEventListener("click", () => {
    antwoord.classList.add("show-antwoord");
    antwoord.style.visibility = "visible";
    antwoord.style.background = "red";
});

//------------------------------------------------------------------------------------
const usernaam = document.getElementById("usernaam");
const email = document.getElementById("email");
const paaswoord = document.getElementById("paaswoord");
const submit = document.getElementById("submit");
const errorblock = document.getElementById("errors");

const createUser = (e) => {
    e.preventDefault();
    let errors = [];
    if (usernaam.value === "" || usernaam.value == null) {
        errors.push("Gebruikersnaam is verplicht");
    }
    if (email.value === "" || email.value == null) {
        errors.push("Email is verplicht");
    }
    if (paaswoord.value === "" || paaswoord.value == null) {
        errors.push("Passwoord is verplicht");
    }
    if (errors.length > 0) {
        e.preventDefault();
        errorblock.innerText = errors.join(", ");
        errorblock.style.color = "red";
    } else {
        errorblock.innerText = "Uw gegevens zijn verstuurd";
        errorblock.style.color = "green";
    }
}








