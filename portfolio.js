'user strict'
const mijnhoofttittle = document.getElementById("mijn-hooft-tittle");
console.log(mijnhoofttittle);
mijnhoofttittle.style.backgroundColor = " rgb(57, 135, 135)";
mijnhoofttittle.style.textAlign = " center";
mijnhoofttittle.style.fontFamily = "Georgia, Times, 'Times New Roman', serif"
mijnhoofttittle.innerText = " Mijn Portfolio van Web Advenced "

//------------------------------------------------------------------------------------

const mijnvraag = document.querySelector(".klik-event");
const vraag = document.getElementById("vraag");
console.log(vraag);
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
const valideren = document.getElementById("valideren");
const errorblock = document.getElementById("errorblock");

createUser.addEventListener("submit", (e) => {
    let errors = [];
    if (usernaam.value == "" || usernaam.value == null) {
        errors.push("Gebruikersnaam is verplicht");
    }
    if (usernaam.value.length = 3) {
        errors.push("Gebruikersnaam moet minstens 3 karakters zijn");
    }
    if (email.value === "" || email.value == null) {
        errors.push("Email is verplicht");
    }
    if (paaswoord.value === "" || paaswoord.value == null) {
        errors.push("Passwoord is verplicht");
    }
    if (paaswoord.value === usernaam.value) {
        errors.push("Passwoord kan niet hetzelfde zijn als gebruikersnaam");
        if (paaswoord.value.length <= 6) {
            errors.push("Passwoord moet minstens 6 karakters zijn");
        }
    }
    if (errors.length > 0) {
        e.preventDefault();
        errorblock.innerText = errors.join(",");
        errorblock.style.color = "red";
    }
});

//------------------------------------------------------------------------------------
const PI = Math.PI;
let straal;
let oppervlakte;


Document.getElementById("bereken").onclick = function () {
    straal = document.getElementById("radiusInput").value;
    straal = Number(straal);

    omtrek = 2 * PI * straal;
    document.getElementById("resiltaat").textContent = "Omtrek van de cirkel: " + omtrek;




    oppervlakte = PI * straal * straal;

    document.getElementById('resultaat').textcontent = `Omtrek van de cirkel: ${omtrek} Oppervlakte van de cirkel: ${oppervlakte}`;
}

//------------------------------------------------------------------------------------
function begroetGebruiker() {
    const naamInput = document.getElementById('naamInput').value;
    const begroetingsBericht = document.getElementById('begroetingsBericht');
    begroetingsBericht.innerHTML = `Hallo, ${naamInput}! Welkom bij de takenlijst.`;
}

function voegTaakToe() {
    const taakNaam = document.getElementById('taakNaam').value;
    const taakBeschrijving = document.getElementById('taakBeschrijving').value;
    const takenlijst = document.getElementById('takenlijst');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${taakNaam}:</strong> ${taakBeschrijving}`;
    takenlijst.appendChild(listItem);
    document.getElementById('taakNaam').value = '';
    document.getElementById('taakBeschrijving').value = '';
}


//------------------------------------------------------------------------------------


// Array voor het opslaan van boekobjecten
// let boeken = [];

// Formulier indienen handler
document.getElementById('boekFormulier').addEventListener('submit', function (event) {
    event.preventDefault();

    // Gegevens van het formulier ophalen met object destructuring
    const { titelInput, auteurInput, genreInput } = event.target.elements;

    // Nieuw boekobject maken met object destructuring
    const nieuwBoek = {
        titel: titelInput.value,
        auteur: auteurInput.value,
        genre: genreInput.value
    };

    // Boek toevoegen aan de lijst
    boeken.push(nieuwBoek);

    // Boekenlijst bijwerken
    updateBoekenlijst();

    // Formulier resetten
    event.target.reset();
});

// Functie om de boekenlijst bij te werken
function updateBoekenlijst() {
    const boekenlijst = document.getElementById('boekenlijst');
    boekenlijst.innerHTML = '';

    // Array destructuring om boekinformatie te halen
    boeken.forEach(({ titel, auteur, genre }, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${titel}</strong> - ${auteur}, ${genre}
                              <button onclick="verwijderBoek(${index})">Verwijder</button>`;
        boekenlijst.appendChild(listItem);
    });
}

// Functie om een boek te verwijderen uit de lijst
function verwijderBoek(index) {
    boeken.splice(index, 1);
    updateBoekenlijst();
}

//------------------------------------------------------------------------------------

// Array voor het opslaan van boekobjecten
let boekenlijst = [];

// Functie om een boek toe te voegen aan de lijst met behulp van de Spread-operator
function voegBoekToe(titel, auteur) {
    const nieuwBoek = { titel, auteur };
    boekenlijst = [...boekenlijst, nieuwBoek];
}

// Flexibele functie om een willekeurig aantal boeken toe te voegen met behulp van de Rest-parameter
function voegBoekenToe(...boeken) {
    boekenlijst = [...boekenlijst, ...boeken];
}

// Functie om de boekenlijst weer te geven
function toonBoekenlijst() {
    const boekenlijstContainer = document.getElementById('boekenlijstContainer');
    const boekenlijstDiv = document.createElement('div');
    boekenlijstDiv.classList.add('boekenlijst');

    const heading = document.createElement('h2');
    heading.textContent = "Boekenlijst";
    boekenlijstDiv.appendChild(heading);

    boekenlijst.forEach((boek, index) => {
        const boekItem = document.createElement('p');
        boekItem.textContent = `${index + 1}. ${boek.titel} - ${boek.auteur}`;
        boekenlijstDiv.appendChild(boekItem);
    });

    boekenlijstContainer.innerHTML = '';
    boekenlijstContainer.appendChild(boekenlijstDiv);
}

// Voorbeelden van boeken toevoegen
voegBoekToe('The Great Gatsby', 'F. Scott Fitzgerald');
voegBoekToe('To Kill a Mockingbird', 'Harper Lee');
voegBoekenToe(
    { titel: '1984', auteur: 'George Orwell' },
    { titel: 'Pride and Prejudice', auteur: 'Jane Austen' }
);








//------------------------------------------------------------------------------------


const boeken = [
    { titel: 'The Great Gatsby', auteur: 'F. Scott Fitzgerald' },
    { titel: 'To Kill a Mockingbird', auteur: 'Harper Lee' },
    { titel: '1984', auteur: 'George Orwell' },
    { titel: 'Pride and Prejudice', auteur: 'Jane Austen' }
];

// Functie om de boekenlijst weer te geven
function toonBoekenlijst() {
    const boekenlijstElement = document.getElementById('boekenlijst');

    // Iteratie over de array van boeken en weergeven op de webpagina
    boeken.forEach(function (boek) {
        const listItem = document.createElement('li');
        listItem.textContent = `${boek.titel} - ${boek.auteur}`;
        boekenlijstElement.appendChild(listItem);
    });
}

// Roep de functie aan om de boekenlijst weer te geven wanneer de pagina geladen is
document.addEventListener('DOMContentLoaded', toonBoekenlijst);

//------------------------------------------------------------------------------------

// Array voor het opslaan van boekobjecten

// Selecteer knopelement
const greetButton = document.getElementById('greetButton');
// Selecteer berichtelement
const greetMessage = document.getElementById('greetMessage');

// Arrow function om een welkomstbericht weer te geven
const greet = () => {
    greetMessage.textContent = "Hello, welcome to Arrow Function Example!";
};

// Voeg een event listener toe aan de knop om de arrow function aan te roepen bij klikken
greetButton.addEventListener('click', greet);



//------------------------------------------------------------------------------------

// Selecteer knopelement
const changeColorButton = document.getElementById('changeColorButton');

// Callbackfunctie om de achtergrondkleur te veranderen
const changeBackgroundColor = () => {
    document.body.style.backgroundColor = 'lightgreen';
};

// Voeg een event listener toe aan de knop om de callbackfunctie aan te roepen bij klikken
changeColorButton.addEventListener('click', changeBackgroundColor);


// Functie die een promise retourneert
/* const delayMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 2000);
    });
}; */

// Roep de functie aan en verwerk de opgeloste promise
delayMessage().then((message) => {
    console.log(message); // Output: "Hello, world!" na 2 seconden
}).catch((error) => {
    console.error(error);
});
// Functie die een promise retourneert
const delayMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Hello, world!");
            } else {
                reject("Error occurred!");
            }
        }, 2000);
    });
};
// Gebruik van then() en catch() om waarden uit de promise te halen
delayMessage().then((message) => {
    console.log(message); // Output: "Hello, world!" na 2 seconden
}).catch((error) => {
    console.error(error);
});


//------------------------------------------------------------------------------------


// Asynchrone functie om gegevens van de API op te halen
const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return null;
    }
};

// Functie om de gebruikers weer te geven op de webpagina
const displayUsers = async () => {
    const userListElement = document.getElementById('userList');
    const users = await getUsers();
    if (users) {
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.classList.add('user');
            userElement.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
            `;
            userListElement.appendChild(userElement);
        });
    } else {
        userListElement.innerHTML = '<p>Er is een fout opgetreden bij het ophalen van de gebruikers.</p>';
    }
};

// Roep de functie aan om de gebruikers weer te geven wanneer de pagina geladen is
document.addEventListener('DOMContentLoaded', displayUsers);

//------------------------------------------------------------------------------------
// Asynchrone functie om gegevens van de API op te halen
const getMovies = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return null;
    }
};

// Functie om de films weer te geven op de webpagina
const displayMovies = async () => {
    const filmListElement = document.getElementById('filmList');
    const movies = await getMovies();
    if (movies) {
        movies.forEach(movie => {
            const movieElement = document.createElement('li');
            movieElement.innerHTML = `
                <h2>${movie.title}</h2>
                <p>${movie.body}</p>
            `;
            filmListElement.appendChild(movieElement);
        });
    } else {
        filmListElement.innerHTML = '<p>Er is een fout opgetreden bij het ophalen van de films.</p>';
    }
};

// Roep de functie aan om de films weer te geven wanneer de pagina geladen is
//------------------------------------------------------------------------------------



// Asynchrone functie om gegevens van de API op te halen
const getMovies = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return null;
    }
};


const displayMovies = async () => {
    const filmListElement = document.getElementById('filmList');
    const movies = await getMovies();
    if (movies) {
        movies.forEach(movie => {
            const movieElement = document.createElement('li');
            movieElement.innerHTML = `
                <h2>${movie.title}</h2>
                <p>${movie.body}</p>
            `;
            filmListElement.appendChild(movieElement);
        });
    } else {
        filmListElement.innerHTML = '<p>Er is een fout opgetreden bij het ophalen van de films.</p>';
    }
};

// Roep de functie aan om de films weer te geven wanneer de pagina geladen is
document.addEventListener('DOMContentLoaded', displayMovies);











